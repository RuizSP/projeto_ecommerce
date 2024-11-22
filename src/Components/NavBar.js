import { Link } from "react-router-dom";
import BtnCarrinho from "./Carrinho";

function NavBar({ produtos, removerProdutoCarrinho }) {    
    return (
        <nav className="sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">GELEIASITE</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto d-flex">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Geleias">Geleias</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Licores">Licores</Link>
                        </li>
                    </ul>
                    <form className="d-flex w-100 w-lg-auto mb-2 mb-lg-0 ms-auto me-auto p-2">
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Buscar Produto" 
                            aria-label="Search" 
                        />
                        <button 
                            className="btn btn-outline-success" 
                            type="submit"
                        >
                            Buscar
                        </button>
                    </form>
                    <div className="ms-lg-3">
                        <BtnCarrinho produtosIniciais={produtos} removerProdutoCarrinho={removerProdutoCarrinho} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
