


const dialog = document.getElementById("user_form")

dialog.addEventListener('submit', async (event)=>{
    event.preventDefault();
    const data = {};
    const inputs = event.target;

    for (const input of inputs) {
        if (input.value && input.value !== '') {
            data[input.name] = input.value
        }
    }

    
    try {
        const response = await fetch("http://localhost:8500/api/user", {
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

        localStorage.setItem('token', dataResponse.token)
        localStorage.setItem('user', dataResponse.user)

        window.location.href = '../cargar-user/user.html'
    } catch (error) {
        console.log(error)
    }
})























// import { User } from "../../src/models/user";


// export const saveUser = async (userLike) => {

//     const user = new User(userLike);
//     if (!user.firstName || !user.e)
//         throw 'First & last name are required';

//     const userToSave = userModelToLocalhost(user);
//     let userUpdated;
//     //TODO: falta mapper
//     if (user.id) {
//         userUpdated = await updateUser(userToSave);
//     } else {
//         userUpdated = await createUser(userToSave);
//     }

//     return localhostUserToModel(userUpdated)
// }