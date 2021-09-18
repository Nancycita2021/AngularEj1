import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent  {
  heroes:string[] =['spiderman','hulk','ironman','thor','strange'];
  heroeBorrado:string ="";
  borrarHeroe() :void {
    this.heroeBorrado = this.heroes.shift() || ''; //esta linea puede devolver un string o un undefined por eso se determino el ''
  //this.heroes.length

  }
}
