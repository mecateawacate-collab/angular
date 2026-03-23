import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Terreno {
  nombre: string;
  lugar: string;
  precio: string;
  imagen: string;
}

@Component({
  selector: 'app-terrenos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './terrenos.html',
  styleUrl: './terrenos.css',
})
export class Terrenos {

  lista: Terreno[] = [
    {
      nombre: 'Serenity Meadows',
      lugar: 'Malibu, California',
      precio: '$2,456',
      imagen: '/img/terrenos1.png'
    },
    {
      nombre: 'Harmony Heights',
      lugar: 'Aspen, Colorado',
      precio: '$3,200',
      imagen: '/img/terrenos2.png'
    },
    {
      nombre: 'Tranquil Haven',
      lugar: 'Muskoka, Ontario, Canada',
      precio: '$1,590',
      imagen: '/img/terrenos3.png'
    },
    {
      nombre: 'Blissful Retreat',
      lugar: 'Manhattan, New York',
      precio: '$3,800',
      imagen: '/img/terrenos4.png'
    }
  ];

}