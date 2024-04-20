import React, { useState, useEffect, useContext } from "react";
import { PersonaCard, VehiculoCard, PlanetaCard } from "/workspaces/JoseRGM9-startWars/src/js/component/Cards.jsx";
import { Navbar } from "/workspaces/JoseRGM9-startWars/src/js/component/navbar.js";
import { Context } from '/workspaces/JoseRGM9-startWars/src/js/store/appContext.js';

export const App = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchPersonas();
        actions.fetchVehiculos();
        actions.fetchPlanetas();
        
        actions.loadLocalFavorites();
    }, []);


    return (
        <div>
            <Navbar favoritos={store.favoritos} />
            <h1>Star Wars API Demo</h1>

            <h2>Personajes</h2>
            <div className="scroll-container">
                {store.personas.map((persona, index) => (
                    <div className="card" key={index}>
                        <PersonaCard
                            persona={persona}
                            agregarFavorito={actions.agregarFavoritoPersona}
                            favoritos={store.favoritos}
                        />
                    </div>
                ))}
            </div>

            <h2>Vehículos</h2>
            <div className="row">
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

            <h2>Planetas</h2>
            <div className="row">
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
        </div>
    );
};