//3 partes que compões um componente em JavaScript
//Primeira Parte 

import React from 'react';
import "./App.css";
import loja from "./img/loja.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faMessage} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";


// Segunda Parte
// classe ou função

class App extends React.Component{
render(){
  return(
    <div className="App">
      <header className="App-cabecalho">
      <h1 className="logo">
            <a href="index.html" title = "Loja de Informática do Obama" > Loja de Informática do Obama </a>
        </h1>
        <form action="" method="post">
        <input type="text" name="pesquisa" id="pesquisa" placeholder="Faça uma busca"/>
        <button> <FontAwesomeIcon icon={ faMagnifyingGlass } /> </button> 
        </form>
     </header>
     <nav className="menu">
     <ul>
             <li><a href="#home">Home</a></li>
             <li><a href="#produtos">Produtos</a></li>
             <li><a href="#servicos">Serviços</a></li>
             <li><a href="#contatos">Contatos</a></li>
         </ul> 
         <div className="social-icons">
             <a href="" className="btn-facebook"><i className="fa-brands fa-facebook"></i></a>
             <a href="" className="btn-twitter"><i className="fa-brands fa-twitter"></i></a>
             <a href="" className="btn-google"><i className="fa-brands fa-google"></i></a>
         </div>
     </nav>
     <main className="principal">
     <article className="sobre">
            <h2>Sobre Nós</h2>
            <img src={loja}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime quidem nostrum ipsa odio nesciunt ullam nihil optio aperiam dolorum quod exercitationem, itaque pariatur asperiores at omnis minima cupiditate et.
            Necessitatibus iusto adipisci obcaecati, dignissimos, libero nihil alias praesentium ullam voluptatibus exercitationem aperiam, eius officia hic ipsam voluptate reiciendis harum. Illum molestias sunt porro ullam numquam blanditiis vero recusandae perspiciatis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi aliquid alias, necessitatibus temporibus ex excepturi natus fugiat ea ratione sit ipsa laborum tempore enim quis doloremque aspernatur cum consequuntur.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, voluptates ad voluptatibus sint distinctio quod omnis aspernatur id sunt ullam! Ad deserunt dolor voluptates voluptate officia eius sint suscipit maxime.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reiciendis nemo corporis amet beatae. Sapiente velit facilis a ad. Sequi qui inventore quo iusto recusandae dicta excepturi impedit doloribus. Quibusdam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla exercitationem veritatis accusantium, incidunt quis ea, iusto culpa magnam iste natus, fugit porro tenetur nam autem accusamus labore. Dolorum, quod quibusdam.</p>
        </article>
        <aside className="onde-estamos">
            <h2>Onde Estamos</h2>
            <p>Rua Tito n54 - Vila Romana - São Paulo - SP - Brasil </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.52748707274!2d-39.28678145023931!3d-14.795624603070642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x739aaf0cc0db597%3A0x9dfa10026b580036!2sAv.+Juc%C3%A1+Le%C3%A3o+-+Centro+Comercial%2C+Itabuna+-+BA!5e0!3m2!1spt-BR!2sbr!4v1449945134287%22%3E"> </iframe>
            <h2>Contatos</h2>
            <ul>
                <li><FontAwesomeIcon icon={faPhone}/> (11) 930277955 </li>
                <li><FontAwesomeIcon icon={faMessage}/> (11) 930277955</li>
                <li><FontAwesomeIcon icon={faEnvelope}/> alinegallo02@gmail.com</li>
            </ul>
        </aside>
      </main>
      <section className="newsletter">
          <h3>Notícias</h3>
          <p>Receba nossas promoções por e-mail</p>
          <form action="" method="post">
              <input type="text" id="" placeholder="Seu nome"/>
              <input type="email" name="" id="" placeholder="Seu e-mail"/>
          <button>Cadastrar</button>
          </form>
          </section>
          <footer className="rodape"> 
        <p>Loja do Obama - Aline Gallo - Todos os direitos reservads&copy;</p>
    </footer>

    </div>
  );
}

}

export default App;
