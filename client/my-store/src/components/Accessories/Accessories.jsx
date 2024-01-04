import React from 'react'
import AccessoriesInner from '../Accessories/AccessoriesButtons/index.jsx'
import styles from './Accessories.module.scss'
import AccessoriesListBtns from './AccessoriesListBtns/index.jsx'
const Accessories = () => {
	return (
		<div className={styles.rootAccessories}>
			<div>
				<span>Аксессуары</span>
				<AccessoriesListBtns />
			</div>
			<AccessoriesInner />
		</div>
	)
}

export default Accessories
