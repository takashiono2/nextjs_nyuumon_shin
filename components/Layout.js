import Head from "next/head";
import styles from "./layout.module.css";
import utilstyles from "../styles/utils.module.css";
import Link from 'next/link';

const name = "Shin Code";
export const siteTitle = "Next.js blog";

const Layout = ({children,home}) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img src="/images/profile.png" alt="profile"
              className={`${utilstyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilstyles.heading2Xl}>{ name }</h1>
          </>
        ):(
          <>
            <img src="/images/profile.png" alt="profile"
              className={`${utilstyles.borderCircle}`}
            />
            <h1 className={utilstyles.heading2Xl}>{ name }</h1>
        </>
        )}

      </header>
      <main>{children}</main>
      { !home &&
        <Link href="/">
          <div> ← ホームへ戻る </div>
        </Link>
      }
    </div>
  )
}

export default Layout