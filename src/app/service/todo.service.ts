import { HttpClient } from "@angular/common/http";
import { TaskModel } from "../models/task-model.model";
import { Observable } from "rxjs";


export class TaskServide {
    private apiUrl = 'https://jsonplaceholder.typicode.com/todos/';

    constructor(private httpClient: HttpClient) { }

    getAllTasks(): Observable<TaskModel> {
        return this.httpClient.get<TaskModel>(this.apiUrl);
    }

    addTask(task: TaskModel): Observable<TaskModel> {
        return this.httpClient.post<TaskModel>(this.apiUrl, task);
    }

    delete(taskId: number): Observable<void> {
        return this.httpClient.delete<void>(`this.apiUrl/${taskId}`)
    }
}