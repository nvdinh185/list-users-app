// const { createStore } = window.Redux;
const axios = require('axios');

const loginFormElement = document.querySelector("#loginFormId");
console.log(loginFormElement);
if (loginFormElement) {
    const handleFormSubmit = (e) => {
        // prevent browser from reloading
        e.preventDefault();

        const username = loginFormElement.querySelector("#username");
        const password = loginFormElement.querySelector("#password");
        // console.log(password.value);
        if (!username.value || !password.value) return;
        console.log(username.value, password.value);

        axios.get('http://ip.jsontest.com/')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })

        // console.log("Submit", hobbyTextElement.value);
        // const action = {
        //     type: 'ADD_HOBBY',
        //     payload: hobbyTextElement.value
        // };
        // store.dispatch(action);

        // reset form
        loginFormElement.reset();
    };

    loginFormElement.addEventListener("submit", handleFormSubmit);
}
