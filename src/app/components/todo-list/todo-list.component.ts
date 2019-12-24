import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() title: string;
  
  @Output() onToDoRemoved: EventEmitter<any> = new EventEmitter();
  @Output() onToDoFinished: EventEmitter<any> = new EventEmitter();

  constructor() { }

  toDoRemoved(title: string){
    this.onToDoRemoved.emit(title);
  }

  toDoFinished(title: string){
    this.onToDoFinished.emit(title);
  }

  ngOnInit() {
  }

}
