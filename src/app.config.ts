interface ApiUrl {
    url: string
}

const api: ApiUrl = {
    url: ""
}

if(import.meta.env.MODE === 'production'){
    api.url = import.meta.env.VITE_API_URL
} else {
    api.url = "http://localhost:8080"
}

export default api