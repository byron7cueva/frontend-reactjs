import { AppProps } from 'next/app'
import Layout from '@components/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  // Este componente es perfecto para utilizar Providers - Context englobando el componente
  // Para aplicar un Layout
  // Para pasar props adicionales
  // Al modificar este componente se debe tener cuidado ya que se puede bloquear
  // la data asi como tambien el renderizado del componente

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
