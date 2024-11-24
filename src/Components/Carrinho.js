import React, {useState, useEffect} from 'react';
import ProdutoCarrinho from './ProdutoCarrinho.js';
import { useNavigate } from 'react-router-dom';

function Carrinho({ produtosIniciais = [], removerProdutoCarrinho }) {
    const [produtos, setProdutos] = useState(produtosIniciais);
    const navigate = useNavigate();
    
    useEffect(() => {
        setProdutos(produtosIniciais);
    }, [produtosIniciais]);

    const itensCarinho = produtos.reduce((acc, produto) => acc + produto.quantidade, 0);
    const total = produtos.reduce((acc, produto) => acc + (produto.precoProduto * produto.quantidade), 0);

    return (
        <div className="dropdown">
            <button
                id="dropdownMenuButton"
                className="btn btn-primary ms-auto text-light me-4 p-2 dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <i className="bi bi-cart-fill p-2"></i>
                <span>Meu Carrinho</span>
                <span className="position-absolute badge border border-light rounded-circle bg-danger p-2">
                    <strong className="text-light">{itensCarinho}</strong>
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end bg-secondary text-light p-2 mt-2" aria-labelledby="dropdownMenuButton" style={{ width: '22rem' }}>
                {produtos.map((produto) => (
                    <li key={produto.id}>
                        <ProdutoCarrinho
                            produto={produto}
                            removerProdutoCarrinho={removerProdutoCarrinho}
                        />
                    </li>
                ))}

                {
                    produtos.length <= 0 
                    ?<li>
                        <span className='text-light'>
                            Nenhum item Adicionado!
                        </span>
                    </li>
                    : <></>
                }

                <li className='mb-2'>
                    <span>Total = R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </li>
                <li className='mb-2'>
                    <button 
                        className=
                        {
                            produtos.length <= 0
                            ?"btn btn-success disabled"
                            : "btn btn-success"
                        }

                        onClick={()  => navigate("/Compra")}
                    >
                        <span>Finalizar Pedido!</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Carrinho
