import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TaskService } from '../../service/task.service';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskModel } from '../../models/task-model.model';
import { take } from 'rxjs';

@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [MatIcon, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.scss'
})
export class AddTaskFormComponent {

  private taskSvc = inject(TaskService);
  private fb = inject(FormBuilder);
  taskForm = this.createFormGroup()

  constructor(public dialogRef: MatDialogRef<AddTaskFormComponent>) { }

  createFormGroup() {
    return this.fb.group({
      title: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)])
    })
  }

  onSubmit() {
    const model = this.taskForm.value as TaskModel;
    this.taskSvc.addTask(model).pipe(take(1)).subscribe({
      next: data => {
        alert(`Tarea ${data.title} guardada correctamente`);
        this.closeClick()
      },
      error: (err) => { alert(`No se pudo guardar la tarea por ${err}`) }
    })
  }

  closeClick() {
    this.dialogRef.close();
  }
}
