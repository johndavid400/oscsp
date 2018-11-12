import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})


export class QuestionComponent implements OnInit {
  
  constructor(private http: HttpClient) { }

  public currentQuestion: question;
  private list$: Array<question>;
  
  ngOnInit() {
    this.getJSON();
    // this.currentQuestion = this.list$;
  }
  
  getJSON() {
    this.http.get<question[]>("../../assets/questions.json")
    .subscribe(x => {
      this.list$ = x;
      this.currentQuestion = this.list$[0];

      console.log(x);
    });
  }

  getNextQuestion() {
    var i = this.currentQuestion.id;
    this.currentQuestion = this.list$[i];
  }
  
  getPreviousQuestion() {
    var i = this.currentQuestion.id - 2;
    this.currentQuestion = this.list$[i]
  }
}

export type question = { id: number, question: string };