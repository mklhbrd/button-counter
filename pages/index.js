import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button } from '@mui/material';
import { attPassingComp, attPassingInomp, defPassingComp, defPassingIncomp } from '../components/passing';


export default function Home() {
  const {attPassCompButtonCount, attPassComp} = attPassingComp()
  const {attPassIncompButtonCount, attPassIncomp} = attPassingInomp()
  const {defPassCompButtonCount, defPassComp} = defPassingComp()
  const {defPassIncompButtonCount, defPassIncomp} = defPassingIncomp()



  return (
    <div className={styles.container}>
      <Head>
        <title>Button Counter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <h1 className={styles.title}>Button Counter</h1>
        <Button color='success' variant='contained' onClick={attPassComp}>Att Pass Complete {attPassCompButtonCount}</Button>
        <Button color='error' variant='contained' onClick={attPassIncomp}>Att Pass Incomplete {attPassIncompButtonCount}</Button>
        <Button color='success' variant='contained' onClick={defPassComp}>Def Pass Complete {defPassCompButtonCount}</Button>
        <Button color='error' variant='contained' onClick={defPassIncomp}>Def Pass Incomplete {defPassIncompButtonCount}</Button>
      </body>
    </div>
  )
}