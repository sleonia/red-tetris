import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import io from 'socket.io-client'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    useEffect(() => {
        const client = io('http://localhost:4000')

        client.on('now', (data) => {
            console.log('🚀 ~ file: index.tsx ~ line 17 ~ client.on ~ data', data)
        })
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="red-tetris.ico" />
            </Head>
            some basic information
        </div>
    )
}

export default Home