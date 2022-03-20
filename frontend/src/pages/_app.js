import App from "next/app"
import Head from "next/head"
import { createContext } from "react"
import { ThemeProvider } from "styled-components"
import Layout from "../components/layout"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import GlobalStyle from '../styles/Global'
import theme from "../styles/theme"
// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global, categories, socialmedias } = pageProps
  console.log(global, socialmedias)
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.favicon)}
        />
      </Head>
      <GlobalContext.Provider value={global}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  
  const [categoriesRes, globalRes, socialMediasRes] = await Promise.all([
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/global", { populate: "*" }),
    fetchAPI("/socialmedias", { populate: "*" }),
  ])
  
  // Pass the data to our page via props
  return { ...appProps, pageProps: { 
    global: {
      ...globalRes.data.attributes,
      logo: globalRes.data.attributes.logo.data.map(logo => logo.attributes)
    }, 
    categories: categoriesRes.data.map(cat => ({
      slug: cat.attributes.slug,
      name: cat.attributes.name,
    })),
    socialmedias: socialMediasRes.data.map(social => social.attributes)
    // .map(category => ({
    //   slug: category.attributes.slug,
    //   name: category.attributes.name,
    // })),
  } }
}

export default MyApp
