const express = require("express");
const router = express.Router();
const Spotify = require("node-spotify-api");

const spotify = new Spotify({
  id: process.env.MY_CLIENT_KEY,
  secret: process.env.MY_CLIENT_SECRET
});
router.get("/:query", (req, res) => {
  spotify
    .search({ type: "track", query: `${req.params.query}`, limit: "50" })
    .then(function(response) {
      console.log(response);
      res.json({
        data: response
      });
    })
    .catch(function(err) {
      console.log(err);
    });
});
// router.get("/:queryPlaylist", (req, res) => {
//   spotify
//     .search({ type: "playlists", queryPlaylist: `${req.params.queryPlaylist}` })
//     .then(function(response) {
//       console.log(response);
//       res.json({
//         data: response
//       });
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// });
router.post("/", (req, res) => {
  return res.json({
    body: req.body
  });
});
router.put("/", (req, res) => {
  return res.json({ data: "Received a PUT HTTP method" });
});
router.delete("/", (req, res) => {
  return res.json({ data: "Received a DELETE HTTP method" });
});
module.exports = router;
