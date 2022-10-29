import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent {
  @ViewChild('buscador') buscador!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifsService) {}

  buscar() {
    const valor = this.buscador.nativeElement.value;
    if (valor.trim().length === 0) {
      return;
    }
    this.gifService.buscarGifs(valor);
    this.buscador.nativeElement.value = '';
  }
}
