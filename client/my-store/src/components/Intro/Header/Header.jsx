import React from 'react'
import card from '../../../assets/icons/header/card.svg'
import did from '../../../assets/icons/header/do.svg'
import iSharlotka from '../../../assets/icons/header/iSharlotka.png'
import like from '../../../assets/icons/header/like.svg'
import profile from '../../../assets/icons/header/profile.svg'

import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header_wrapper}>
			<img src={iSharlotka} className={styles.iSharlotka} alt='icon' />
			<div className={styles.vector}></div>
			<img src={did} className={styles.did} alt='делаем' />
			<div class='input-with-icon'>
				<input
					placeholder='поиск по товарам...'
					className={styles.input}
					type='text'
					name='search'
					id='search'
				/>
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M14.1746 14.9658L9.31685 10.1072C7.15587 11.6436 4.17812 11.2678 2.46659 9.24274C0.755066 7.21768 0.880738 4.21895 2.7557 2.3442C4.63017 0.46863 7.6292 0.342414 9.65463 2.05385C11.6801 3.76529 12.0561 6.74333 10.5196 8.9045L15.3774 13.7631L14.1755 14.965L14.1746 14.9658ZM6.3614 2.54989C4.74955 2.54953 3.35894 3.68097 3.03151 5.25922C2.70407 6.83746 3.52981 8.42873 5.00878 9.0696C6.48775 9.71047 8.21347 9.2248 9.14111 7.90664C10.0688 6.58848 9.94336 4.80012 8.84085 3.6243L9.3551 4.1343L8.7754 3.5563L8.7652 3.5461C8.12922 2.9062 7.26359 2.54746 6.3614 2.54989Z'
						fill='#8C98B7'
					/>
				</svg>
			</div>

			<button>
				<span>Узнать статус заказа</span>
			</button>
			<button>О нас</button>
			<img src={card} alt='card' />
			<img src={like} alt='like' />
			<img src={profile} alt='like' />
			<button>
				<span>Войти</span>
			</button>
		</header>
	)
}

export default Header
