import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  get historialBusqueda() {
    return this.gifService.historial;
  }

  constructor(private gifService: GifsService) {}

  buscar(busqueda: string): void {
    this.gifService.buscarGifs(busqueda);
  }
}
