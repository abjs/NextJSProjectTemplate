import styles from '@css/Pages/Home.module.css';
import React, { Fragment } from 'react';
import { Layout } from '@components/Layout';
import H1 from '@styled/H1';
import { Button } from '@material-ui/core';
export default function Home() {
  return (
    <Layout className={styles.container}>
      <Fragment>
        <H1 title="Styled Components Working" color="blue" />
        <Button variant="contained" color="primary">
          Material Ui Working
        </Button>
      </Fragment>
    </Layout>
  )
}

