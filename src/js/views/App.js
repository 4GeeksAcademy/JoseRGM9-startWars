import React, { useState, useEffect, useContext } from "react";
import { PersonaCard, VehiculoCard, PlanetaCard } from "/workspaces/JoseRGM9-startWars/src/js/component/Cards.jsx";
import { Context } from '/workspaces/JoseRGM9-startWars/src/js/store/appContext.js';

export const App = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchPersonajes();
        actions.fetchVehiculos();
        actions.fetchPlanetas();
        actions.cargarFavoritos();
    }, []);


    return (
        <div>
            <div className="tituloContainer">
                <h1>Star Wars API</h1>
            </div>
            <div className="subtitulosContainer">
                <h2>Personajes</h2>
            </div>
            <div className="scroll-container">
                {store.personas.map((persona, index) => (
                    <div className="cardContainer" key={index}>
                        <PersonaCard
                            persona={persona}
                            agregarFavorito={actions.agregarFavoritoPersonaje}
                            favoritos={store.favoritos}
                        />
                    </div>
                ))}
            </div>

            <div className="subtitulosContainer">
                <h2>Vehículos</h2>
            </div>
            <div className="scroll-container">
                {store.vehiculos.map((vehiculo, index) => (
                    <div className="col-md-3" key={index}>
                        <VehiculoCard
                            vehiculo={vehiculo}
                            agregarFavorito={actions.agregarFavoritoVehiculo}
                            favoritos={store.favoritos}
                        />
                    </div>
                ))}
            </div>

            <div className="subtitulosContainer">
                <h2>Planetas</h2>
            </div>
            <div className="scroll-container">
                {store.planetas.map((planeta, index) => (
                    <div className="col-md-3" key={index}>
                        <PlanetaCard
                            planeta={planeta}
                            agregarFavorito={actions.agregarFavoritoPlaneta}
                            favoritos={store.favoritos}
                        />
                    </div>
                ))}
            </div>
            <div className="finalContainer">Copyright © The Programer Fit</div>
        </div>
    );
};
