import { Component, OnInit } from '@angular/core';
import { Winner } from '../../interfaces/winner.Models';
import { GamerService } from '../../services/gamer.service';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {
  winner!: Winner;

  constructor(private gamerService: GamerService) {
   }

  ngOnInit(): void {
    this.allwinner();
  }

  allwinner(): void {
    this.gamerService.allwinner().subscribe( winner => {      
      this.winner = winner;
    })
  }

}
