import React from 'react'
import { dataBtn } from '../AccessoriesData/index.js'
import styles from './AccessoriesListBtns.module.scss'
const ListPhones = () => {
	return (
		<ul className={styles.btnWrapper}>
			{dataBtn.map(element => {
				return (
					<li>
						<button className={styles.btnPhone}>
							<span>{element.item}</span>
						</button>
					</li>
				)
			})}
		</ul>
	)
}

export default ListPhones
