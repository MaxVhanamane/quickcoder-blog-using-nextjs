import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
export default function Blog() {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h2> Blogs</h2>
          <Link href="/blog/how to learn React">
            <h3>How to learn React?</h3>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aut
            ad non hic animi, aliquid minima est corporis commodi doloribus
            ..................
          </p>
          <h3>How to learn React?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aut
            ad non hic animi, aliquid minima est corporis commodi doloribus
            nostrum, minus et nobis? Accusantium asperiores adipisci labore
            nobis nisi aspernatur natus aperiam consequuntur dignissimos?
          </p>
          <h3>How to learn React?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aut
            ad non hic animi, aliquid minima est corporis commodi doloribus
            nostrum, minus et nobis? Accusantium asperiores adipisci labore
            nobis nisi aspernatur natus aperiam consequuntur dignissimos?
          </p>
        </main>
      </div>
    </>
  );
}
