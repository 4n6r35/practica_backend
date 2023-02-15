const form = document.getElementById("login_form")

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {};
    const inputs = e.target;

    for (const input of inputs) {
        if (input.value && input.value !== '') {
            data[input.name] = input.value
        }

        try  {
            const response = await fetch("http://localhost:8500/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const dataResponse = await response.json();

            if (response.status != 200) {
                throw new Error(dataResponse.msg)
            }

            localStorage.setItem('token', dataResponse.token)
            localStorage.setItem('user', dataResponse.user)

            window.location.href = '../cargar-user/user.html'
        } catch (error) {
            console.log(error)
        }
    }
})
