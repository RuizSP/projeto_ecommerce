import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import BtnAdicionarCarrinho from './BtnAdicionarCarrinho';
import ControleQuantidade from './ControleQuantidade';


function ProdutoCartao({produto, adicionarAoCarrinho }) {
    const[quantidade, setQuantidade] = useState(1);
    
    const precoTotal = produto?.precoProduto * quantidade;
    const estoqueDisponivel = produto?.totalEstoque >= quantidade;

    const adicionarProduto = () => {
        let produtoComQuantidade = {...produto, quantidade};
        adicionarAoCarrinho(produtoComQuantidade);
    }

    const navigate = useNavigate();

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card border-primary shadow-sm">
                <img 
                    src={produto?.caminhoImagem[0].url} 
                    alt={produto?.nomeProduto} 
                    className="card-img-top" 
                    style={{ height: '200px', objectFit: 'cover' }} 
                />
                <div className="card-body">
                    <h5 className="card-title">
                        {produto?.nomeProduto}
                        <small className="ms-2 mb-3">
                            {produto?.conteudo}
                        </small> 
                    </h5>
                    <p className="card-text">R$ {produto?.precoProduto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    <ControleQuantidade produto={produto} quantidade={quantidade} setQuantidade={setQuantidade}/>
                    <p className="card-text">Total: R$ {precoTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    <button className='btn btn-primary me-2 w-100 mb-2'  onClick={() => navigate("/Produto", { state: { produto} })}>
                        <i className='bi bi-card-text p-2'></i>
                        Ver Detalhes
                    </button>
                    
                    {estoqueDisponivel? (
                      <BtnAdicionarCarrinho adicionarProduto={adicionarProduto}/>
                    ):(
                        <span className="alert alert-danger w-100 p-2"> Produto fora do estoque!</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProdutoCartao;
