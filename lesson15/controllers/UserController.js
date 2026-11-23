const axios = require('axios');

class UserController {

    async login(userName, password) {
        return await axios.post('https://demoqa.com/Account/v1/Login', 
        {
            userName: userName,
            password: password,
        });
    }
}

module.exports = new UserController();
