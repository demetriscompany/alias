import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  @Input() word;
  @Input() guessed;
  @Output() played = new EventEmitter();
  @Output() edits = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
