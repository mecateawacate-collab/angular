import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Vecino {
  nombre: string;
  imagen: string;
  tam: string;
  hab: string;
  ban: string;
  grande: boolean;
}

@Component({
  selector: 'app-vecinos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vecinos.html',
  styleUrl: './vecinos.css',
})
export class Vecinos {

  lista: Vecino[] = [
    {
      nombre: 'Harmony Heights',
      imagen: 'img/terrenos1.png',
      tam: '1245 Sq Ft',
      hab: '3 Bedroom',
      ban: '2 Bathroom',
      grande: true
    },
    {
      nombre: 'Curtis Adams',
      imagen: 'img/terrenos2.png',
      tam: '1600 Sq Ft',
      hab: '4 Bedroom',
      ban: '3 Bathroom',
      grande: false
    },
    {
      nombre: 'Marlene Leppänen',
      imagen: 'img/terrenos3.png',
      tam: '1800 Sq Ft',
      hab: '2 Bedroom',
      ban: '1 Bathroom',
      grande: false
    }
  ];

}