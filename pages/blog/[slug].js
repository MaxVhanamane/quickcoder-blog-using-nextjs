import React, { useState, useEffect } from "react";
import styles from "../../styles/BlogPost.module.css";
import * as fs from "fs"; // to read directories and files we use fs in node js

export default function Blogpost(serverProps) {
  const [blog, setBlog] = useState(serverProps.myBlog);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1> {blog && blog.title}</h1>
        <p>{blog && blog.description}</p>
      </main>
    </div>
  );
}

// Static site generation

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-python" } },
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-reactjs" } },
    ],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`allblogs/${slug}.json`, "utf-8");
  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}
