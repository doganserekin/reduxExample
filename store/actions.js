import { NavigationActions } from 'react-navigation';
import * as constants from './constants';

// 4 GENERAL

export const navigate = routeName => NavigationActions.navigate({routeName});

// 5 SET TOKEN

export const setData = (data) => ({ type: constants.SET_DATA, data})    // bir şey göndermek istersek burası üzerinen haberleşiyoruz.
                                                                        // Önce tip dönüyoruz. bu bir açıklama. O açıklama constants içinde yazıyor. Sonra da datayı gönderiyoruz.
