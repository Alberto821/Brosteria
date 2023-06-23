

function Comida({Comidas}) {
    return(
       <div>
           <div class="item">
              <img src={"img/"+Comidas.img} alt=""/>
                   <p>{Comidas.nombre}</p>
            </div>
       </div>)
}
export default Comida;
