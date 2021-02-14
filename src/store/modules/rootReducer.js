import { combineReducers } from 'redux'

import carrinho from './carrinho/reducer'
import jogos from './jogos/reducer'


export default combineReducers({
    carrinho,
    jogos
})