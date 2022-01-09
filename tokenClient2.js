const getToken = () => {
    const token = localStorage.getItem('token');
    return token;
}

const tokenClient2 = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        'content-type': 'application/json',
    },
});

tokenClient2.interceptors.request.use(config => {
    const token = getToken();
    // console.log("token: ", token);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});