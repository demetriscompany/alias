import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  started = false;
  gameOver = false;

  word;
  history = [];

  private wordid = 0;
  private vocabulary;

  constructor(private http: Http){
    this.http
      .get("http://alias.moydomen.com/words.json")
      .subscribe(resp => {
        this.vocabulary = resp.json();
        this.word = this.getNextWord();
      });
  }

  onTimerFinish(){
    this.gameOver = true;
  }

  onWordPlayed(word){
    if (!this.gameOver) {
      this.history.push(word);
      this.word = this.getNextWord();
    }

    if (this.gameOver) {
      this.history.forEach(element=>{
        if (element.word == word.word) element.guessed = word.guessed;
      });
    }
  }

  getNextWord(){
    return this.vocabulary[this.wordid++];
  }

  getScore(){
    return this.history.reduce((acc, word)=> {
      return word.guessed ? ++acc : --acc;
    }, 0);
  }
}
