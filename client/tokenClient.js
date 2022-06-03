const getToken = () => {
    const token = localStorage.getItem('token');
    return token;
}

const tokenClient = axios.create({
    baseURL: "https://dinh-new-heroku.herokuapp.com",
    headers: {
        'content-type': 'application/json',
    },
});

tokenClient.interceptors.request.use(config => {
    const token = getToken();
    // console.log("token: ", token);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});