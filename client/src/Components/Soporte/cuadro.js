import React from "react";
import "../../Styles/Soporte/cuadro.css"

/**
 * Function Cuadro es un cuadro que se dara a mostrar
 * @param key
 * @param title
 * @param imageSource
 * @param boton
 * @param text
 * @param funci
 * return cuadro completo
 */
function Cuadro({key,title,imageSource,boton,text,funci}){
  
  return(
    
    <div className="cuadro text-center bg-dark animate__animated animate__fadeInUp"id = {key}>

      <div className= "overflow">
        <img src ={imageSource} alt="a wallpaper" className="card-img-top"/>
      </div>
      
      <div className="cuadro-body text-light">
        <h4 className="cuadro-title">{title}</h4>
        <p className="cuadro-text text-secondary">Para mayor informacion
        </p>       
        <div className="hide" id="hideText">       
          <p>{text}</p>
          </div>
        <button  className="btn btn-outline-primary" id="hideText_btn" onClick={funci}>
          {boton}
          </button>
                
       </div>
       
       
    </div>
    
  )
}


export default Cuadro