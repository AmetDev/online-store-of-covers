import React from 'react'
import card from '../../../assets/icons/header/card.svg'
import did from '../../../assets/icons/header/do.svg'
import iSharlotka from '../../../assets/icons/header/iSharlotka.png'
import like from '../../../assets/icons/header/like.svg'
import profile from '../../../assets/icons/header/profile.svg'
import search from '../../../assets/icons/header/search.svg'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header_wrapper}>
			<div className={styles.shar_icon}>
				<img src={iSharlotka} className={styles.iSharlotka} alt='icon' />
				<div className={styles.vector}></div>
				<img src={did} className={styles.did} alt='делаем' />
			</div>

			<div class={styles.search}>
				<input
					placeholder='поиск по товарам...'
					className={styles.input}
					type='text'
					name='search'
					id='search'
				/>
				<img
					className={styles.imgInput}
					src={search}
					style={{ width: '16px' }}
					alt='search'
				/>
			</div>

			<div>
				<button>
					<span>Узнать статус заказа</span>
				</button>
				<button>
					<span>О нас</span>
				</button>
			</div>
			<div className={styles.imgGroup}>
				<img src={card} alt='card' />
				<img src={like} alt='like' />
			</div>
			<div className={styles.profileBlock}>
				<img src={profile} alt='like' />
				<button>
					<span>Войти</span>
				</button>
			</div>
		</header>
	)
}

export default Header
