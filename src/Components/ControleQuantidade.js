function ControleQuantidade({produto, quantidade, setQuantidade}){
    
    const incrementarQuantidade = () => {
        if (quantidade < produto.totalEstoque) {
          setQuantidade(quantidade + 1);
        }
      };
    
      const decrementarQuantidade = () => {
        if (quantidade > 1) {
          setQuantidade(quantidade - 1);
        }
      };

    return(
        <div className="mb-4">
        <label htmlFor="quantity" className="form-label">
          Quantidade:
        </label>
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-secondary" onClick={() => decrementarQuantidade()}>-</button>
          <input
            readOnly={true}
            id="quantity"
            type="number"
            className="form-control mx-2 text-center"
            style={{ width: "70px" }}
            min={1}
            max={produto.totalEstoque}
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
          />
          <button className="btn btn-outline-secondary" onClick={() => incrementarQuantidade()}>+</button>
        </div>
      </div>
    )
}

export default ControleQuantidade;