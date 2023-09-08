import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({ 
    baseUrl: "http://localhost:5000",
    prepareHeaders: (headers, { getState }) => {
        // Ajoutez des en-têtes personnalisés ici
        // const token = getState().auth.token; // Supposons que vous stockez le token JWT dans l'état Redux
        // if (token) {
        //   headers.set('Authorization', `Bearer ${token}`);
        // }
        
        headers.set('Content-Type', 'application/json');

        return headers;
      },
})

export const apiSlice = createApi( {
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({})
})