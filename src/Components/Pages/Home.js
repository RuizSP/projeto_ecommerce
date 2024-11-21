import Products from "../ProdutoCartao";

function Home({produtos, adicionarAoCarrinho}){
    
    return (
        <>
            <h1>Bem vindo</h1>
            <div>
                <h2>Geleias: </h2>
                <div className="container">
                    <div className="row">
                       {
                        produtos.map((produto) =>{
                            return(
                                <Products key={produto.id} produto = {produto} adicionarAoCarrinho={adicionarAoCarrinho}/>
                            )
                        })
                       }
                    </div>
                </div>
            </div>
            <hr/>
            <div>
                <h2>Licores: </h2>

            </div>
        </>
    );
}

export default Home;