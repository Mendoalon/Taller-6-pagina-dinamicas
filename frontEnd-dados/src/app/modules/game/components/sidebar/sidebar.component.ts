import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamerService } from '../../services/gamer.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(  private gamerService: GamerService,
                private router: Router) { }

  ngOnInit(): void {
  }

  exit(): void {
    this.gamerService.delteGame().subscribe( data =>{
      this.router.navigate(['/']);
      localStorage.clear();
    } )

  }



}
