import React from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
