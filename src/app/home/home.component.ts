import { Component, OnInit } from '@angular/core';
import todoItem from '../constants';
import { HttpClient, HttpParams } from '@angular/common/http';

const BASE_URL = 'https://to-do-5eb05.web.app/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  noDataPresent: boolean = false;
  isLoading: boolean = false;
  
  list: todoItem[]=[];

  constructor(private http: HttpClient) { }
  addToDo(todo: string){
    console.log(`ToDo Added: ${todo}`);
    const params = new HttpParams({
      fromObject: {
        title: todo
      }
    });
    this.http.post(`${BASE_URL}/add-task`,params).subscribe(res => this.getTasks());
  }

  removeToDo(id: string){
    console.log(`ToDo Removed: ${id}`);
    this.http.get(`${BASE_URL}/remove-task/${id}`).subscribe(res => this.getTasks());
  }

  finishToDo(data){
    let id= data["id"];
    let isComplete = data["isComplete"];
    console.log(`ToDo Finished: ${id}`);

    let val = isComplete ? false : true;
    console.log(String(val));
    this.http.post(`${BASE_URL}/update-task/${id}`, {status : val}).subscribe(res =>{
      console.log(res);
      this.getTasks();
      
    })
    
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(){
    this.isLoading= true;
    this.http.get(`${BASE_URL}/get-tasks`).subscribe(res =>{
      console.log(res);
      if(res == "NULL"){
        this.noDataPresent = true;
        this.isLoading = false;
      }else{
        this.list = res;
      }
    });
  }
}
