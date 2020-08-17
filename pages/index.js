import Head from 'next/head'
import App from 'components/core'

const head = (
   <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
   </Head>
)

export default function Home() {
  return (
    <App>
       {head}
      <App.Header/>
      <App.Main/>
      <App.Footer/>
    </App>
  )
}
