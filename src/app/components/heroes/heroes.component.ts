import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroeServicio: HeroesService) { }

  ngOnInit() {
    this.heroes = this.heroeServicio.getHeroes();
  }

}
