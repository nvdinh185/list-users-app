const loginFormElement = document.querySelector("#loginFormId");
// console.log(loginFormElement);
if (loginFormElement) {
    const handleFormSubmit = async (e) => {
        // prevent browser from reloading
        e.preventDefault();

        const username = loginFormElement.querySelector("#username").value;
        const password = loginFormElement.querySelector("#password").value;
        if (!username || !password) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        const userInfo = { username, password };
        // console.log(userInfo);
        try {
            const dataPost = await tokenClient.post('/auth/login-user', userInfo);
            console.log("test-post data: ", dataPost.data);
            console.log("Đăng nhập thành công!");
            window.location = "https://dinh-signup-login.herokuapp.com/";
        } catch (error) {
            console.log("Lỗi: ", error);
        }

        // reset form
        loginFormElement.reset();
    };

    loginFormElement.addEventListener("submit", handleFormSubmit);
}
