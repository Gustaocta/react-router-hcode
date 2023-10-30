import React from 'react';
import logo from './assets/images/logo-porsche.svg';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <header>
        <div>
          <a href='#' className='logo' aria-label='Logo'>
          <img src={logo} alt='Logo da Porsche'></img>
          </a>
        </div>

        <nav className='menu'> 
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Models</a></li>
            <li><a href="#">Descubra</a></li>
          </ul>
        </nav>
      </header>

      <section id='hero'>
        <div className='hero-container'>
          <h2 className='hero-title'>
            Bem-vindo à vida.
          </h2>
          <h3 className='hero-subtitle'>
            Modelos 718 T.
          </h3>
        </div>

      </section>

      <footer>
        <div className="content">

        </div>
        <div className="copyright">
          <p>
          © 2023 Hcode Treinamentos Importadora de Veículos Ltda. Indicações Legais. Política de Privacidade. Compliance Porsche. Canal de Denúncia. Open Source Software Notice.
          </p>
          <p>
          * As informações encontradas neste site referentes ao Porsche Connect não se aplicam ao Brasil, já que o programa ainda não está disponível no mercado brasileiro. Para mais informações sobre os produtos disponíveis no Brasil entre em contato com o Porsche Center de sua preferência.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
