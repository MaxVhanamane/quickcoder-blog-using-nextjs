import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
export default function Blogpost() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1> {slug}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          similique iusto aliquid! Assumenda dolore soluta aliquid beatae nihil
          suscipit nam facere temporibus consequuntur blanditiis, sit
          perferendis impedit libero ratione. Fugit molestiae vitae corporis
          alias accusamus sapiente voluptatum impedit quibusdam omnis laboriosam
          eius illum culpa, quia natus quo officiis? Nesciunt, iste.
        </p>
      </main>
    </div>
  );
}
