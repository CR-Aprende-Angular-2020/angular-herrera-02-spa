import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-busqueda-heroes',
  templateUrl: './busqueda-heroes.component.html'
})
export class BusquedaHeroesComponent implements OnInit {

  tmpTermino: string;
  heroesB: Heroe[];

  constructor(
        private activatedRoute: ActivatedRoute, 
        private _heroesService: HeroesService ) { 

    this.activatedRoute.params.subscribe( params => {
      console.log( params['termino'] );
      this.tmpTermino = params['termino'];
    
     this.heroesB = this._heroesService.buscarHeroe( params['termino'] );
     console.log( this.heroesB );
     })
  }

  ngOnInit() {
  }

}
