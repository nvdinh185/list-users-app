const getToken = () => {
    const token = JSON.parse(localStorage.getItem('currentUser'))?.token;
    return token;
}

const axiosClient = axios.create({
    baseURL: config.url,
    headers: {
        'content-type': 'application/json',
    },
});

axiosClient.interceptors.request.use(config => {
    const token = getToken();
    // console.log("token: ", token);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});