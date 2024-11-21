import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Home from "./Components/Pages/Home";
import Geleias from './Components/Pages/Geleias';
import Licores from './Components/Pages/Licores';
import React, {useEffect, useState} from 'react';
import Compra from './Components/Pages/Compra';

import Cookies from 'js-cookie';
import PaginaProduto from './Components/Pages/PaginaProduto';

function App() {
  const [produtoCarrinho, setProdutoCarrinho] = useState([]);
  
  useEffect(()=>{
    const carrinhoCookie = Cookies.get('carrinho');
    if(carrinhoCookie){
      setProdutoCarrinho(JSON.parse(carrinhoCookie));
    }
  }, []);

  const produtos = [
    {   
        id: 1, 
        caminhoImagem: "https://casalacteos.com.br/wp-content/uploads/2020/02/Geleia-de-Amora-980x1114.jpg",
        precoProduto: 25, 
        conteudo: "125g",
        nomeProduto: "Geleia de Amora",
        totalEstoque: 5,
        descricao: "Um monte de bosta",
        ingredientes: ["Açucar","Sal", "Amora"]
    },
    {   
        id: 2, 
        caminhoImagem: "https://casalacteos.com.br/wp-content/uploads/2020/02/Geleia-de-Amora-980x1114.jpg",
        precoProduto: 10,
        conteudo: "60g", 
        nomeProduto: "Geleia de Abacaxi",
        totalEstoque: 5
    }
  ]; 
  
  
  const adicionarAoCarrinho = (produto) => {
    const produtoExistente = produtoCarrinho.find(item => item.id === produto.id);
    let novoCarrinho;
  
    if (produtoExistente) {
      novoCarrinho = produtoCarrinho.map(item =>
        item.id === produto.id
          ? { ...item, quantidade: item.quantidade + produto.quantidade }
          : item
      );
    } else {
      novoCarrinho = [...produtoCarrinho, produto];
    }
  
    // Atualize o estado com o novo carrinho
    setProdutoCarrinho(novoCarrinho);
    
    // Salve o carrinho atualizado no cookie
    Cookies.set('carrinho', JSON.stringify(novoCarrinho));
  };
  

  const removerProdutoCarrinho = (id) => {
    const novoCarrinho = produtoCarrinho.filter(produto => produto.id !== id);
  
    // Atualize o estado com o novo carrinho
    setProdutoCarrinho(novoCarrinho);
  
    // Salve o carrinho atualizado no cookie
    Cookies.set('carrinho', JSON.stringify(novoCarrinho));
  
    console.log("Removido");
  };
  


  return (
  <>
    
    <Router>
      <NavBar produtos= {produtoCarrinho} removerProdutoCarrinho={removerProdutoCarrinho} ></NavBar>
      <section>
        <Routes>
          <Route path="/" element = {<Home produtos={produtos} adicionarAoCarrinho={adicionarAoCarrinho}/>}/>
          <Route path="/Geleias" element = {<Geleias/>}/>
          <Route path="/Licores" element = {<Licores/>}/>
          <Route path="/Compra" element={<Compra produtos={produtoCarrinho} removerProduto={removerProdutoCarrinho}/>} />
          <Route path='/Produto' element={<PaginaProduto/>}/>
        </Routes>
      </section>
    </Router>
    <Footer ></Footer>
  </>
  );
}

export default App;
