import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //las cosas que quiero que sean visibles
    exports:[
        ListadoComponent
    ],
    //aqui van otros modulos que deseen importar
    imports:[
        CommonModule //es para uso de ngfor ngif y otros propios de ng
    ]

})
export class HeroesModule {

}