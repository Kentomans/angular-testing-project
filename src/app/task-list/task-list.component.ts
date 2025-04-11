import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [ FormsModule],
})
export class TaskListComponent {

  @Input() tasks: string[] = [];

  check: string = "";

  constructor() {
    console.log('TaskListComponent initialized');
  }


  addTask(check: string) { 
    
    const dates = check;
    if(dates === ""){
return ;
    }else{
    this.tasks.push(dates) ;
    localStorage.setItem('list', JSON.stringify(this.tasks));
        this.check='';
    console.log("Tarea Guardada: ", this.tasks)
  }
  }

  updateTask(task: string) {
    console.log('Updating task:', task);
  }

  deleteTask(task: string) {
    const list= task;
  
    console.log('Deleting task:', task);
  }
}
