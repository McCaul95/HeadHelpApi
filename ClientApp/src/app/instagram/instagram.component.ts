import { Component, OnInit } from '@angular/core';
import * as Instafeed from 'instafeed.js';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {
  

  constructor() { 
    
  }

  ngOnInit(): void {

     var feed = new Instafeed({
      get: 'tagged',
      tagName: 'awesome',
      clientId: 'YOUR_CLIENT_ID'
  });
  feed.run();
  }

}
