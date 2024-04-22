import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '/workspaces/JoseRGM9-startWars/src/js/store/appContext.js';

export const PersonajeDetalle = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const [personajeDetalle, setPersonajeDetalle] = useState(null);

    useEffect(() => {
        // Llamar a la función fetchPersonajeDetalle con el ID del personaje
        actions.fetchPersonajeDetalle(id)
            .then(data => {
                setPersonajeDetalle(data); // Actualizar el estado con la información del personaje
                actions.cargarFavoritos()
            });
    }, [id]);


    return (
        <div className="containerCardDetalle">
            <div className="cardDetalle">
                <div className="filaImagenYDescripcion">
                    <div className="columnaImagenYDescripcion">
                        <img src="https://blog.camaralia.com/wp-content/uploads/2016/01/Star-Wars-Blu-ray1.jpg" className="cardImagenDetalle" alt="..." />
                    </div>
                    <div className="columnaImagenYDescripcion">
                        <h4>Descripcion</h4>
                    </div>
                </div>
                <div className="separador">
                </div>
                <div>
                    <h5 className="cardTitulo">Detalles del Personaje</h5>
                </div>
                {personajeDetalle ? (
                    <div className="card-body-detalle">
                        <div className="detalle">
                            <p>Nombre</p>
                            <p>{personajeDetalle.properties.name}</p>
                        </div>
                        <div className="detalle">
                            <p>Año de nacimiento</p>
                            <p>{personajeDetalle.properties.birth_year}</p>
                        </div>
                        <div className="detalle">
                            <p>Genero</p>
                            <p>{personajeDetalle.properties.gender}</p>
                        </div>
                        <div className="detalle">
                            <p>Altura</p>
                            <p>{personajeDetalle.properties.height}</p>
                        </div>
                        <div className="detalle">
                            <p>Peso</p>
                            <p>{personajeDetalle.properties.mass}</p>
                        </div>
                        <div className="detalle">
                            <p>Color de Ojos</p>
                            <p>{personajeDetalle.properties.eye_color}</p>
                        </div>
                        <div className="detalle">
                            <p>Color de Cabello</p>
                            <p>{personajeDetalle.properties.hair_color}</p>
                        </div>
                    </div>
                ) :
                    <p>Cargando detalles del personaje...</p>
                }
            </div>
        </div>

    );
};