import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  homeNav(){
    this.router.navigate(['/home']);
  }

  resourceNav(){
    this.router.navigate(['/resources']);
  }

  supportNav(){
    this.router.navigate(['/instagram']);
  }

  loginNav(){
    this.router.navigate(['/login']);
  }

}
