import { all } from 'redux-saga/effects';

import carrinho from './carrinho/sagas'
import jogos from './jogos/reducer'

export default function* rootSaga() {
    return yield all ([carrinho, jogos ])
}