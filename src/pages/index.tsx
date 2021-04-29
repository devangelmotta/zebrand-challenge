import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Welcome from './welcome'

export default function Home() {
  return (
    <>
    <Head>
        <title>Welcome</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Welcome/>
    </>
  )
}
