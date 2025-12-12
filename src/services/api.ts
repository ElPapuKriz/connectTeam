import axios from "axios";


const API_URL = "http://localhost:3000/api/";

export  const  api = {
    
     getUsuarios:async ()=>
        await axios.get(`${API_URL}usuarios`),

     crearUsuario:async(nombre: string)=>
        await axios.post(`${API_URL}usuarios`,{nombre}),

}