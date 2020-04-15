import { createSelector } from 'reselect';

const domain = state => state; // 7 state giriyor state dönüyor. state return ediyor aslında. domain demesek de olur ama state i döndürmek için böyle bir şey lazım

export const selectNavigation = () => createSelector(
    domain,
    substate => substate.nav,
);

export const selectData = () => createSelector(
    domain,
    substate => substate.reducers.get('data'), // 7 reducersdaki veriyi bir şekilde çekliyor.
)



