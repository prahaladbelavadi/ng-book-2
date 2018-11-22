import { Component, OnInit, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@HostBinding('attr.class') cssClass = 'row'
votes: number
title: string
link: string
  constructor() { 
    this.title = 'Angular 2';
    this.link = 'https://angular.io';
    this.votes = 10;
  }

  voteUp(){
    this.votes = this.votes+1
    return false;
  }

  voteDown(){
    this.votes -= 1
    return false;
  }

  ngOnInit() {
  }

}
