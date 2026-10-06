import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonList, IonItem, IonLabel
} from '@ionic/angular/standalone';
import { Elemento } from '../models/elemento.model';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.page.html',
  styleUrls: ['detalle.page.scss'],
  // DONE Añadir los componentes Ionic utilizados en el HTML
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton, IonList, IonItem, IonLabel
  ],
})

export class DetallePage implements OnInit {

  // DONE (Apartado 3 – Interpolación)
  // elementoDetalle (el elemento seleccionado) puede ser de tipo Elemento o null, y se inicializa a null
  elementoDetalle: Elemento | null = null;

  constructor() {}

  ngOnInit(): void {
    // DONE: Recuperar el elemento pasado desde la página anterior mediante el estado de navegación
    // Pista: history.state
    // Sugerido por Gemini
    if (history.state && history.state.elemento) {
      this.elementoDetalle = history.state.elemento;
    }

  }
}
