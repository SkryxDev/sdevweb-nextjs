import type { AppProps } from 'next/app'
import './App.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
