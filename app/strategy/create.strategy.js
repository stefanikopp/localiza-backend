module.exports = (app, controller, route) => {
    app.post(route, controller["create"]);
};