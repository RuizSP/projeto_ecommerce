import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import BtnAdicionarCarrinho from "../BtnAdicionarCarrinho";
import ControleQuantidade from "../ControleQuantidade";

const PaginaProduto = ({adicionarAoCarrinho}) => {
  const location = useLocation();
  var produto = location.state?.produto;
  
  const [quantidade, setQuantidade] = useState(1);

  const adicionarProduto = () =>{
      let produtoComQuantidade = {...produto, quantidade};

      adicionarAoCarrinho(produtoComQuantidade);
  }

    return (
    <div className="container mt-5">
      <div className="row">

        {/* Left Column - Images */}
        <div className="col-md-6">
          <div className="d-flex flex-column">
            <div className="mb-3">
              <img
                src={produto.caminhoImagem[0]}
                alt="Main Product"
                className="img-fluid border w-50"
              />
            </div>
            <div className="d-flex">
              {produto.caminhoImagem.map((imagem, idx) => (
                <img
                  key={idx}
                  src= {imagem}
                  alt={`Thumbnail ${idx + 1}`}
                  className="img-thumbnail me-2"
                  style={{ width: "80px", height: "80px" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="col-md-6">
          <h1 className="h4">{produto?.nomeProduto} {produto.conteudo}</h1>
          <p className="text-muted">Categoria:</p>
          <ul className="list-group list-inline">
            {
              produto.categorias.map((categoria, idx)=>{
                return(
                  <li  className="list-group-item" key={idx}>{categoria}</li>
                )
              })
            }
          </ul>

          <div className="mb-3">
            <span className="text-danger me-2">
             R$ {produto.precoProduto.toLocaleString("pt-BR" , { minimumFractionDigits: 2 })}
            </span>
          </div>

          <div className="mb-3">
            <strong>Ingredientes:</strong>
            <ul>
              {
                produto.ingredientes?.map((ingrediente, idx)=>{
                    return(
                        <li key={idx}>{ingrediente}</li>
                    )
                })
              }
            </ul>
          </div>
              <ControleQuantidade produto={produto} quantidade={quantidade} setQuantidade={setQuantidade}/>
              <BtnAdicionarCarrinho adicionarProduto={adicionarProduto}/>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-5">
        <h3 className="h5">Descrição</h3>
        <p>
              {produto.descricao}
        </p>
      </div>
    </div>
  );
};

export default PaginaProduto;
