import { AbstractType } from '@angular/core';
import { Action, createReducer, on } from '@ngrx/store';
import * as SharedActions from '../actions/shared.actions';

export const sharedFeatureKey = 'shared';

export interface State {
  ArbolRubro: any;
  NodoSeleccionado: any;
  SolicitudGiroSeleccionada: any;
  FilaSeleccionada: any;
  AccionTabla: any;
  VigenciaActual: any;
  AreaFuncional: any;
  CentroGestor: any;
  ConceptosContables: any;
  TiposID: any;
  DatosID: any;
  Usuario: any;
  Vigencias: any;
  Conceptos: any;
  Concepto: any;
  DocumentosCarga: any;
  DocumentosDescarga: any;
  SolicitudesGiro: any;
  Rubro: any;
  TiposDocumentos: any;
  Proceso: any;
  Consecutivo: any;
  SolicitudesGiroShared: any;
  TiposCompromisos: any;
  Convenios: any;
  Interventores: any;
  TiposOrdenesPago: any;
  RPExpedido: any;
  RPParcialComprometido: any;
  RPBeneficiario: any;
  RubrosCrp: any;
  BeneficiarioOP: any;
  EntradaAlmacen: any;
  InfoRubro: any;
  InfoNecesidad: any;
  MetaNecesidad: any;
  ActividadNecesidad: any;
  Retenciones: any;
  ArbolCuentaContable: any;
  NodoSeleccionadoCuentaContable: any;
  NodoSeleccionadoConcepto: any;
  CuentaContableSeleccionada: any;
  InfoCuentaContable: any;
  InfoCuentaContableDebito: any;
  Supervisor: any;
}

export const initialState: State = {
  ArbolRubro: [],
  NodoSeleccionado: null,
  SolicitudGiroSeleccionada: null,
  FilaSeleccionada: null,
  AccionTabla: null,
  VigenciaActual: null,
  AreaFuncional: null,
  CentroGestor: null,
  ConceptosContables: [],
  TiposID: null,
  DatosID: {},
  Usuario: null,
  Vigencias: null,
  Conceptos: null,
  Concepto: null,
  DocumentosCarga: null,
  SolicitudesGiro: null,
  Rubro: null,
  TiposDocumentos: null,
  DocumentosDescarga: null,
  Proceso: null,
  Consecutivo: null,
  SolicitudesGiroShared: null,
  TiposCompromisos: null,
  Convenios: null,
  Interventores: null,
  TiposOrdenesPago: null,
  RPExpedido: null,
  RPParcialComprometido: null,
  RPBeneficiario: null,
  RubrosCrp: null,
  BeneficiarioOP: null,
  EntradaAlmacen: null,
  InfoRubro: null,
  InfoNecesidad: null,
  MetaNecesidad: null,
  ActividadNecesidad: null,
  Retenciones: null,
  ArbolCuentaContable: null,
  NodoSeleccionadoCuentaContable: null,
  NodoSeleccionadoConcepto: null,
  CuentaContableSeleccionada: null,
  InfoCuentaContable: null,
  InfoCuentaContableDebito: null,
  Supervisor: null,
};

