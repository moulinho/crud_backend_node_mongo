var Userdb = require("../model/model");

// create and save user

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content can't empty" });
    return;
  }

  // new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  // save in DB
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "error creating operation" });
    });
};

// return user

exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "User not found " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error with User " + id });
      });
  } else {
    Userdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: err.message || "error to get user information" });
      });
  }
};

// update
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data is empty" });
  }

  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { userFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot Update user ${id}` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update" });
    });
};

// delete
exports.delete = (req, res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot delete user with id ${id}` });
      } else {
        res.send({ message: "User deleted successfully" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Can't deleted " + id });
    });
};
