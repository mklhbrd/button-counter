import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button, Grid, Stack } from '@mui/material';
import { useAttPassIncomplete, useDefPassComplete, useDefPassIncomplete, useattPassComplete } from '../components/pass';
import { useShotOffTarget, useShotOnTarget } from '../components/shots';


export default function Home() {
  const {attPassCompButtonCount, attPassComp} = useattPassComplete()
  const {attPassIncompButtonCount, attPassIncomp} = useAttPassIncomplete()
  const {defPassCompButtonCount, defPassComp} = useDefPassComplete()
  const {defPassIncompButtonCount, defPassIncomp} = useDefPassIncomplete()
  const {ButtonCount5, buttonClicked5} = useShotOnTarget()
  const {ButtonCount6, buttonClicked6} = useShotOffTarget()



  return (
    <div className={styles.container}>
      <Head>
        <title>Button Counter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className={styles.title}>socca stats </h1>


        <p>Att - Pass</p>
        <Stack direction={'row'}spacing={2} >
        <Button color='success' variant='outlined' onClick={attPassComp}>Att Complete {attPassCompButtonCount}</Button>
        <Button color='error' variant='outlined' onClick={attPassIncomp}>Att Incomplete {attPassIncompButtonCount}</Button>
        </Stack>
        <p>Def - Pass</p>
        <Stack direction={'row'}spacing={2} >
        <Button color='success' variant='outlined' onClick={defPassComp}>Def Complete {defPassCompButtonCount}</Button>
        <Button color='error' variant='outlined' onClick={defPassIncomp}>Def Incomplete {defPassIncompButtonCount}</Button>
        </Stack>
        <p>Shots</p>
        <Stack direction={'row'} spacing={2}>
        <Button color='success' variant='outlined' onClick={buttonClicked5}>Shot On {ButtonCount5}</Button>
        <Button color='error' variant='outlined' onClick={buttonClicked6}>Shot Off {ButtonCount6}</Button>
        </Stack>
      

      
      </div>
    </div>
  )
}

