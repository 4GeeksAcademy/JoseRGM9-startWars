import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '/workspaces/JoseRGM9-startWars/src/js/store/appContext.js';

export const VehiculoDetalle = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const [vehiculoDetalle, setVehiculoDetalle] = useState(null);

    useEffect(() => {
        // Llamar a la función fetchVehiculoDetalle con el ID del vehículo
        actions.fetchVehiculoDetalle(id)
            .then(data => {
                setVehiculoDetalle(data); // Actualizar el estado con la información del vehículo
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
                    <h5 className="cardTitulo">Detalles del Vehículo</h5>
                </div>
                {vehiculoDetalle ? (
                    <div className="card-body-detalle">
                        <div className="detalle">
                            <p>Nombre</p>
                            <p>{vehiculoDetalle.properties.name}</p>
                        </div>
                        <div className="detalle">
                            <p>Modelo</p>
                            <p>{vehiculoDetalle.properties.model}</p>
                        </div>
                        <div className="detalle">
                            <p>Fabricante</p>
                            <p>{vehiculoDetalle.properties.manufacturer}</p>
                        </div>
                        <div className="detalle">
                            <p>Largo</p>
                            <p>{vehiculoDetalle.properties.length}</p>
                        </div>
                        <div className="detalle">
                            <p>Capacidad de carga</p>
                            <p>{vehiculoDetalle.properties.cargo_capacity}</p>
                        </div>
                        <div className="detalle">
                            <p>Consumables</p>
                            <p>{vehiculoDetalle.properties.consumables}</p>
                        </div>
                        <div className="detalle">
                            <p>Costo en creditos</p>
                            <p>{vehiculoDetalle.properties.cost_in_credits}</p>
                        </div>
                    </div>
                ) :
                    <p>Cargando detalles del vehículo...</p>
                }
            </div>
        </div>

    );
};