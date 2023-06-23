import React from "react";
import { useState, useEffect } from "react";
import { pollerias } from "../api/pollos.api";
import Comidas from "../components/Comida.jsx";

function Home() {
  const [polleria, setPolleria] = useState([]);
  useEffect(() => {
    loadPolleria();
  }, []);

  async function loadPolleria() {
    const response = await pollerias();
    setPolleria(response.data);
  }
  function renderMain() {
    if (polleria.length === 0) return <h1>no se tienen usuarios</h1>
    return polleria.map((menu) => <Comidas pollo={menu} key={menu.cod} />);
  }


  let menuVisible = false;
  function mostrarOcultarMenu() {
    if (menuVisible) {
      document.getElementById("nav").classList = "";
      menuVisible = false;
    } else {
      document.getElementById("nav").classList = "responsive";
      menuVisible = true;
    }
  }
  function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  }
  return (
    <div>
      <section id="inicio">
        <header>
          <div class="contenido-header">
            <div class="logo">
              <h1>POLLOS CRIOLLON</h1>
            </div>
            <nav id="nav">
              <ul>
                <li>
                  <a href="#inicio" onclick="seleccionar()">
                    <i class="fa-solid fa-house"></i>
                    <span>Inicio</span>
                  </a>
                </li>
                <li>
                  <a href="#sabores" onclick="seleccionar()">
                    <i class="fa-solid fa-ice-cream"></i>
                    <span>Sabores</span>
                  </a>
                </li>
                <li>
                  <a href="#platos" onclick="seleccionar()">
                    <i class="fa-solid fa-utensils"></i>
                    <span>Platos</span>
                  </a></li>
                <li>
                  <a href="#blog" onclick="seleccionar()">
                    <i class="fa-solid fa-pen"></i>
                    <span>Blog</span>
                  </a>
                </li>
                <li>
                  <a href="#contacto" onclick="seleccionar()">
                    <i class="fa-solid fa-comments"></i>
                    <span>Contacto</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div class="social">
              <a href="+591 73532352">
                <i class="fa-solid fa-phone"></i>+591 73532352
                    </a>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
              <a href=""><i class="fa-brands fa-twitter"></i></a>
            </div>
            <div class="nav-responsive" id="bar" onclick="mostrarOcultarMenu()">
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
        </header>
        <div class="carrusel">
          <div class="gallery js-flickity" data-flickity-options='{ "wrapAround":true, "pageDots": false, "autoPlay": true}'>
            <div class="gallery-cell" >
              <img src="img/1.jpg" alt=""/>
                </div>
              <div class="gallery-cell">
              <img src="img/2.jpg" alt=""/>
                </div>
                <div class="gallery-cell">
              <img src="img/3.jpg" alt=""/>
                </div>
                  <div class="gallery-cell">
              <img src="img/4.jpg" alt=""/>
                </div>
                  </div>
                  <div class="info">
                    <h2>Polliyos pàra chuparse sino para morder los labios </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <button>Leer Más</button>
                  </div>
                </div>
        </section>
      <section id="sabores">
        <h2>Sabores</h2>
        <div class="fila">
          <div class="item">
            <div class="icono">
              <img src="img/piernitas.jpg" alt=""/>
                </div>
              <div class="info">
                <h3>Ensaladas</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div class="item">
              <div class="icono">
                <img src="img/pechuga.jpg" alt=""/>
                </div>
                <div class="info">
                  <h3>Piernitas</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
              <div class="item">
                <div class="icono">
                  <img src="img/alitas_Especial.jpg" alt=""/>
                </div>
                  <div class="info">
                    <h3>Alitas</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
                    <button>Ver Más</button>

         </section>
      <section id="platos">
        <h2>Platos</h2>
        <div class="fila">
          <div>{renderMain()}</div>
         </div>
      </section>
      <section className="contact" id="contact">
        <div className="main-contact">
          <div className="contact-content">
            <h4>Services</h4>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
          </div>

          <div className="contact-content">
            <h4>Delivery</h4>
            <li><a href="#home">Uber Eats</a></li>
            <li><a href="#about">DoorDash</a></li>
            <li><a href="#menu">ChowNow</a></li>
            <li><a href="#contact">Toast TakeOut</a></li>
          </div>

          <div className="contact-content">
            <h4>Contact</h4>
            <li><a href="#home">Contact Us</a></li>
            <li><a href="#about">Press Center</a></li>
            <li><a href="#menu">Careers</a></li>
            <li><a href="#contact">FAQ</a></li>
          </div>

          <div className="contact-content">
            <h4>Follow Us</h4>
            <li><a href="#home">TikTok</a></li>
            <li><a href="#about">Twitter</a></li>
            <li><a href="#menu">Facebook</a></li>
            <li><a href="#menu">Instagramm</a></li>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
