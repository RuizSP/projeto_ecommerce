import {Link} from "react-router-dom";
import BtnCarrinho from "./Carrinho";

function NavBar({produtos, removerProdutoCarrinho}){
    return (
            <nav className="sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to ="/" className="navbar-brand ms-2">GELEIASITE</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Geleias">Geleias</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Licores">Licores</Link>
                    </li>
                    </ul>
                    <form className="d-flex ms-auto me-auto w-50">
                        <input className="form-control mr-sm-2 me-2" type="search" placeholder="Buscar Produto" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0 me-2" type="submit">Buscar</button>
                    </form>
                    <BtnCarrinho produtosIniciais={produtos} removerProdutoCarrinho={removerProdutoCarrinho}/>
                </div>

            </nav>
    );
}

export default NavBar;