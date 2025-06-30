import { Component, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TaskService } from '../../../service/task.service';
import { TaskModel } from '../../../models/task-model.model';
import { take } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog'
import { AddTaskFormComponent } from '../../add-task-form/add-task-form.component';
import { ComponentType } from '@angular/cdk/portal';

@Component({
  selector: 'app-my-tasks',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatPaginatorModule],
  templateUrl: './my-tasks.component.html',
  styleUrl: './my-tasks.component.scss'
})
export class MyTasksComponent {

  private taskSvc = inject(TaskService);
  public tasks = signal<TaskModel[]>([]);
  private dialog = inject(MatDialog)

  currenPage: number = 0;
  tasksPerPage: number = 3;
  AddTaskFormComponent = AddTaskFormComponent;

  constructor() { }

  ngOnInit() {
    this.taskSvc.getAllTasks().pipe(take(1)).subscribe({
      next: (data: TaskModel[]) => {
        this.tasks.set(data);
      }
    })
  }

  get paginatedTasks() {
    const start = this.currenPage * this.tasksPerPage;
    return this.tasks().slice(start, start + this.tasksPerPage);
  }

  nextPage() {
    if ((this.currenPage + 1) * this.tasksPerPage < this.tasks().length) {
      this.currenPage++;
    }
  }

  prevPage() {
    if (this.currenPage > 0) {
      this.currenPage--;
    }
  }

  dialogAction<T>(component: ComponentType<T>): void {
    const screen = window.innerWidth;

    const width = screen < 480 ? '380px' : '40vw';
    const height = screen < 480 ? '450px' : '80vh';
    let currenDialog = this.dialog.open(component, {
      minWidth: width,
      minHeight: height,
    });
  }

  deleteTask(task: TaskModel) {
    let confirm = window.confirm('Esta seguro que desea eliminar la tarea' + task.title + '?');

    if (confirm) {
      this.taskSvc.delete(task.id).pipe(take(1)).subscribe({
        next: () => {
          alert(`La tarea ${task.title} se elimino correctamente.`);
        },
        error: (err) => {
          alert(`La tarea ${task.title} no se pudo eliminar: ${err}`);
        }
      })
    }
  }
}
