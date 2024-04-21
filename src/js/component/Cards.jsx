import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Context } from '/workspaces/JoseRGM9-startWars/src/js/store/appContext.js';


export const PersonaCard = ({ persona, agregarFavorito, favoritos }) => {

    const estaEnFavoritosPersona = favoritos.some(favorito => favorito.name === persona.name);

    return (
        <div className="containerCard">
            <div className="card">
                <img src="https://blog.camaralia.com/wp-content/uploads/2016/01/Star-Wars-Blu-ray1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{persona.name}</h5>
                    <div className="botonesFavLeerMas">
                        <a href="#" className="btn btn-danger">Leer Mas!</a>
                        <button onClick={() => agregarFavorito(persona)} className="btn btn-danger">
                            {estaEnFavoritosPersona ? (
                                <i className="fas fa-heart"></i>
                            ) : (
                                <i className="far fa-heart"></i>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const VehiculoCard = ({ vehiculo, agregarFavorito, favoritos }) => {
    
    const estaEnFavoritosVehiculo = favoritos.some(favorito => favorito.name === vehiculo.name);

    return (
        <div className="containerCard">
            <div className="card">
                <img src="https://blog.camaralia.com/wp-content/uploads/2016/01/Star-Wars-Blu-ray1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{vehiculo.name}</h5>

                    <div className="botonesFavLeerMas">
                        <a href="#" className="btn btn-danger">Leer Más!</a>
                        <button onClick={() => agregarFavorito(vehiculo)} className="btn btn-danger">
                            {estaEnFavoritosVehiculo ? (
                                <i className="fas fa-heart"></i>
                            ) : (
                                <i className="far fa-heart"></i>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const PlanetaCard = ({ planeta, agregarFavorito, favoritos }) => {
    

    const estaEnFavoritosPlaneta = favoritos.some(favorito => favorito.name === planeta.name);

    return (
        <div className="containerCard">
            <div className="card">
                <img src="https://blog.camaralia.com/wp-content/uploads/2016/01/Star-Wars-Blu-ray1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{planeta.name}</h5>
                    <div className="botonesFavLeerMas">
                        <a href="#" className="btn btn-danger">Leer Más!</a>
                        <button onClick={() => agregarFavorito(planeta)} className="btn btn-danger">
                            {estaEnFavoritosPlaneta ? (
                                <i className="fas fa-heart"></i>
                            ) : (
                                <i className="far fa-heart"></i>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};