import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  private id: number;
  private heroe: Heroe;
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.heroe = this._heroesService.getHeroe(this.id);
    });

   }


  ngOnInit() {
  }

}
