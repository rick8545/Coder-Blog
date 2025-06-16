import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="keywords" content="nextjs,huntingcoder blog" />
        <meta name="description" content="A blog for hunting coders" />
      </Head>
      <main className={styles.main}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Hunting Coder</h1>
          <p className={styles.description}>A blog for hunting coders</p>
        </div>
        <div className="blog">
          <h2>Popular Blogs</h2>
          <div className={styles.blogItem}>
            <h3>Title of the Blog</h3>
            <p>Description of the blog</p>
          </div>
           <div className={styles.blogItem}>
            <h3>Title of the Blog</h3>
            <p>Description of the blog</p>
          </div>
           <div className={styles.blogItem}>
            <h3>Title of the Blog</h3>
            <p>Description of the blog</p>
          </div>
        </div>
      </main>
    </>
  );
}
