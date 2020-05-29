const express = require("express");
const OwnerController = require("./controllers/OwnerController");
const EnterpriseController = require("./controllers/EnterprisesController");
const WorkersController = require("./controllers/WorkersControllers.");
const routes = express.Router();

routes.post("/owner", OwnerController.store);
routes.get("/owner", OwnerController.index);
routes.delete("/owner/:id", OwnerController.delete);
routes.put("/owner/:id", OwnerController.update);

routes.post("/enterprise", EnterpriseController.store);
routes.get("/enterprise", EnterpriseController.index);
routes.delete("/enterprise/:id", EnterpriseController.delete);
routes.put("/enterprise/:id", EnterpriseController.update);

routes.post("/worker", WorkersController.store);
routes.get("/worker", WorkersController.index);
routes.delete("/worker/:id", WorkersController.delete);
routes.put("/worker/:id", WorkersController.update);

module.exports = routes;
