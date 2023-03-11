import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import client from "../utils/apollo-client"
import { TEST_QUERY } from "./../utils/queries"
import { useEffect } from 'react';
export default function Home() {
  
  useEffect(()=>{
    async function doCall (){
      try{
        
        const {data,error} = await client.query({query:TEST_QUERY})
        console.log(data,"Data?")


      }catch(err){
        console.log(err)
      }
    }
    doCall();
  },[] )
  
  return (
    <>
      <Head>
        <title>Tracktor</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        Hello World
      </main>
    </>
  )
}