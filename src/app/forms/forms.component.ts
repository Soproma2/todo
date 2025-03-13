import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [CommonModule,FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  tasks: string[] = []
  editedTask: string[]=[]

  addTask(data: any){
    
    this.tasks.push(data.task);
    
  }



    editTask(index: number, newTask:string){
      this.tasks[index]=newTask;

    }
  

  removeTask(index: number){
    this.tasks.splice(index, 1)
  }
}
