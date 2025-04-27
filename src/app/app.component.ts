import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  email:string="";

  // constructor(){
  //   setInterval(()=>{
  //     this.email+='a';
  //   },5000)
  // }

  onSubmit(){
    console.log(this.email);
  }
}
