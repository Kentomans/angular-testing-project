import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { ViewListComponent } from './view-list/view-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TaskListComponent,ViewListComponent,FormsModule],
})
export class AppComponent {
  title = 'angular-testing-project';

  tasks: string[]=[];

  addTask(task: string) {

  }

  deleteTask(task: string) {
  }

  getTasks(): string[] {

    return this.tasks;

  }

    
  task: string[]= [];

  ngOnInit() {
    this.tasks = this.task;
    this.recuperar();
    console.log("esto es lo que recupero", this.task)
  }

  recuperar(){

    const storedImages = localStorage.getItem('list');
      if (storedImages) {
        this.tasks = JSON.parse(storedImages) ;
      }
      return this.tasks;
    
  }
 
}
