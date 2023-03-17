import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
<script defer data-domain="blog.starmorph.com" src="https://plausible.io/js/script.js" />
      <Component {...pageProps} />
    </>
  )
}
