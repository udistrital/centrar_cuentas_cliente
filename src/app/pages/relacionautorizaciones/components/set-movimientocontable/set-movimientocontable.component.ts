import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  CONFIGURACION_MOVIMIENTO_CONTABLE, DATOS_MOVIMIENTO_CONTABLE
} from '../../interfaces/interfaces';
import { ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { getFilaSeleccionada, getConceptosContables, getNodoSeleccionadoCuentaContable, selectInfoCuentaContable, selectInfoCuentaContableDebito, selectOrdenesPagoById,
          selectBeneficiarioEndoso, selectInfoCuentaContableEndoso } from '../../../../shared/selectors/shared.selectors';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { getBeneficiarioEndoso, GetConceptosContables, getInfoCuentaContable, getInfoCuentaContableDebito, getInfoCuentaContableEndoso, LoadFilaSeleccionada,
          SeleccionarCuentaContable } from '../../../../shared/actions/shared.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-set-movimientocontable',
  templateUrl: './set-movimientocontable.component.html',
  styleUrls: ['./set-movimientocontable.component.scss']
})
export class SetMovimientocontableComponent implements OnInit, OnDestroy {
  @ViewChild('eliminarModal', { static: false }) eliminarModal: ElementRef;
  movimientoContable: FormGroup;
  agregarMovimientoContable: FormGroup;
  configTableMovimientoContable: any;
  datosTableMovimientoContable: any;
  conceptosContables: any;
  subscription: any;
  subscriptionConceptos: any;
  endoso: boolean;
  subGetNodoSeleccionadoCuenta$: any;
  cuentaContableSeleccionada: any;
  cuentaContableSeleccionada1: any;
  conceptoCuenta: boolean;
  subscriptionDatosImpuestosYRetenciones$: any;
  datosImpYReten: any;
  subscriptionDatosImputacionPresupuestal$: any;
  datosImputacionPresupuestal: any;
  subImpYRet$: any;
  impYRet: any;
  subInfoCuentaCredito$: any;
  cuentaCredito: any;
  subInfoCuentaDebito$: any;
  cuentaDebito: any;
  subInfoCuentaEndoso$: any;
  cuentaEndoso: any;
  cuentasContablesConcepto: Array<any> = [];
  opcionesAreaFuncional: Array<any> = [];
  valorDescuento: any;
  valorImputacion: any;
  valorNeto: any;
  cuentaConceptoFull: boolean;
  subscriptionCambios$: any;
  tituloAccion: string;
  subOrdenesPago$: any;
  ordenPago: any;
  editable: boolean = true;
  subscriptionfilter$: any;
  subBenefEndoso$: any;
  flagOP: any = true;
  total: number = 0;
  datosBenefEndoso: any;
  flagCuentaVN: boolean = true;
  valorMovContable: number;
  valorValido: boolean;
  valorValidoEndoso: boolean;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private store: Store<any>,
    private activatedRoute: ActivatedRoute,
    ) {
      this.valorValido = true;
      this.valorValidoEndoso = true;
      this.cuentaConceptoFull = true;
      this.configTableMovimientoContable = CONFIGURACION_MOVIMIENTO_CONTABLE;
      this.datosTableMovimientoContable = [];
      this.store.dispatch(GetConceptosContables({ id: '' }));
      this.tituloAccion = this.activatedRoute.snapshot.url[0].path;
      if (this.edit(this.tituloAccion)) {
        this.editable = false;
        this.configTableMovimientoContable.rowActions.actions[0].ngIf = false;
      }
      this.valorMovContable = 0;
  }

  private mostrar(action: string): boolean {
    const ACCIONES: string[] = ['ver', 'editar', 'revisar'];
    return ACCIONES.some(acc => acc === action);
  }

  private edit(action: string): boolean {
    const ACCIONES_EDICION: string[] = ['ver', 'revisar'];
    return ACCIONES_EDICION.some(acc => acc === action);
  }
  async ngOnInit() {
    // Form
    this.movimientoContable = this.fb.group({
      cuentaContable: [''],
      endoso: [false],
      cuentaContableMovCont: [''],
      cuentaContableMovCont1: [''],
      cuentaConcepto: [false],
      nombreMovimientoContable: ['Valor Bruto'],
      valorMovimientoContable: [''],
      cuentaCredito: ['', Validators.required],
      identificacionEndoso: [''],
      beneficiarioEndoso: [''],
      bancoEndoso: [''],
      tipoCuentaEndoso: [''],
      numeroCuentaEndoso: [''],
      valorEndoso: [''],
      cuentaContableEndoso: [''],
      sumaDebito: [''],
      sumaCredito: [''],
      validator: ['', Validators.required]
    });
    // Conceptos contables
    this.subscriptionConceptos = this.store.select(getConceptosContables).subscribe((conceptos) => {
      this.conceptosContables = conceptos[0];
    });
    // Fila seleccionada
    this.subscription = this.store.select(getFilaSeleccionada).subscribe((accion) => {
      if (accion && accion.accion) {
        if (accion.accion.idStep === 4 && accion.accion.name === 'modificar') {
          this.modalEliminar(accion.fila);
        }
      }
    });

    this.subOrdenesPago$ = this.store.select(selectOrdenesPagoById).subscribe((action) => {
      if (action && action.OrdenesPagoById && this.flagOP) {
        this.ordenPago = action.OrdenesPagoById;
        if (this.mostrar(this.tituloAccion)) this.ordenesPago();
        this.flagOP = false;
      }
    });

    this.subscriptionfilter$ = this.movimientoContable.get('identificacionEndoso').valueChanges.subscribe((valor) => {
      if (valor) {
        this.store.dispatch(getBeneficiarioEndoso({query: {NumDocumento: valor}}));
        this.subBenefEndoso$ = this.store.select(selectBeneficiarioEndoso).subscribe((action) => {
          if (action && action.BeneficiarioEndoso) {
            this.datosBenefEndoso = action.BeneficiarioEndoso[0];
            action.BeneficiarioEndoso = null;
            this.movimientoContable.patchValue({
              beneficiarioEndoso: this.datosBenefEndoso.NomProveedor,
              bancoEndoso: this.datosBenefEndoso.IdEntidadBancaria,
              tipoCuentaEndoso: this.datosBenefEndoso.TipoCuentaBancaria,
              numeroCuentaEndoso: this.datosBenefEndoso.NumCuentaBancaria
            });
          }
        });
      }
    });

    this.movimientoContable.get('valorEndoso').valueChanges.subscribe((valor) => {
      if (valor > this.valorNeto || valor < 0 ) this.valorValidoEndoso = false;
      else this.valorValidoEndoso = true;
    });
  }


  conceptoCuentaContable() {
    this.conceptoCuenta = this.movimientoContable.value.cuentaConcepto;
  }

  cambioEndoso() {
    this.endoso = this.movimientoContable.value.endoso;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscriptionConceptos.unsubscribe();
    this.store.dispatch(LoadFilaSeleccionada(null));
    this.subImpYRet$.unsubscribe();
    if (this.subInfoCuentaCredito$) this.subInfoCuentaCredito$.unsubscribe();
    if (this.subInfoCuentaDebito$)this.subInfoCuentaDebito$.unsubscribe();
    this.subOrdenesPago$.unsubscribe();
    this.subscriptionfilter$.unsubscribe();
    if (this.subInfoCuentaEndoso$) this.subInfoCuentaEndoso$.unsubscribe();
    if (this.subBenefEndoso$) this.subBenefEndoso$.unsubscribe();
    this.cuentasContablesConcepto = [];
    this.cuentaConceptoFull = true;
  }

  modalEliminar(fila: any) {
    this.modalService.open(this.eliminarModal).result.then((result) => {
      if (`${result}`) {
        this.datosTableMovimientoContable.splice(this.datosTableMovimientoContable.findIndex(
          (element: any) => element.codigo === fila.codigo
            && element.descuento === fila.descuento
            && element.base === fila.base
            && element.valor === fila.valor
        ), 1);
        this.datosTableMovimientoContable.forEach(element => {
          if (element.Naturaleza === 'debito') this.valorMovContable += element.Valor;
          else this.valorMovContable = this.valorMovContable - element.Valor;
        });
        if (this.valorMovContable > this.valorImputacion || this.valorMovContable < 0) this.valorValido = false;
        else this.valorValido = true;
      }
    });
  }

  agregar() {
    // TODO
    const elemento = Object.assign({}, DATOS_MOVIMIENTO_CONTABLE[0]);
    elemento.Nombre = this.movimientoContable.get('nombreMovimientoContable').value;
    if (this.movimientoContable.value.cuentaConcepto) {
      elemento.Codigo = this.movimientoContable.value.cuentaContableMovCont1.cuenta.Codigo + ' - '
      + this.movimientoContable.value.cuentaContableMovCont1.cuenta.Nombre;
      elemento.Naturaleza = this.movimientoContable.value.cuentaContableMovCont1.cuenta.NaturalezaCuentaID;
    } else {
      elemento.Codigo = this.movimientoContable.value.cuentaContableMovCont;
      elemento.Naturaleza = this.cuentaContableSeleccionada.data.NaturalezaCuentaID;
    }
    elemento.Valor = this.movimientoContable.get('valorMovimientoContable').value;
    this.datosTableMovimientoContable.push(elemento);
    this.valorMovContable = 0;
    this.datosTableMovimientoContable.forEach(element => {
      if (element.Naturaleza === 'debito') this.valorMovContable += element.Valor;
      else this.valorMovContable = this.valorMovContable - element.Valor;
    });
    if (this.valorMovContable > this.valorImputacion || this.valorMovContable < 0) this.valorValido = false;
    else this.valorValido = true;
  }

  SeleccionarCuentaContable(cuentaContable: any) {
    this.store.dispatch(SeleccionarCuentaContable(cuentaContable));
  }

  agregarCuentaContable() {
    this.subGetNodoSeleccionadoCuenta$ = this.store.select(getNodoSeleccionadoCuentaContable).subscribe((nodoCuenta: any) => {
      if (nodoCuenta) {
        if (Object.keys(nodoCuenta)[0] !== 'type') {
          if (nodoCuenta && !nodoCuenta.children) {
            this.SeleccionarCuentaContable(nodoCuenta);
            this.cuentaContableSeleccionada = nodoCuenta;
            nodoCuenta = null;
            this.movimientoContable.patchValue({
              cuentaContableMovCont: this.cuentaContableSeleccionada.data.Codigo + ' - ' + this.cuentaContableSeleccionada.data.Nombre
            });
          }
        }
      }
    });
    this.subGetNodoSeleccionadoCuenta$.unsubscribe();
  }

  agregarCuentaContable1() {
    this.subGetNodoSeleccionadoCuenta$ = this.store.select(getNodoSeleccionadoCuentaContable).subscribe((nodoCuenta: any) => {
      if (nodoCuenta && Object.keys(nodoCuenta)[0] !== 'type' && !nodoCuenta.children) {
        this.SeleccionarCuentaContable(nodoCuenta);
        this.cuentaContableSeleccionada1 = nodoCuenta.data;
        nodoCuenta = null;
        this.movimientoContable.patchValue({
          cuentaContableEndoso: this.cuentaContableSeleccionada1
        });
      }
    });
    this.subGetNodoSeleccionadoCuenta$.unsubscribe();
  }

  cargarMovimiento() {
    if (this.datosTableMovimientoContable.length === 0 || !this.valorValido || !this.valorValidoEndoso) {
      return Object.values(this.movimientoContable.controls).forEach(control => {
        control.markAsTouched();
      });
    } else {
      this.movimientoContable.patchValue({
        validator: 'a'
      });
      // this.store.dispatch(cargarDatosMovimientoContable({data: this.datosTableMovimientoContable}));
      // this.store.dispatch(cargarMovimientoContable({ MovimientoContable: this.movimientoContable.value }));
    }
  }

  isInvalid(nombre: string) {
    const input = this.movimientoContable.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  get valorTotal() {
    return this.datosTableMovimientoContable.reduce((a: any, b: { valor: number; }) => a + b.valor, 0);
  }

  ordenesPago() {
    this.datosTableMovimientoContable = this.ordenPago.MovimientoContable;
    this.endoso = this.ordenPago.Endoso;
    this.store.dispatch(getInfoCuentaContableEndoso({codigo: this.ordenPago.CuentaEndoso}));
    this.subInfoCuentaEndoso$ = this.store.select(selectInfoCuentaContableEndoso).subscribe((action) => {
      if (action && action.InfoCuentaContableEndoso) {
        this.cuentaContableSeleccionada1 = action.InfoCuentaContableEndoso;
        action.InfoCuentaContableEndoso = null;
        this.movimientoContable.patchValue({
          endoso: this.ordenPago.Endoso,
          identificacionEndoso: this.ordenPago.BeneficiarioEndoso,
          valorEndoso: this.ordenPago.ValorEndoso,
          cuentaContableEndoso: this.cuentaContableSeleccionada1
        });
      }
    });
  }
}
