const axios = require('axios');
    
const data = {
    name: 'Hardik Savani',
    job: 'Blog Writer'
};
    
axios.put('https://reqres.in/api/users/2', data)
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        console.error(err);
    });