import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

import utilStyle from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>
          私はフルスタックエンジニアです
        </p>
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>エンジニアブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg"
                className={ styles.thumbnailImage }
                alt=""
              />
            </Link>
            <Link legacyBehavior  href="/">
              <a className={utilStyle.boldText}>SSRとSSGの違いは何なのか？？</a>
            </Link>
            <br/>
            <small className={utilStyle.lightText}>
              Feb 23,2023
            </small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg"
                className={ styles.thumbnailImage }
                alt=""
              />
            </Link>
            <Link legacyBehavior  href="/">
              <a className={utilStyle.boldText}>SSRとSSGの違いは何なのか？？</a>
            </Link>
            <br/>
            <small className={utilStyle.lightText}>
              Feb 23,2023
            </small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg"
                className={ styles.thumbnailImage }
                alt=""
              />
            </Link>
            <Link legacyBehavior  href="/">
              <a className={utilStyle.boldText}>SSRとSSGの違いは何なのか？？</a>
            </Link>
            <br/>
            <small className={utilStyle.lightText}>
              Feb 23,2023
            </small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg"
                className={ styles.thumbnailImage }
                alt=""
              />
            </Link>
            <Link legacyBehavior  href="/">
              <a className={utilStyle.boldText}>SSRとSSGの違いは何なのか？？</a>
            </Link>
            <br/>
            <small className={utilStyle.lightText}>
              Feb 23,2023
            </small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
