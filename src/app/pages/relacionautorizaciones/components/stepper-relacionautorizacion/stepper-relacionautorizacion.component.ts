import { Component, ViewChild } from '@angular/core';
import { SetInfonuevarelacionComponent } from '../set-infonuevarelacion/set-infonuevarelacion.component';
import { SetConceptonuevarelacionComponent } from '../set-conceptonuevarelacion/set-conceptonuevarelacion.component';
import { SetConsultanuevarelacionComponent } from '../set-consultanuevarelacion/set-consultanuevarelacion.component';
import { RelacionautorizacionesService } from "../../services/relacionautorizaciones.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'ngx-stepper-relacionautorizacion',
  templateUrl: './stepper-relacionautorizacion.component.html',
  styleUrls: ['./stepper-relacionautorizacion.component.scss']
})
export class StepperRelacionautorizacionComponent {

   @ViewChild(SetInfonuevarelacionComponent, {static: false}) SetInfoautorizacionnominaComponent: SetInfonuevarelacionComponent;
   @ViewChild(SetConsultanuevarelacionComponent, {static: false}) SetConsultanuevarelacionComponent: SetConsultanuevarelacionComponent;
   @ViewChild(SetConceptonuevarelacionComponent, {static: false}) SetConceptonuevarelacionComponent: SetConceptonuevarelacionComponent;

  // Variable local para mostrar datos desde servicio
  relacion: any = {};

  constructor( private _relacionService: RelacionautorizacionesService,
    private activatedRoute: ActivatedRoute ) {

    // Configuracion de enrutamiento de datos (nomina o seguridad social)
    this.activatedRoute.paramMap.subscribe( params => {
      this.relacion = this._relacionService.getTipoRelacion( params.get('id') );
    });

  }

  get inforelacionGroup() {
    return this.SetInfoautorizacionnominaComponent ? this.SetInfoautorizacionnominaComponent.inforelacionGroup : null ;
  }
  get consultaGroup() {
    return this.SetConsultanuevarelacionComponent ? this.SetConsultanuevarelacionComponent.consultaGroup : null;
  }
  get conceptoGroup() {
    return this.SetConceptonuevarelacionComponent ? this.SetConceptonuevarelacionComponent.conceptoGroup : null;
  }
}

