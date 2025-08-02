import { Component, signal, Signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count = signal(0);
  doublecount: Signal<number>= computed(()=> this.count() * 2);

  increment(){
    this.count.set(this.count() + 1);
  }

  decrement(){
    this.count.set(this.count() - 1);
  }

 
}
