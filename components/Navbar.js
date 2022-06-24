import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Navbar() {
  return (
    <nav>
      <ul className={styles.nav_item}>
        <Link href="/">
          <a>
            <li>Home</li>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <li>About</li>
          </a>
        </Link>
        <Link href="/blog">
          <a>
            <li>Blog</li>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <li>Contact</li>
          </a>
        </Link>
      </ul>
    </nav>
  );
}
