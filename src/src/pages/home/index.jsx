import React from 'react';
import ImageNiver from '../../assets/img.jpg'
import './style.css';

function HomePage() {
 



  return (
    <div className="home-container">
      <div className="image-container">
        <img src={ImageNiver} alt="Description" />
      </div>
      <button className="message-button" onClick={()=>window.location.href="/rec"}>
        Enviar mensagem para Mateus
      </button>
    </div>
  );
}

export default HomePage;
