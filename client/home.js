function onLogout() {
        localStorage.removeItem('currentUser');
        location.reload();
}

if (localStorage.getItem('currentUser')) {
        const getUsers = async () => {
                const listUsersElement = document.getElementById("listUsers");
                listUsersElement.style.display = 'block';
                const table = document.getElementById("table");
                let listUsers = await axiosClient.get('/auth/get-users');
                listUsers = listUsers.data.users;
                // console.log("listUsers: ", listUsers);
                const header = `
                <table>        
                        <tr>
                                <th>Username</th>
                                <th>Fullname</th>
                        </tr>`
                let body = '';
                for (let us of listUsers) {
                        body += `
                        <tr>
                                <td>${us.username}</td>
                                <td>${us.fullname}</td>
                        </tr>`
                }
                const footer = `</table>`
                table.innerHTML = header + body + footer;
        }
        getUsers();
        // (async () => {
        //         const listUsersElement = document.getElementById("listUsers");
        //         listUsersElement.style.display = 'block';
        //         const table = document.getElementById("table");
        //         let listUsers = await tokenClient.get('/auth/get-users');
        //         listUsers = listUsers.data.users;
        //         // console.log("listUsers: ", listUsers);
        //         const header = `
        //         <table>        
        //                 <tr>
        //                         <th>Username</th>
        //                         <th>Fullname</th>
        //                 </tr>`
        //         let body = '';
        //         for (let us of listUsers) {
        //                 body += `
        //                 <tr>
        //                         <td>${us.username}</td>
        //                         <td>${us.fullname}</td>
        //                 </tr>`
        //         }
        //         const footer = `</table>`
        //         table.innerHTML = header + body + footer;
        // })()
} else {
        const btn = document.getElementById("btn");
        btn.style.display = 'block';
}