import React, {Component} from 'react'
import imgPortada from './../../assets/portada.jpg'

class Index extends Component {
    render() {
        return (
            <div>
                <img src={imgPortada} className="img-fluid" alt="Imagen de la feria de Tristán Narvaja" />
                <div className="container-fluid">
                    <h3 className="text-center my-2">Visitá los puestos</h3>
                    <div className="container-fluid">
                        <div className="row justify-content-center" id="categorias">
                            <div className="col-5 mb-2" style={{background:'#58b300'}}>
                                <i className="fas fa-paw"></i>
                                Plantas y animales
                            </div>
                            <div className="col-5 mb-2 text-light" style={{background:'#621376'}}>
                                <i className="fas fa-apple-alt"></i>
                                Frutas y verduras
                            </div>
                            <div className="col-5 mb-2" id ="anticuarios" style={{background:'#f0b500'}}>
                                <i className="fas fa-ring"></i>
                                Anticuarios
                            </div>
                            <div className="col-5 mb-2" style={{background:'#50c4b8'}}>
                                <i className="fas fa-book"></i>
                                Libros y revistas
                            </div>
                            <div className="col-5 mb-2" style={{background:'#eb9d00'}}>
                                <i className="fas fa-tshirt"></i>
                                Vestimenta
                            </div>
                            <div className="col-5 mb-2 text-light" style={{background:'#2d2d76'}} data-toggle="modal" data-target="#example-mercado-pulgas">
                                <i className="fas fa-gifts"></i>
                                Mercado de pulgas
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index