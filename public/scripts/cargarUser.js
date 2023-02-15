const url = "http://localhost:8500/api/user"
const listUsers = async () => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const { users } = await response.json();

        return users;
    } catch (error) {
        console.log(error)
    }

    const crearUser = async (user) => {
        try {
            const res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const newUser = await res.json();
            console.log({ newUser })
            return newUser
        } catch (error) {
            console.log(error)
        }
    }
}

const createUserTable = (users = []) => {
    const tableBody = document.getElementById("table_user_body")
    users.forEach(user => {
        const html = `
        <td scope="row" class="trb"> ${user.id_user} </td>                
        <td scope="row" class="trb"> ${user.name} </td>
        <td scope="row" class="trb"> ${user.email} </td>
        <td scope="row" class="trb"> ${user.cargo} </td>
        <td scope="row" class="trb"> ${user.status ? 'ACTIVO' : 'INACTIVO'} </td>
    `;

        const tr = document.createElement('tr');
        tr.innerHTML = html;
        tableBody.appendChild(tr)
    })
}
void (async () => {
    try {
        const users = await listUsers();
        createUserTable(users)
    } catch (error) {
        console.log(error)
    }
})()
