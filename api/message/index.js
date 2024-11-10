const fetch = require('node-fetch');

module.exports = async function (context, req) {
    try {
        const response = await fetch('https://pokerleagueproj.azurewebsites.net/api/users?code=c_yUI2yu9enkqu-5SaiSUKZlZWTH-nVlPGpz1kye-UkBAzFuPp3f_g%3D%3D');
        const data = await response.json();

        context.res = {
            status: 200,
            body: data
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: { error: 'Failed to fetch data from API' }
        };
    }
};
