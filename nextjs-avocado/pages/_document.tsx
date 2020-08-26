import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  /* static async getInitialProps(ctx) {
    // Aqui se puede configurar algunas cosas de servidor
    // Los parametros que se cambien aqui va aplicar para todas las páginas
    // Por lo cual hay que tener cuidado en saber cual es el contexto de los
    // cambios que se necesite
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }*/

  render() {
    return (
      <Html>
        <Head>
          {/* favicon */}
          {/* webfonts */}
          {/* stylesheet */}
          {/* scripts/js */}
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
