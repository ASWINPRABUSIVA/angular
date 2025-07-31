import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  fullname = 'myapp';
  imageurl = 'https://picsum.photos/200/300';
  title = 'myapp';
  user:any =null;

  ngOnInit(){
    this.user = {
      name : 'Aswin',
      age : 20
    }
  }
  clickcount = 0;

  clickme(){
    this.clickcount++;

  }
  clickme2(){
    this.clickcount--;
  }
}
