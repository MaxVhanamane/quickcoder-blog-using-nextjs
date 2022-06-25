import React, { useState, useEffect } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
export default function Blog(serverProps) {
  const [blogs, setBlogs] = useState(serverProps.data);
  // Removing useEffect and using server side rendering.

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/allblogs")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBlogs(data);
  //     });
  // }, []);

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h2> Blogs</h2>

          {blogs.map((element) => {
            return (
              <div className={styles.blogItem} key={element.title}>
                <Link href={`/blog/${element.slug}`}>
                  <h3>{element.title}</h3>
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

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch("http://localhost:3000/api/allblogs");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
