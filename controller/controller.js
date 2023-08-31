const pool = require("../utils/database");

const getAllUser = async (req, res) => {
  try {
    const response = await pool.execute("SELECT * FROM test");
    const item = response[0];

    return res.status(200).json({ msg: "Success", item });
  } catch (error) {
    console.log(error);
  }
};

const addUser = async (req, res) => {
  try {
    const { first_name, last_name, email, age } = req.body;

    const response = await pool.execute(
      `INSERT INTO test (first_name, last_name, email, age) VALUES ('${first_name}', '${last_name}', '${email}', ${age})`
    );

    return res.status(200).json({ msg: "Success", response });
  } catch (error) {
    console.log(error);
  }
};

const getSpesificUse = async (req, res) => {
  const { first_name } = req.query;
  try {
    const response = await pool.execute(
      `SELECT * FROM test WHERE first_name = '${first_name}'`
    );

    const item = response[0];

    if (item.length == 0) {
      return res.status(404).json({ msg: "user not found?" });
    }

    return res.status(200).json({ msg: "Success", item });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllUser, addUser, getSpesificUse };
