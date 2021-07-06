import styles from '@css/Pages/Home.module.css';
import React from 'react';
import { Layout } from '@components/Layout';
import H1 from '@styled/H1';
export default function Home() {
  return (
    <Layout className={styles.container}>

      <H1 title="Hello World" color="yellow" />

    </Layout>
  )
}