const sharedReducer = createReducer(
  initialState,

  on(SharedActions.loadShareds, state => state),
  on(SharedActions.LoadArbolRubro, (state, action) => ({
    ...state, ArbolRubro: state.ArbolRubro = action
  })),
  on(SharedActions.LoadNodoSeleccionado, (state, action) => ({
    ...state, NodoSeleccionado: state.NodoSeleccionado = action
  })),
  on(SharedActions.loadSolicitudGiroSeleccionada, (state, action) => ({
    ...state, SolicitudGiroSeleccionada: state.SolicitudGiroSeleccionada = action
  })),
  on(SharedActions.LoadFilaSeleccionada, (state, action) => ({
    ...state, FilaSeleccionada: state.FilaSeleccionada = action
  })),
  on(SharedActions.LoadAccionTabla, (state, action) => ({
    ...state, AccionTabla: state.AccionTabla = action
  })),
  on(SharedActions.LoadVigenciaActual, (state, action) => ({
    ...state, VigenciaActual: state.VigenciaActual = action
  })),
  on(SharedActions.LoadAreaFuncional, (state, action) => ({
    ...state, AreaFuncional: state.AreaFuncional = action
  })),
  on(SharedActions.LoadConceptosContables, (state, action) => ({
    ...state, ConceptosContables: state.ConceptosContables = action
  })),
  on(SharedActions.loadTiposID, (state, action) => ({
    ...state, TiposID: state.TiposID = action
  })),
  on(SharedActions.loadDatosID, (state, action) => {
    state.DatosID[action.clave] = action;
    return ({
      ...state, DatosID: state.DatosID = Object.assign({}, state.DatosID)
    });
  }),
  on(SharedActions.loadUsuario, (state, action) => ({
    ...state, Usuario: state.Usuario = action
  })),
  on(SharedActions.loadVigencias, (state, action) => ({
    ...state, Vigencias: state.Vigencias = action
  })),
  on(SharedActions.loadConceptos, (state, action) => ({
    ...state, Conceptos: state.Conceptos = action
  })),
  on(SharedActions.cargarConcepto, (state, action) => ({
    ...state, Concepto: state.Concepto = action
  })),
  on(SharedActions.cargarDocumentos, (state, action) => ({
    ...state, DocumentosCarga: state.DocumentosCarga = action
  })),
  on(SharedActions.descargarDocumentos, (state, action) => ({
    ...state, DocumentosDescarga: state.DocumentosDescarga = action
  })),
  on(SharedActions.cargarSolicitudesById, (state, action) => ({
    ...state, SolicitudesGiro: state.SolicitudesGiro = action
  })),
  on(SharedActions.cargarRubro, (state, action) => ({
    ...state, Rubro: state.Rubro = action
  })),
  on(SharedActions.loadTiposDocumentos, (state, action) => ({
    ...state, TiposDocumentos: state.TiposDocumentos = action
  })),
  on(SharedActions.loadProcesoConfiguracion, (state, action) => ({
    ...state, Proceso: state.Proceso = action
  })),
  on(SharedActions.loadConsecutivo, (state, action) => ({
    ...state, Consecutivo: state.Consecutivo = action
  })),
  on(SharedActions.cargarSolicitudesGiro, (state, action) => ({
    ...state, SolicitudesGiroShared: state.SolicitudesGiroShared = action
  })),
  on(SharedActions.cargarTiposCompromisos, (state, action) => ({
    ...state, TiposCompromisos: state.TiposCompromisos = action
  })),
  on(SharedActions.cargarConvenios, (state, action) => ({
    ...state, Convenios: state.Convenios = action
  })),
  on(SharedActions.cargarInterventores, (state, action) => ({
    ...state, Interventores: state.Interventores = action
  })),
  on(SharedActions.cargarTiposOrdenesPago, (state, action) => ({
    ...state, TiposOrdenesPago: state.TiposOrdenesPago = action
  })),
  on(SharedActions.cargarRPExpedido, (state, action) => ({
    ...state, RPExpedido: state.RPExpedido = action
  })),
  on(SharedActions.cargarRPParcialComprometido, (state, action) => ({
    ...state, RPParcialComprometido: state.RPParcialComprometido = action
  })),
  on(SharedActions.cargarRPBeneficiario, (state, action) => ({
    ...state, RPBeneficiario: state.RPBeneficiario = action
  })),
  on(SharedActions.cargarRubrosCrp, (state, action) => ({
    ...state, RubrosCrp: state.RubrosCrp = action
  })),
  on(SharedActions.cargarBeneficiarioOP, (state, action) => ({
    ...state, BeneficiarioOP: state.BeneficiarioOP = action
  })),
  on(SharedActions.cargarEntradaAlmacen, (state, action) => ({
    ...state, EntradaAlmacen: state.EntradaAlmacen = action
  })),
  on(SharedActions.cargarInfoRubro, (state, action) => ({
    ...state, InfoRubro: state.InfoRubro = action
  })),
  on(SharedActions.cargarInfoNecesidad, (state, action) => ({
    ...state, InfoNecesidad: state.InfoNecesidad = action
  })),
  on(SharedActions.cargarMetaNecesidad, (state, action) => ({
    ...state, MetaNecesidad: state.MetaNecesidad = action
  })),
  on(SharedActions.cargarActividadesNecesidad, (state, action) => ({
    ...state, ActividadNecesidad: state.ActividadNecesidad = action
  })),
  on(SharedActions.cargarRetenciones, (state, action) => ({
    ...state, Retenciones: state.Retenciones = action
  })),
  on(SharedActions.LoadArbolCuentaContable, (state, action) => ({
    ...state, ArbolCuentaContable: state.ArbolCuentaContable = action
  })),
  on(SharedActions.LoadNodoSeleccionadoCuentaContable, (state, action) => ({
    ...state, NodoSeleccionadoCuentaContable: state.NodoSeleccionadoCuentaContable = action
  })),
  on(SharedActions.LoadNodoSeleccionadoConcepto, (state, action) => ({
    ...state, NodoSeleccionadoConcepto: state.NodoSeleccionadoConcepto = action
  })),
  on(SharedActions.SeleccionarCuentaContable, (state, action) => ({
    ...state, CuentaContableSeleccionada: state.CuentaContableSeleccionada = action
  })),
  on(SharedActions.cargarInfoCuentaContable, (state, action) => ({
    ...state, InfoCuentaContable: state.InfoCuentaContable = action
  })),
  on(SharedActions.cargarInfoCuentaContableDebito, (state, action) => ({
    ...state, InfoCuentaContableDebito: state.InfoCuentaContableDebito = action
  })),
  on(SharedActions.cargarSupervisor, (state, action) => ({
    ...state, Supervisor: state.Supervisor = action
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return sharedReducer(state, action);
}
