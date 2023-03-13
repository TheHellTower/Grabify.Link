const MACLookupE = (req, res) => {
  fetch(`https://api.maclookup.app/v2/macs/${req.query.mac}`)
    .then((r) => r.json())
    .then((json) => {
      if (json["success"] === true) {
        return res.status(200).send(json);
      } else if (json["success"] === false) {
        return res.status(404).send("");
      } else {
        return res.status(404).send("Unknown status.");
      }
    })
    .catch((e) => {
      return res.status(404).send("");
    });
};

export default MACLookupE;
