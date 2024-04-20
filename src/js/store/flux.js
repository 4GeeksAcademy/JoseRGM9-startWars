export const getState = ({ getStore, getActions, setStore }) => ({
    store: {
        personas: [],
        vehiculos: [],
        planetas: [],
        favoritos: []
    },
    actions: {
        fetchPersonas: () => {
            fetch("https://swapi.dev/api/people/")
                .then(response => response.json())
                .then(data => setStore({ personas: data.results }))
                .catch(error => console.error("Error", error));
        },
        fetchVehiculos: () => {
            fetch("https://swapi.dev/api/vehicles/")
                .then(response => response.json())
                .then(data => setStore({ vehiculos: data.results }))
                .catch(error => console.error("Error", error));
        },
        fetchPlanetas: () => {
            fetch("https://swapi.dev/api/planets/")
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
            } else {
                // La persona ya estaba en la lista de favoritos, la eliminamos
                setStore({ favoritos: favoritosActualizados });
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
            } else {
                // El vehículo ya estaba en la lista de favoritos, lo eliminamos
                setStore({ favoritos: favoritosActualizados });
            }
            getActions().saveLocalFavorites();
        },

        agregarFavoritoPlaneta: (planeta) => {
            const store = getStore();
            const favoritosActualizados = store.favoritos.filter(fav => fav.name !== planeta.name);
            if (favoritosActualizados.length === store.favoritos.length) {
                // El planeta no estaba en la lista de favoritos, lo agregamos
                setStore({ favoritos: [...store.favoritos, planeta] });
            } else {
                // El planeta ya estaba en la lista de favoritos, lo eliminamos
                setStore({ favoritos: favoritosActualizados });
            }
            getActions().saveLocalFavorites();
        },

        loadLocalFavorites: () => {
            const localFavorites = JSON.parse(localStorage.getItem("favoritos"));
            if (localFavorites) {
                setStore({ favoritos: localFavorites });
            }
        },
    
        saveLocalFavorites: () => {
            const store = getStore();
            localStorage.setItem("favoritos", JSON.stringify(store.favoritos));
        },
    }
});