import React from "react";
import { useLocation } from "react-router-dom";

const PaginaProduto = () => {
  const location = useLocation();
  var produto = location.state?.produto;
  
    return (
    <div className="container mt-5">
      <div className="row">

        {/* Left Column - Images */}
        <div className="col-md-6">
          <div className="d-flex flex-column">
            <div className="mb-3">
              <img
                src={produto.caminhoImagem}
                alt="Main Product"
                className="img-fluid border"
              />
            </div>
            <div className="d-flex">
              {[1, 2, 3, 4].map((_, idx) => (
                <img
                  key={idx}
                  src="https://via.placeholder.com/100"
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
          <p className="text-muted">Category: Snacks</p>

          <div className="mb-3">
            <span className="text-danger me-2">
             R$ {produto.precoProduto.toLocaleString("pt-BR" , { minimumFractionDigits: 2 })}
            </span>
          </div>

          <div className="mb-3">
            <strong>Ingredientes:</strong>
            <ul>
              {
                produto.ingredientes?.map((ingrediente)=>{
                    return(
                        <li>{ingrediente}</li>
                    )
                })
              }
            </ul>
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="form-label">
              Quantidade:
            </label>
            <div className="d-flex align-items-center">
              <button className="btn btn-outline-secondary">-</button>
              <input
                id="quantity"
                type="number"
                className="form-control mx-2 text-center"
                style={{ width: "70px" }}
                defaultValue={1}
                min={1}
              />
              <button className="btn btn-outline-secondary">+</button>
            </div>
          </div>

          <button className="btn btn-success w-100">
            <i className="bi bi-cart-plus-fill p-2"></i>
            Carrinho
          </button>
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
