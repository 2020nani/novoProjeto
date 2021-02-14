import produce from 'immer';
const INITIAL_STATE = {
  jogos: [],
};

export default function admim(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    
    switch (action.type) {
      case '@games/JOGOS_REQUEST_SUCCESS': {
        draft.jogos = action.data
     
      }

      
      default:
    }
  });
}