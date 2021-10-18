const tokenClient = require('./tokenClient');

const loginFormElement = document.querySelector("#loginFormId");
// console.log(loginFormElement);
if (loginFormElement) {
    const handleFormSubmit = async (e) => {
        // prevent browser from reloading
        e.preventDefault();

        const username = loginFormElement.querySelector("#username");
        const password = loginFormElement.querySelector("#password");
        if (!username.value || !password.value) return;
        console.log(username.value, password.value);

        const dataGet = await tokenClient.get('/test-get');
        console.log("test-get data: ", dataGet);

        const user = { username: "nvdinh185" };
        const dataPost = await tokenClient.post('/test-post', user);
        console.log("test-post data: ", dataPost);

        // reset form
        loginFormElement.reset();
    };

    loginFormElement.addEventListener("submit", handleFormSubmit);
}
