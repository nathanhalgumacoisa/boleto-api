'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import boleto from '@/data/boletoAPI';

export default function Home() {
  const [dataApi, setDataApi] = useState('');
 
  useEffect(() =>{
    const boletoFetch = async () =>{
      try{

      }catch(erro){
        const data = await boleto
        setDataApi(data);
        console.log(data)
      }
    }
    boletoFetch()
  })
  return (
   <div id={styles.container}>
    <main>
        <h1>Boletos</h1>
        <section id={styles.inputField}>
          
        </section>
      </main> 
   </div>
  )
}
