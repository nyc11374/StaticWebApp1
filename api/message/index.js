module.exports = async function (context, req) {
    console.log('JavaScript HTTP trigger function processed a request.');
    console.log('Request headers:', req.headers);
    console.log('Request body:', req.body);
    //display the json from the api call

    context.res.json({
        text: "Hello from the API"
    });
};