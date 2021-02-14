export function loadJogos(data) {
  
    return {
      type: '@games/JOGOS_REQUEST_SUCCESS',
      data   
    };
  }
  
  export function loadGameSuccess(data) {
     
    return {
      type: '@games/LOAD_SUCCESS',
      data
    };
  }