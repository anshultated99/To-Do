import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './components/input/input.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {MdcButtonModule, MdcTextFieldModule, MdcIconModule, MdcCardModule, MdcIconButtonModule} from '@angular-mdc/web';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    

    //MDC COMPONENTS
    MdcButtonModule, 
    MdcTextFieldModule, 
    MdcIconModule, 
    MdcCardModule, 
    MdcIconButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
