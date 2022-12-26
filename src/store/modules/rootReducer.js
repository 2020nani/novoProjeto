import { combineReducers } from 'redux'

import carrinho from './carrinho/reducer'
import jogos from './jogos/reducer'
import auth from './auth/reducer';
import user from './user/reducer';


export default combineReducers({
    auth,
    user,
    carrinho,
    jogos
})