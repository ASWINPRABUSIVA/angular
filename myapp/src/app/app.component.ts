import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './03-Signals/counter/counter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CounterComponent, CommonModule],
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
  
  moves= [
    `move 1`,
    `move 2`,
    `move 3`,
    `move 4`,
    `move 5`,
    `move 6`,
    `move 7`,
    `move 8`
  ]
  fruits = [
    `apple`,
    `banana`,
    `cherry`,
    `date`,
    `elderberry`,
    `fig`,
    `grape`
  ]


}
