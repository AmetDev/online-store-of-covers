import React from 'react'
import Header from '../components/Intro/Header/Header'
import Intro from '../components/Intro/Intro'
import styles from './Home.module.scss'
const Home = () => {
	return (
		<div className={styles.home}>
			<Header />
			<Intro />
		</div>
	)
}

export default Home
