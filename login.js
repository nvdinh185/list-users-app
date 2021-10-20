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
        // console.log(username.value, password.value);

        const userInfo = { username: username.value, password: password.value };
        const dataPost = await tokenClient.post('/auth/login-user', userInfo);
        console.log("test-post data: ", dataPost);
        alert("Đăng nhập thành công!");

        // reset form
        loginFormElement.reset();
    };

    loginFormElement.addEventListener("submit", handleFormSubmit);
}
