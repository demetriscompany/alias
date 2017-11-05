import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() interval;
  @Output() finish = new EventEmitter();

  timeLeft = 0;

  constructor() { 
    
  }

  ngOnInit() {

  }

  start(){
    this.timeLeft = this.interval;
    const handle = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        clearInterval(handle);
        this.finish.emit();
      }
    }, 1000);
  }

}
