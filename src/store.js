import { createStore } from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Reducers from './Reducers/index';

const persistConfig = {
    key:'root',
    storage,  
    whiteList:['user', 'news'],
};

 const pReducer = persistReducer(persistConfig, Reducers);

 const store = createStore(pReducer);
 const persistor = persistStore( store );

 export {store, persistor};
