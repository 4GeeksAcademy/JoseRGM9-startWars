import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '/workspaces/JoseRGM9-startWars/src/js/store/appContext.js';

export const PlanetaDetalle = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const [planetaDetalle, setPlanetaDetalle] = useState(null);

    useEffect(() => {
        // Llamar a la función fetchPlanetaDetalle con el ID del planeta
        actions.fetchPlanetaDetalle(id)
            .then(data => {
                setPlanetaDetalle(data); // Actualizar el estado con la información del planeta
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
                        <h4>Descripción</h4>
                    </div>
                </div>
                <div className="separador"></div>
                <div>
                    <h5 className="cardTitulo">Detalles del Planeta</h5>
                </div>
                {planetaDetalle ? (
                    <div className="card-body-detalle">
                        <div className="detalle">
                            <p>Nombre</p>
                            <p>{planetaDetalle.properties.name}</p>
                        </div>
                        <div className="detalle">
                            <p>Período de rotación</p>
                            <p>{planetaDetalle.properties.rotation_period}</p>
                        </div>
                        <div className="detalle">
                            <p>Período orbital</p>
                            <p>{planetaDetalle.properties.orbital_period}</p>
                        </div>

                        <div className="detalle">
                            <p>Clima</p>
                            <p>{planetaDetalle.properties.climate}</p>
                        </div>
                        <div className="detalle">
                            <p>Diametro</p>
                            <p>{planetaDetalle.properties.diameter}</p>
                        </div>
                        <div className="detalle">
                            <p>Gravedad</p>
                            <p>{planetaDetalle.properties.gravity}</p>
                        </div>
                        <div className="detalle">
                            <p>Poblacion</p>
                            <p>{planetaDetalle.properties.population}</p>
                        </div>
                        <div className="detalle">
                            <p>Terreno</p>
                            <p>{planetaDetalle.properties.terrain}</p>
                        </div>
                    </div>
                ) :
                    <p>Cargando detalles del planeta...</p>
                }
            </div>
        </div>
    );
};