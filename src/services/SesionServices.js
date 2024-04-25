import HttpService from "./HttpService"

const SesionServices = {
    async Login(user, password){
        return await HttpService.post("/Login.php",{
            user: user,
            password: password
        })
    }
}

export default SesionServices 