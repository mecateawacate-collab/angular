import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Metrica {
  valor: string;
  etiqueta: string;
}

interface Imagen {
  ruta: string;
  clase: string;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class InicioComponent {

  metricasIzq: Metrica[] = [
    { valor: '408+', etiqueta: 'Clientes felices' },
    { valor: '4.9', etiqueta: 'Calificacion' }
  ];

  metricasDer: Metrica[] = [
    { valor: '323+', etiqueta: 'Premios' },
    { valor: '30+', etiqueta: 'Propiedades listas' }
  ];

  imagenes: Imagen[] = [
    { ruta: '/img/fotografia1.png', clase: 'small rotate-left' },
    { ruta: '/img/fotografia2.png', clase: 'medium' },
    { ruta: '/img/fotografia3.png', clase: 'big active' },
    { ruta: '/img/fotografia4.png', clase: 'medium' }
  ];

}

