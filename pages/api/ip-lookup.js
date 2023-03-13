const IPLookupE = (req, res) => {
  fetch(
    `http://ip-api.com/json/${req.query.ip}?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query`,
    {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
        "upgrade-insecure-requests": "1",
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "omit",
    }
  )
    .then((r) => r.json())
    .then((json) => {
      if (json["status"] === "success") {
        return res.status(200).send(json);
      } else if (json["status"] === "fail") {
        return res.status(404).send("");
      } else {
        return res.status(404).send("Unknown status.");
      }
    })
    .catch((e) => {
      return res.status(404).send("");
    });
};

export default IPLookupE;
