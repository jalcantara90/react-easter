import React, { Component } from 'react';
import logoWhite from '../images/invie-white.png';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="contenedor">
                    <div className="contacto">
                        <img src={logoWhite} alt="logotipo blanco"/>
                        <a href="tel:+34659109742"> <strong>Teléfono</strong> <span>659109742</span></a>
                        <a href="mailto:contacto@invie.com"><strong>E-mail</strong> <span>contacto@invie.com</span></a>
                    </div>
                    <form className="formulario">
                        <div className="col1">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" name="nombre" id="nombre" required/> 
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" name="email" id="email" required/> 
                            <div className="sexo">
                                <label htmlFor="mujer">
                                    <input type="radio" value="mujer" id="mujer" defaultChecked name="sexo" /> Mujer
                                </label>
                                <label htmlFor="hombre">
                                    <input type="radio" value="hombre" id="hombre" name="sexo" /> Hombre
                                </label>
                            </div>
                            
                            <div className="intereses">
                                <label htmlFor="cotizacion">
                                    <input type="checkbox" id="cotizacion" value="cotizacion" defaultChecked name="intereses"/> Cotización
                                </label>      
                                <label htmlFor="reclamos">
                                    <input type="checkbox" id="reclamos" value="reclamos" name="intereses"/> Reclamos
                                </label> 
                                <label htmlFor="comentarios">
                                    <input type="checkbox" id="comentarios" value="comentarios" name="intereses"/> Comentarios
                                </label> 
                                <label htmlFor="otros">
                                    <input type="checkbox" id="otros" value="otros" name="intereses"/> Otros
                                </label> 
                            </div>
                        </div>
                        <div className="col2" >
                            <div className="comentarios">
                                <label htmlFor="comentarios">Comentarios</label>
                                <textarea name="comentarios" id="comentarios" cols="30" rows="7"></textarea>
                                <input type="submit" className="button" value="Enviar"/>
                            </div>
                        </div> 
                    </form>
                </div> 
            </footer>
        )
    }
}

export default Footer;