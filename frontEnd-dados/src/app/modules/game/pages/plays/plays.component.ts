import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.css']
})
export class PlaysComponent implements OnInit {
  constructor( private router: Router) { }

  ngOnInit(): void {

    // setTimeout(() => {
    //   if (localStorage.getItem('id') === null) {
    //     this.router.navigate(['/']);
    //     }
    //     }, 1000);
  }

}
