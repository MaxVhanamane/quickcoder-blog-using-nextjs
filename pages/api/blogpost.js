// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs"; // to read directories and files we use fs in node js

export default function handler(req, res) {
  fs.readFile(`allblogs/${req.query.filename}.json`, "utf8", (err, content) => {
    if (err) {
      res.status(200).json({ error: "No such blog found" });
    } else {
      res.status(200).json(JSON.parse(content));
    }
  });
}
