const axios = require("axios");

exports.homeRoutes = (req, res) => {
  axios
    .get("http://localhost:3000/api/users")
    .thne((response) => {
      console.log(response);
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.sebd(err);
    });
};
exports.add_user = (req, res) => {
  res.render("add_user");
};
exports.update_user = (req, res) => {
  axios
    .get("http://localhost:3000/api/users", { params: { id: req.query.id } })
    .then((dataUser) => {
      res.render("update_user", { user: dataUser.data });
    })
    .catch((err) => {
      res.sebd(err);
    });
};
