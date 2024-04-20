import React, { useState } from 'react';

export const PersonaCard = ({ persona, agregarFavorito, favoritos }) => {

    const estaEnFavoritosPersona = favoritos.some(favorito => favorito.name === persona.name);

    return (
        <div className="containerCard">
            <div className="card">
                <img src="https://blog.camaralia.com/wp-content/uploads/2016/01/Star-Wars-Blu-ray1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{persona.name}</h5>
                    <p className="card-text">
                        <strong>Género:</strong> {persona.gender}
                    </p>
                    <p className="card-text">
                        <strong>Año de nacimiento:</strong> {persona.birth_year}
                    </p>
                    <p className="card-text">
                        <strong>Altura:</strong> {persona.height} cm
                    </p>
                    <p className="card-text">
                        <strong>Peso:</strong> {persona.mass} kg
                    </p>
                    <p className="card-text">
                        <strong>Color de pelo:</strong> {persona.hair_color}
                    </p>
                    <p className="card-text">
                        <strong>Color de piel:</strong> {persona.skin_color}
                    </p>
                    <p className="card-text">
                        <strong>Color de ojos:</strong> {persona.eye_color}
                    </p>
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
                    <p className="card-text">
                        <strong>Modelo:</strong> {vehiculo.model}
                    </p>
                    <p className="card-text">
                        <strong>Fabricante:</strong> {vehiculo.manufacturer}
                    </p>
                    <p className="card-text">
                        <strong>Costo en créditos:</strong> {vehiculo.cost_in_credits}
                    </p>
                    <p className="card-text">
                        <strong>Largo:</strong> {vehiculo.length} m
                    </p>
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
                    <p className="card-text">
                        <strong>Diámetro:</strong> {planeta.diameter}
                    </p>
                    <p className="card-text">
                        <strong>Clima:</strong> {planeta.climate}
                    </p>
                    <p className="card-text">
                        <strong>Terreno:</strong> {planeta.terrain}
                    </p>
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