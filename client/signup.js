if (localStorage.getItem('currentUser')) {
    window.location = 'index.html';
} else {
    const signupFormElement = document.querySelector("#signupFormId");
    // console.log(signupFormElement);
    if (signupFormElement) {
        const handleFormSubmit = async (e) => {
            // prevent browser from reloading
            e.preventDefault();

            const username = signupFormElement.querySelector("#username").value;
            const password = signupFormElement.querySelector("#password").value;
            const fullname = signupFormElement.querySelector("#fullname").value;
            if (!username || !password || !fullname) {
                alert("Vui lòng nhập đầy đủ thông tin!");
                return;
            }
            // console.log(username, password);

            const userInfo = { username, password, fullname };
            try {
                const dataPost = await axiosClient.post('/auth/create-user', userInfo);
                console.log("test-post data: ", dataPost.data);
                // console.log("Đăng ký thành công!");
                window.location = 'login.html';
            } catch (error) {
                console.log("Lỗi: ", error);
            }

            // reset form
            signupFormElement.reset();
        };

        signupFormElement.addEventListener("submit", handleFormSubmit);
    }
}
