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

  constructor(private _httpService: HttpService) { }

  getTasksFromService() {
    console.log('button was clicked');
    const obsTask = this._httpService.getTasks();
    obsTask.subscribe(data => {
      console.log(data);
      this.tasks = data['data'];
    });
  }

  getTaskFromService(id: string) {
    console.log('button was clicked');
    const obsTask = this._httpService.getTask(id);
    obsTask.subscribe(data => {
      console.log(data);
      this.task = data['data'];
    });
  }
}
