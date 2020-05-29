const knex = require("../database/index");

module.exports = {
  async store(req, res) {
    const { name } = req.body;

    knex("owners")
      .insert({ name })
      .then((user) => {
        console.log("Usuario cadastrado com sucesso");
        res.status(201).send();
      })
      .catch(() =>
        res
          .status(400)
          .json({ erro: "Não foi possivel cadastrar o dono no banco de dados" })
      );
  },

  async index(req, res) {
    knex("owners").then((data) => res.status(200).json(data));
  },

  async delete(req, res) {
    const { id } = req.params;

    knex("owners")
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

    knex("owners")
      .where({ id })
      .update({ name })
      .then(() => {
        console.log("Update realizado com sucesso");
        res.status(200).send();
      });
  },
};
