function ProdutoCarrinho({produto, removerProdutoCarrinho}){
    return (
        <div className="card mb-2">
            <div className="card-body d-flex flex-wrap align-items-center w-sm">
                <img  className="me-2 img-thumbnail w-25 h-25" src={produto.caminhoImagem[0]} alt={produto.nomeProduto}/>
                <strong className="me-2">{produto.nomeProduto}</strong><small className="me-2">{produto.conteudo}</small>
                <input 
                    readOnly={true}
                    type="number"
                    min="0"
                    max = {produto.quantidade}
                    className="me-3"
                    value={produto.quantidade}
                />
                <div className="me-2">
                    <span>{produto.quantidade} X R$ {produto.precoProduto}</span>
                    <span className="text-success"> = R$ {(produto.quantidade*produto.precoProduto).toLocaleString("pt-BR", {minimumFractionDigits:2})} </span>
                </div>

                <button className="btn btn-danger" onClick={() => removerProdutoCarrinho(produto.id)}>
                    <i className="bi bi-trash-fill"></i>
                </button>
            </div>
        </div>
    );
}

export default ProdutoCarrinho;