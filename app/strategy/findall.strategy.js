module.exports = (app, controller, route) => {
    app.get(route, controller["findAll"]);
};
