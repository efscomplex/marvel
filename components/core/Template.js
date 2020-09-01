import Head from 'next/head'
import App from 'components/core'

const head = (
   <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
   </Head>
)

export default function Template(props) {
  return (
    <App>
       {head}
      <App.Header/>
      <App.Main {...props}/>
      <App.Footer/>
    </App>
  )
}
