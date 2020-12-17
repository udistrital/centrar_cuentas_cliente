import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDevoluciontributaria from '../reducers/devoluciontributaria.reducer';

export const selectDevoluciontributariaState = createFeatureSelector<fromDevoluciontributaria.State>(
  fromDevoluciontributaria.devoluciontributariaFeatureKey
);

export const getDevoluciontributariaSeleccionado = createSelector(
  selectDevoluciontributariaState,
  (state: fromDevoluciontributaria.State) => state.DevoluciontributariaSeleccionado
);
