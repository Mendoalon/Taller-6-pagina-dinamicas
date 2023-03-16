import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Games } from '../../interfaces/games.Models';
import { GamerService } from '../../services/gamer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  myForm!: FormGroup;
  games!: Games;


  constructor(private gamesService: GamerService,
              private fB: FormBuilder,
              private router: Router,              
  ) { }

  ngOnInit(): void {
    this.captureForm();
  }

  captureForm(): void {
    this.myForm = this.fB.group({
      player1: ['', Validators.required],
      player2: ['', Validators.required],
      player3: ['', Validators.required]
    });
  }

  onSubmit(): void {

    if (!(this.myForm.invalid)) {
      const { player1, player2, player3} = this.myForm.value;

      this.games = {
        id: "fffff-ggg-jjjjj",
        type: '',
        gamers: [
          player1,
          player2,
          player3 
        ]
      }

      this.gamesService.registerPlayers(this.games).subscribe();
      
      setTimeout(() => {
        this.router.navigate(['games/', 'startGame'] );
      }, 1000);

    

    }


  }
}


