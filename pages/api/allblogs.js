// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs"; // to read directories and files we use fs in node js

export default async function handler(req, res) {
  try {
    const data = await fs.promises.readdir("allblogs", "utf8");
    let allblogs = [];
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const fileContent = await fs.promises.readFile(
        "allblogs/" + item,
        "utf8"
      );
      allblogs.push(JSON.parse(fileContent));
    }
    res.status(200).json(allblogs);
  } catch (error) {
    res.status(200).json({ error: "No such directory available" });
  }
}
