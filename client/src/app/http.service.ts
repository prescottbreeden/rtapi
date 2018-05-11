import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getTasks() {
    return this._http.get('/tasks');
  }

  getTask(id) {
    return this._http.get(`/tasks/${id}`);
  }

  createTask(newTask) {
    return this._http.post('/tasks/', newTask);
  }

  updateTask(id: string, editedTask) {
    return this._http.put(`/tasks/${id}`, editedTask);
  }

  completeTask(id: string, completedTask) {
    return this._http.put(`/tasks/${id}`, completedTask);
  }

  deleteTask(id: string) {
    return this._http.delete(`/tasks/` + id);
  }
}
