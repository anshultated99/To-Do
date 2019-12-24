 
 import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  inputText: string= "";
  constructor() { }

  @Output() onToDoAdded: EventEmitter<any>= new EventEmitter();
  addNote(){
    this.onToDoAdded.emit(this.inputText);
  }
  ngOnInit() {
  }
 
}
