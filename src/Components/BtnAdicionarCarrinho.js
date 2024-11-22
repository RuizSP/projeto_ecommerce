function BtnAdicionarCarrinho({adicionarProduto}){
    return(
        <>
            <button className="btn btn-success w-100" onClick={adicionarProduto}>
                <i className="bi bi-cart-plus-fill p-2"></i>
                Carrinho
            </button>
        </>
    );
}

export default BtnAdicionarCarrinho;

