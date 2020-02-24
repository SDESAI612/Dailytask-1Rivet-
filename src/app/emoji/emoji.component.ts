import { Component, OnInit } from '@angular/core';
import {EmojiPipe} from '../pipe/emoji.pipe'

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss']
})
export class EmojiComponent implements OnInit {

  public emojiName: string; 
  public numberToWord: string;

  constructor() { 
    this.numberToWord="";
  }

  ngOnInit() {
  }

}
