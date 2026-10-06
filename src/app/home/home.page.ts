// DONE - importar Router de @angular/router
import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonFooter,
  IonList, IonItem, IonLabel, IonButton, IonInput,
  ToastController
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Elemento } from '../models/elemento.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonFooter,
    IonList, IonItem, IonLabel, IonButton, IonInput,
    FormsModule
  ],
})

export class HomePage {

  busqueda: string = '';

  elementos: Elemento[] = [
    { id: 1, nombre: 'Angular', descripcion: 'Framework SPA de Google', categoria: 'Frontend' },
    { id: 2, nombre: 'Ionic', descripcion: 'Framework para apps híbridas', categoria: 'Mobile' },
    { id: 3, nombre: 'TypeScript', descripcion: 'Superset tipado de JavaScript', categoria: 'Lenguaje' },
    { id: 4, nombre: 'Node.js', descripcion: 'Entorno de ejecución de JS en servidor', categoria: 'Backend' },
    { id: 5, nombre: 'Capacitor', descripcion: 'Puente nativo para apps Ionic', categoria: 'Mobile' },
  ];

  get hayElementos(): boolean {
    return this.elementos.length > 0;
  }

  get elementosFiltrados(): Elemento[] {
    if (!this.busqueda.trim()) {
      return this.elementos;
    }
    return this.elementos.filter(e =>
      e.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  // DONE Injectar Router
  private router = inject(Router);

  private toastController = inject(ToastController);

  constructor() {};

  // TODO (Apartado 2 – Navegación): 
  // Desarrollar el método verDetalle que recibirá un Elemento como parámetro
  // Navegar a /detalle con el elemento seleccionado
  verDetalle(): void {
    // Pista: this.router.navigate mediante state
    
  }

  // TODO (Apartado 1 + 3 – Event Binding): Mostrar un ion-toast al pulsar el botón
  async mostrarToast(): Promise<void> {
    // Consulta la teoría: apartado "ion-toast vs ion-alert"
    const toast = await this.toastController.create({
      message: 'Lista de tecnologías cargada correctamente',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }
}
