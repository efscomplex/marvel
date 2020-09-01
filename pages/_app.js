import Template from 'components/core/Template'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/source/animate.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <Template><Component {...pageProps} /></Template>
}

export default MyApp
