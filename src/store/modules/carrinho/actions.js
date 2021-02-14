export function carrinhoRequest(data) {
    return {
      type: '@carrinho/CARRINHO_REQUEST',
      payload: { data },
      
    };
  }
  
  export function carrinhoRemover(id) {
   
    return {
      type: '@carrinho/REMOVER_DO_CARRINHO',
      id ,
    };
  }
  
  export function updateQuantidade(id, quantidade) {
    console.log(id, quantidade)
    return {
      type: '@carrinho/UPDATE_QUANTIDADE',
      id,
      quantidade
    };
  }
 
  