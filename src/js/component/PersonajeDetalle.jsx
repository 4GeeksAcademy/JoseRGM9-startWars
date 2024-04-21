import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '/workspaces/JoseRGM9-startWars/src/js/store/appContext.js';

export const PersonajeDetalle = ({ personaje }) => {


    

    return (
        <div>
           
            <h2>Detalles del personaje</h2>
            <p>Nombre: {}</p>
            <p>Altura: {}</p>
            <p>Peso: {}</p>
           
        </div>
    );
};