import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
export default function Blogpost() {
  const [blog, setBlog] = useState();
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    fetch(`http://localhost:3000/api/blogpost?filename=${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setBlog(data);
      });
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1> {blog && blog.title}</h1>
        <p>{blog && blog.description}</p>
      </main>
    </div>
  );
}
