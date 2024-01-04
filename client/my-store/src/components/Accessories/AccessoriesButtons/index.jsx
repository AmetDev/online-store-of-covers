import React from 'react'
import { dataAccessories } from '../AccessoriesData/index.js'
import styles from './Accessories.model.scss'
import AccessoriesButtonElement from './AccessoriesButtonElement/index'
const GridPhones = () => {
	return (
		<div className={styles.PhonesRootGrid}>
			<div className={styles.PhonesWrapperGrid}>
				{dataAccessories.map(phone => {
					return <AccessoriesButtonElement params={phone} />
				})}
			</div>
			<a href='#' className={styles.btnCatalog}>
				Перейти в каталог
			</a>
		</div>
	)
}

export default GridPhones
