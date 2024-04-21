export const getState = ({ getStore, getActions, setStore }) => ({
    store: {
        personas: [],
        vehiculos: [],
        planetas: [],
        favoritos: [],
        contadorFavoritos: 0
    },
    actions: {
        fetchPersonas: () => {
            fetch("https://www.swapi.tech/api/people/")
                .then(response => response.json())
                .then(data => setStore({ personas: data.results }))
                .catch(error => console.error("Error", error));
        },
        fetchVehiculos: () => {
            fetch("https://www.swapi.tech/api/vehicles/")
                .then(response => response.json())
                .then(data => setStore({ vehiculos: data.results }))
                .catch(error => console.error("Error", error));
        },
        fetchPlanetas: () => {
            fetch("https://www.swapi.tech/api/planets/")
                .then(response => response.json())
                .then(data => setStore({ planetas: data.results }))
                .catch(error => console.error("Error", error));
        },

        agregarFavoritoPersona: (persona) => {
            const store = getStore();
            const favoritosActualizados = store.favoritos.filter(fav => fav.name !== persona.name);
            if (favoritosActualizados.length === store.favoritos.length) {
                // La persona no estaba en la lista de favoritos, la agregamos
                setStore({ favoritos: [...store.favoritos, persona] });
                setStore({ contadorFavoritos: store.contadorFavoritos + 1 });
            } else {
                // La persona ya estaba en la lista de favoritos, la eliminamos
                setStore({ favoritos: favoritosActualizados });
                setStore({ contadorFavoritos: store.contadorFavoritos - 1 });
            }
            // Guardar los favoritos en el almacenamiento local después de actualizar el estado
            getActions().saveLocalFavorites();
        },

        agregarFavoritoVehiculo: (vehiculo) => {
            const store = getStore();
            const favoritosActualizados = store.favoritos.filter(fav => fav.name !== vehiculo.name);
            if (favoritosActualizados.length === store.favoritos.length) {
                // El vehículo no estaba en la lista de favoritos, lo agregamos
                setStore({ favoritos: [...store.favoritos, vehiculo] });
                setStore({ contadorFavoritos: store.contadorFavoritos + 1 });
            } else {
                // El vehículo ya estaba en la lista de favoritos, lo eliminamos
                setStore({ favoritos: favoritosActualizados });
                setStore({ contadorFavoritos: store.contadorFavoritos - 1 });
            }
            getActions().saveLocalFavorites();
        },

        agregarFavoritoPlaneta: (planeta) => {
            const store = getStore();
            const favoritosActualizados = store.favoritos.filter(fav => fav.name !== planeta.name);
            if (favoritosActualizados.length === store.favoritos.length) {
                // El planeta no estaba en la lista de favoritos, lo agregamos
                setStore({ favoritos: [...store.favoritos, planeta] });
                setStore({ contadorFavoritos: store.contadorFavoritos + 1 });
            } else {
                // El planeta ya estaba en la lista de favoritos, lo eliminamos
                setStore({ favoritos: favoritosActualizados });
                setStore({ contadorFavoritos: store.contadorFavoritos - 1 });
            }
            getActions().saveLocalFavorites();
        },

        loadLocalFavorites: () => {
            const localFavorites = JSON.parse(localStorage.getItem("favoritos"));
            if (localFavorites) {
                setStore({ favoritos: localFavorites });
                setStore({ contadorFavoritos: localFavorites.length });
            }
        },

        saveLocalFavorites: () => {
            const store = getStore();
            localStorage.setItem("favoritos", JSON.stringify(store.favoritos));
        },

        eliminarFavorito: (favorito, event) => {
            event.stopPropagation(); // esto es para que no se cierre el dropdown al borrar un favorito
            const store = getStore();
            const favoritosActualizados = store.favoritos.filter(item => item.name !== favorito.name);
            setStore({ favoritos: favoritosActualizados });
            setStore({ contadorFavoritos: favoritosActualizados.length });
            // Guardar los favoritos en el almacenamiento local después de actualizar el estado
            getActions().saveLocalFavorites();
        },



    }
});