import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
export default function Blogpost(serverProps) {
  const [blog, setBlog] = useState(serverProps.data);
  // Removing useEffect and using server side rendering.
  // const router = useRouter();
  // const { slug } = router.query;
  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/blogpost?filename=${slug}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBlog(data);
  //     });
  // }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1> {blog && blog.title}</h1>
        <p>{blog && blog.description}</p>
      </main>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // To get query on the server side use context.query
  const { slug } = context.query;
  // Fetch data from external API
  const res = await fetch(
    `http://localhost:3000/api/blogpost?filename=${slug}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
