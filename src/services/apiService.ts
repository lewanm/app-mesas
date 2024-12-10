import axios from  "axios";

//por ahora dejarlo asi y no pasar nada por parametros hasta hacer yo el back

const apiClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
})

export async function getPeople(){
    const response = await apiClient.get("/users")
    return response.data
}