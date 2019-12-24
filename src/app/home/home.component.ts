import { Component, OnInit } from '@angular/core';
import todoItem from '../constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  noDataPresent: boolean = false;
  isLoading: boolean = false;
  
  list: todoItem[]=[{title: "Buy Milk"},{title: "Bread"}, {title: "Buy Bread"}];

  constructor(private http: HttpClient) { }
  addToDo(todo: string){
    console.log(`ToDo Added: ${todo}`);
  }

  removeToDo(todo: string){
    console.log(`ToDo Removed: ${todo}`);
  }

  finishToDo(todo: string){
    console.log(`ToDo Finished: ${todo}`);
    
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(){
    this.isLoading= true;

  }
}
