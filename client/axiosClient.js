const getToken = () => {
    const token = JSON.parse(localStorage.getItem('currentUser'))?.token;
    return token;
}

// const url = "https://dinh-list-users.herokuapp.com";
const url = "http://localhost:4000";

const axiosClient = axios.create({
    baseURL: url,
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