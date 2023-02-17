const addUser = document.getElementById("add_user");
let dialog = document.getElementById("dialogFrom");

addUser.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = {}
    const inputs = event.target;

    for (const input of inputs) {
        if (input.value && input.value !== '') {
            data[input.name] = input.value
            console.log("Data: ", inputs)
        }
    }

    try {
        const res = await fetch("http://localhost:8500/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const dataRes = await res.json();

        if (res.status != 200) {
            throw new Error(dataRes.msg)
        }

        const users = await listUsers();
        createUserTable(users)
    } catch (error) {
        console.log(error)
    }
    dialog.close();
})
