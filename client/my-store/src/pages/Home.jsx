import React from 'react'
import CoversPhone from '../components/CoversPhone/CoversPhone'
import Header from '../components/Intro/Header/Header'
import Intro from '../components/Intro/Intro'
import styles from './Home.module.scss'
const Home = () => {
	return (
		<div className={styles.home}>
			<Header />
			<Intro />
			<CoversPhone />
		</div>
	)
}

export default Home
