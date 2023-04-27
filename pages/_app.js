import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <style>
            {`
              body {
                background-color: #252525; /* Ganti dengan kode warna yang Anda inginkan */
              }
            `}
      </style>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
