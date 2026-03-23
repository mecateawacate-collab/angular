import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Seccion {
  titulo: string;
  texto: string;
  imagen: string;
  clase: string;
  invertir: boolean;
}

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {

  secciones: Seccion[] = [
    {
      titulo: 'Our Vision',
      texto: 'Fostering a Future Where Every Individual Finds Their Perfect Home, Every Family Creates Lasting Memories, and Every Community Flourishes - Our Vision at HomeVista is to Redefine the Real Estate Experience, Guided by Integrity, Innovation, and a Commitment to Excellence, Ensuring Every Step of Your Journey.',
      imagen: '/img/vision.png',
      clase: 'img-vision',
      invertir: false
    },
    {
      titulo: 'Our Mission',
      texto: 'At HomeVista, Our Mission is to Transform the Real Estate Landscape by Providing Unparalleled Service, Expertise, and Support to Every Client. We Strive to Create a Seamless Experience, Guiding You Through Every Step of Your Home Journey with Integrity, Transparency, and Dedication. With a Focus on Innovation and Community Building.',
      imagen: '/img/mision.png',
      clase: 'img-mision',
      invertir: true
    }
  ];

}