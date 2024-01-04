import React from 'react'
import styles from './GridPhones.module.scss'
import { data } from './PhoneElement/FakeDataPhone.js'
import PhoneElement from './PhoneElement/PhoneElement.jsx'
const GridPhones = () => {
	return (
		<div className={styles.PhonesRootGrid}>
			<span className={styles.btnCatalog}>Найдено 1375 вариантов</span>

			<div className={styles.PhonesWrapperGrid}>
				{data.map(phone => {
					return <PhoneElement params={phone} />
				})}
			</div>

			<a href='#' className={styles.btnCatalog}>
				Перейти в каталог
			</a>
		</div>
	)
}

export default GridPhones
