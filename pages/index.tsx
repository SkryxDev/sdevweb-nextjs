import Image from 'next/image'
import Head from 'next/head'
import Cards from './components/cards';
import Navbar from './components/navbar'
import Aboutme from './components/aboutme'
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <>
    <Head>
      <title>SkryxDev</title>
      <link rel="icon" href="/logo.gif" type="image/gif"/>
    </Head>
      <div className="App">
      <Navbar />
        <header className="App-header">
          <Image src="/logo.gif" width="256" height="256" alt="logo" className="App-logo"/>
          <h1>SkryxDev</h1><p className="App-link">Made using NextJS and TypeScript</p>
        </header>
        <Aboutme/>
        <Cards />
      </div>
    </>
  )
}
