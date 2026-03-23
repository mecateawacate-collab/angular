import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonio {
  texto: string;
  nombre: string;
  cargo: string;
  activo: boolean;
}

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios.html',
  styleUrl: './testimonios.css',
})
export class Testimonios {

  lista: Testimonio[] = [
    {
      texto: 'HomeVista helped us navigate the complex world of real estate financing with ease.',
      nombre: 'Darrell Steward',
      cargo: 'CEO, IBM',
      activo: false
    },
    {
      texto: 'The neighborhood we found through HomeVista is more than just a place to live',
      nombre: 'Wade Warren',
      cargo: 'Manager, MasterCard',
      activo: true
    },
    {
      texto: 'From the moment we walked through the door of our new home, new city daunting,',
      nombre: 'Arlene McCoy',
      cargo: 'CEO, Apple',
      activo: false
    },
    {
      texto: 'HomeVista has made it easy to navigate the world of real estate financing.',
      nombre: 'Savannah Nguyen',
      cargo: 'Johnson & Johnson',
      activo: false
    }
  ];

}