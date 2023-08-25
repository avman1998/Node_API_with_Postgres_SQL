const { pool } = require("../db");
const handleGetUsers = function (req, res) {
  pool.query("SELECT * from users", (error, result) => {
    if (error) throw error;

    res.status(200).json(result.rows);
  });
};
const handleGetUsersById = function (req, res) {
  const id = Number(req.params.id);
  pool.query("SELECT * from users where id=$1", [id], (error, result) => {
    if (error) throw error;

    res.status(200).json(result.rows);
  });
};
const handlePostUser = function (req, res) {
  const { name, email } = req.body;
  pool.query(
    "INSERT INTO USERS(name,email) VALUES($1,$2) RETURNING id",
    [name, email],
    (error, result) => {
      // console.log("result.rows ", result.rows);
      if (error) throw error;

      return res.status(201).json({
        msg: "SUCCESS",
        id: result.rows[0].id,
      });
    }
  );
};
const handleUpdateUserById = function (req, res) {
  const id = Number(req.params.id);
  const { name, email } = req.body;
  pool.query(
    "UPDATE USERS SET name=$1, email=$2 where id=$3",
    [name, email, id],
    (error, results) => {
      if (error) throw error;

      return res.status(200).json({
        msg: "SUCCESS",
        key: id,
      });
    }
  );
};
const handleDeleteUserById = function (req, res) {
  const id = req.params.id;
  pool.query("DELETE FROM USERS WHERE id=$1", [id], (error, data) => {
    if (error) throw error;

    return res.status(200).json({
      msg: "SUCCESS",
    });
  });
};
module.exports = {
  handleGetUsers,
  handleGetUsersById,
  handlePostUser,
  handleUpdateUserById,
  handleDeleteUserById,
};
