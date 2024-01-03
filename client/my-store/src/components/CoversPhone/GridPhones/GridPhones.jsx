import React from 'react'
import styles from './GridPhones.module.scss'
import { data } from './PhoneElement/FakeDataPhone.js'
import PhoneElement from './PhoneElement/PhoneElement.jsx'
const GridPhones = () => {
	return (
		<div className={styles.PhonesWrapperGrid}>
			{data.map(phone => {
				return <PhoneElement params={phone} />
			})}
		</div>
	)
}

export default GridPhones
