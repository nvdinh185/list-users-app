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
            const dataPost = await axiosClient.post('/auth/login-user', userInfo);
            // console.log("test-post data: ", dataPost.data.user);
            localStorage.setItem('currentUser', JSON.stringify(dataPost.data.user));
            window.location = config.url;
        } catch (error) {
            console.log("Lỗi: ", error);
            const errorElement = document.getElementById("error");
            errorElement.innerHTML = `<p>Sai username hoặc password!</p>`;
        }

        // reset form
        loginFormElement.reset();
    };

    loginFormElement.addEventListener("submit", handleFormSubmit);
}
