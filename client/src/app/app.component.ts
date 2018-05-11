import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the fucking platform...';
  task = {};
  tasks = [];
  newTask = {
    'title': 'title',
    'description': 'description'
  }
  editTask: any;
  taskDeleted: Boolean;

  constructor(private _httpService: HttpService) { }

  getTasksFromService() {
    const obsTask = this._httpService.getTasks();
    obsTask.subscribe(data => {
      console.log(data);
      this.tasks = data['data'];
    });
  }

  getTaskFromService(id: string) {
    const obsTask = this._httpService.getTask(id);
    obsTask.subscribe(data => {
      console.log(data);
      this.task = data['data'];
    });
  }

  createTaskFromService(newTask: any) {
    const obsTask = this._httpService.createTask(this.newTask);
    obsTask.subscribe(data => {
      console.log(data);
      this.getTasksFromService();
    });
  }

  updateTaskFromService(id: string, editTask) {
    const obsTask = this._httpService.updateTask(id, editTask);
    obsTask.subscribe(data => {
      console.log(data);
      this.getTasksFromService();
    });
  }

  completeTaskFromService(id: string, editTask) {
    editTask.completed = 'true';
    const obsTask = this._httpService.updateTask(id, editTask);
    obsTask.subscribe(data => {
      console.log(data);
      this.getTasksFromService();
    })
  }

  deleteTaskFromService(id: string) {
    const obsTask = this._httpService.deleteTask(id);
    obsTask.subscribe(data => {
      console.log(data)
      this.taskDeleted = true;
      this.getTasksFromService();
      setTimeout(function(){
        this.taskDeleted = false;
      }, 2000);
    });
  }
}
