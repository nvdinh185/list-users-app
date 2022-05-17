const signupFormElement = document.querySelector("#signupFormId");
// console.log(signupFormElement);
if (signupFormElement) {
    const handleFormSubmit = async (e) => {
        // prevent browser from reloading
        e.preventDefault();

        const username = signupFormElement.querySelector("#username").value;
        const password = signupFormElement.querySelector("#password").value;
        if (!username || !password) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        // console.log(username, password);

        const userInfo = { username, password };
        try {
            const dataPost = await tokenClient2.post('/auth/create-user', userInfo);
            console.log("test-post data: ", dataPost.data);
            // lưu token xuống đĩa
            localStorage.setItem('token', dataPost.data.token);
            alert("Đăng ký thành công!");
        } catch (error) {
            console.log("Lỗi: ", error);
        }

        // reset form
        signupFormElement.reset();
    };

    signupFormElement.addEventListener("submit", handleFormSubmit);
}
