const registerUserForm = document.getElementById("register_user")
var favDialog = document.getElementById('dialogFromUp');

registerUserForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {};
    const inputs = e.target;

    for (const input of inputs) {
        if (input.value && input.value !== '') {
            data[input.name] = input.value
        }
    }

    try {
        const response = await fetch("http://localhost:8500/api/user/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const dataResponse = await response.json();

        if (response.status != 200) {
            throw new Error(dataResponse.msg)
        }
        
    } catch (error) {
        console.log(error)
        window.alert(error)
    }
    favDialog.close();
})