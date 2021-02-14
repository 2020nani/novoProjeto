import produce from 'immer';
export default function carrinho(state = [], action) {

  switch (action.type) {
    case '@carrinho/CARRINHO_REQUEST':
      return produce(state, draft => {

        const jogoIndex = draft.findIndex(p => p.id === action.payload.data.id);
        if (jogoIndex >= 0) {
          draft[jogoIndex].quantidade += 1;
        } else {
          draft.push({
            ...action.payload.data,
            quantidade: 1
          });
        }
      });

    case '@carrinho/REMOVER_DO_CARRINHO':
      return produce(state, draft => {
        const jogoIndex = draft.findIndex(p => p.id === action.id);
        if (jogoIndex >= 0) {
          draft.splice(jogoIndex, 1);
        }
      });

    case '@carrinho/UPDATE_QUANTIDADE': {
      if(action.quantidade <= 0){
        return state
      }
      return produce(state, draft => {

        const jogoIndex = draft.findIndex(p => p.id === action.id);
        if (jogoIndex >= 0) {
          draft[jogoIndex].quantidade = Number(action.quantidade);
        }
      });
    }

    case '@CARRINHO_RESET_STATE':
      return state = []; //Always return the initial state
    default:
      return state
  }
}