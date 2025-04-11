import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view-list',
  imports: [],
  templateUrl: './view-list.component.html',
  styleUrl: './view-list.component.css'
})
export class ViewListComponent {

  @Input() tasks: string[] = [];

  idx: string = "";
   delete(){

    let tas= this.tasks;
    // tas = tas.filter(this.tasks => this.task.length !== id_image);
    // localStorage.setItem(, JSON.stringify(images));
    
    console.log("Arreglo:-",tas)
    console.log("Eliminado")
   }
}
