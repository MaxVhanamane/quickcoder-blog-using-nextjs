import * as fs from "fs"; // to read directories and files we use fs in node js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    const contactInfo = JSON.stringify(req.body); // the data sent by user is received in req.body
    // as I am adding the contactInfo in Json file so I have to convert it into string else it will throw an error.

    const files = await fs.promises.readdir("contactdata");
    let last_item = files.length;
    console.log(last_item);
    const file = await fs.promises.writeFile(
      `contactdata/${last_item + 1}.json`,
      contactInfo
    );
    res.status(405).send({ name: "max" });
    return;
  } else {
    res.status(405).send({ message: "get" });
  }
}
