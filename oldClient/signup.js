const tokenClient = require('./tokenClient');

const signupFormElement = document.querySelector("#signupFormId");
// console.log(signupFormElement);
if (signupFormElement) {
    const handleFormSubmit = async (e) => {
        // prevent browser from reloading
        e.preventDefault();

        const username = signupFormElement.querySelector("#username");
        const password = signupFormElement.querySelector("#password");
        if (!username.value || !password.value) return;
        // console.log(username.value, password.value);

        const userInfo = { username: username.value, password: password.value };
        try {
            const dataPost = await tokenClient.post('/auth/create-user', userInfo);
            console.log("test-post data: ", dataPost);
            // lưu token xuống đĩa
            localStorage.setItem('token', dataPost.token);
            alert("Đăng ký thành công!");
        } catch (error) {
            console.log("Lỗi: ", error);
        }

        // reset form
        signupFormElement.reset();
    };

    signupFormElement.addEventListener("submit", handleFormSubmit);
}
