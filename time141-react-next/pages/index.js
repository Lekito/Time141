import Head from 'next/head'
import ListServico from '../componets/ListServico'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>App time 141</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>
        <ListServico />
      </div>
      
    </div>
  )
}
