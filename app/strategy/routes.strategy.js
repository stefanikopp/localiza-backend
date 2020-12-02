exports.create = (app, controller, route) => {
    app.post(route, controller["create"]);
};

exports.findall = (app, controller, route) => {
    app.get(route, controller["findAll"]);
};

exports.findone = (app, controller, route) => {
    app.get(route, controller["findOne"]);
};

exports.findname = (app, controller, route) => {
    app.get(route, controller["findName"]);
};

exports.findstatus = (app, controller, route) => {
    app.get(route, controller["findStatus"]);
};