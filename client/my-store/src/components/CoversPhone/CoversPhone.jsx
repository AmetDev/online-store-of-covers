import React from 'react'
import styles from '../CoversPhone/CoversPhones.module.scss'
import GridPhones from './GridPhones/GridPhones'
import ListPhones from './ListPhones/ListPhones'
const CoversPhone = () => {
	return (
		<div className={styles.CoversPhone}>
			<ListPhones />
			<GridPhones />
		</div>
	)
}

export default CoversPhone
