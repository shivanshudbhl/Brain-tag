const router = require("express").Router();
const cfmodels = require("../constants");
const authenticate = require("../authenticate");
const User = require("../models/user");
const  clarifaiKey  = "9dfe19c4560b4947abc3016260261974";
const clarifai = new Clarifai.App({
  apiKey: clarifaiKey,
});

const PAT = "7b8219dde56543c0b9e71a20d7a4ee89"
router.get("/:id", authenticate.verifyUser, async (req, res) => {
  const { id } = req.params;
  const { img } = req.query;

  const user = await User.findById(req.user._id);

  const data = await clarifai.models.predict(cfmodels[id], img);
  const { concepts } = data.outputs[0]?.data;

  user.imageModels += 1;
  if (user.images.findIndex((i) => i === img) === -1) user.images.push(img);
  await user.save();
  res.json(concepts);
});

module.exports = router;
