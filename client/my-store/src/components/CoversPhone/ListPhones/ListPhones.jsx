import React from 'react'
import styles from './ListPhones.module.scss'
import { ListPhonesData } from './ListPhonesData'
const ListPhones = () => {
	return (
		<ul className={styles.btnWrapper}>
			{ListPhonesData.map(element => {
				return (
					<li>
						<button className={styles.btnPhone}>
							<span>{element}</span>
						</button>
					</li>
				)
			})}
		</ul>
	)
}

export default ListPhones
