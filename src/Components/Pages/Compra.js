import React from 'react';
import ProdutoCarrinho from '../ProdutoCarrinho';

function Compra({ produtos, removerProduto}) {
    const total = produtos.reduce((acc, produto) => acc + (produto.precoProduto * produto.quantidade), 0);
    return (
        <div className="container mt-5">
          <div>
                <h2>Resumo das Compras</h2>
                <ul className='list-group'>
                    {
                        produtos.map((produto) =>{
                        return(  
                            <li key={produto.id} className='list-group-item'>
                                <ProdutoCarrinho 
                                    produto={produto}
                                    removerProdutoCarrinho={removerProduto}
                                />
                            </li>
                            );
                        })
                    }
                </ul>
                <h3 className='alert alert-primary'>
                    <strong>Total</strong> = R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </h3>
          </div>
           <div>
           <h2 className="text-center mb-4">Finalizar Compra</h2>
            <form className="row g-3">
                {/* Nome */}
                <div className="col-md-6">
                    <label htmlFor="nome" className="form-label">Nome:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        placeholder="Seu nome"
                        required
                    />
                </div>

                {/* Telefone */}
                <div className="col-md-6">
                    <label htmlFor="telefone" className="form-label">Telefone:</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="telefone"
                        placeholder="(XX) XXXXX-XXXX"
                        required
                    />
                </div>

                {/* Endereço - Rua */}
                <div className="col-md-6">
                    <label htmlFor="rua" className="form-label">Rua:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="rua"
                        placeholder="Rua e número"
                        required
                    />
                </div>

                {/* Endereço - Bairro */}
                <div className="col-md-6">
                    <label htmlFor="bairro" className="form-label">Bairro:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="bairro"
                        placeholder="Bairro"
                        required
                    />
                </div>

                {/* Endereço - Cidade */}
                <div className="col-md-6">
                    <label htmlFor="cidade" className="form-label">Cidade:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cidade"
                        placeholder="Cidade"
                        required
                    />
                </div>

                {/* Método de Pagamento */}
                <div className="col-md-6">
                    <label htmlFor="pagamento" className="form-label">Método de Pagamento:</label>
                    <select
                        className="form-select"
                        id="pagamento"
                        required
                    >
                        <option value="">Selecione...</option>
                        <option value="Dinheiro">Dinheiro</option>
                        <option value="cartao">Cartão de Crédito</option>
                        <option value="boleto">Boleto Bancário</option>
                        <option value="pix">PIX</option>
                    </select>
                </div>

                {/* Botão de Enviar */}
                <div className="col-12">
                    <button
                        type="submit"
                        className="btn btn-success w-100"
                    >
                        Confirmar Compra
                    </button>
                </div>
            </form>
            </div> 


        </div>
    );
}

export default Compra;
