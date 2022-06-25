import React, { useState, useEffect } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs"; // to read directories and files we use fs in node js

export default function Blog(serverProps) {
  const [blogs, setBlogs] = useState(serverProps.allblogs);

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h2> Blogs</h2>
          {/* If you give wrong directory name in getStaticProps the following code will run  */}
          {serverProps.error && <h1> {serverProps.error}</h1>}
          {blogs &&
            blogs.map((element) => {
              return (
                <div className={styles.blogItem} key={element.title}>
                  <Link href={`/blog/${element.slug}`}>
                    <h3>{element.title}</h3>
                    {/* <h3>{element[0].error && element[0].error}</h3> */}
                  </Link>
                  <p>{element.description.substr(0, 130)}....</p>
                </div>
              );
            })}
        </main>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  let allblogs = [];
  try {
    const data = await fs.promises.readdir("allblogs", "utf8");
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const fileContent = await fs.promises.readFile(
        "allblogs/" + item,
        "utf8"
      );
      allblogs.push(JSON.parse(fileContent));
    }
    return {
      props: { allblogs }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      props: { error: "Internal Server Error" }, // will be passed to the page component as props
    };
  }
}

// While generating static website we need to add follwing command in script of package.json file.
// "export": "next build && next export"

// While our website on running the command yarn export would generate a static copy of itself and store it in an out directory,
// the files there, on opening, would strictly want you to put the .html extension while browsing every time. To avoid that,
// we will put this code in the exports object of the next.config.js file.
// trailingSlash: true
