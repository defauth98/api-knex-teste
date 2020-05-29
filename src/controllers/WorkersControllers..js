const knex = require("../database/index");

module.exports = {
  async store(req, res) {
    const { name, enterprises_id } = req.body;

    knex("workers")
      .insert({ name, enterprises_id })
      .then(() => {
        console.log("Trabalhador cadastrado com sucesso");
        res.status(201).send();
      })
      .catch((err) => res.status(400).send({ err }));
  },

  async index(req, res) {
    knex("workers").then((data) => res.status(200).json(data));
  },

  async delete(req, res) {
    const { id } = req.params;

    knex("workers")
      .where({ id })
      .del()
      .then(() => {
        console.log(`Usuario com id = ${id} for deletado`);
        return res.send();
      });
  },

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    knex("workers")
      .where({ id })
      .update({ name })
      .then(() => {
        console.log("Update realizado com sucesso");
        res.status(200).send();
      });
  },
};
