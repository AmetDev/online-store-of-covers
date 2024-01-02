import React, { useRef } from 'react'
import chexol from '../../assets/icons/intro/chexol.png'
import chexol1 from '../../assets/icons/intro/chexol1.png'
import constructor from '../../assets/icons/intro/constructorpng.png'
import fly1 from '../../assets/icons/intro/fly1.png'

import styles from './Intro.module.scss'
const Intro = () => {
	const ref = useRef([])
	const arraycards = [
		{
			element: {
				title: 'Доставка бесплатно при заказе',
				linkImage: fly1,
				price: 650,
				display: true,
			},
		},
		{
			element: {
				title: 'Чехол для наушников',
				linkImage: chexol1,
				price: 0,
				display: false,
			},
		},
		{
			element: {
				title: 'Выбери свой чехол',
				linkImage: chexol,
				price: 950,
				display: false,
			},
		},
		{
			element: {
				title: 'Создай свой чехол в конструкторе',
				linkImage: constructor,
				price: 350,
				display: false,
			},
		},
	]
	return (
		<div className={styles.intro_wrapper}>
			<div className={styles.intro_wrapper_paraph}>
				<span>Создайте&nbsp;</span> индивидуальный
				<span>дизайн&nbsp;</span> для своего
				<span>&nbsp;чехла</span>
			</div>
			<div className={styles.block_fly}>
				{arraycards.map(el => {
					if (el.element.display === true) {
						return (
							<div key={el.element.title}>
								<img src={el.element.linkImage} alt={el.element.title} />
							</div>
						)
					}
				})}
				{arraycards.map((el, index) => {
					return (
						<button
							ref={el => (ref.current[index] = el)}
							onClick={() => {
								console.log(el.element.title)
								ref.current[index].style.backgroundColor = '#011a6c'
							}}
							className={styles.btnblue}
							key={el.element.title}
						></button>
					)
				})}
				{/* <img src={fly1} alt='' srcset='' /> */}
				<div>
					<div></div>
				</div>
			</div>
		</div>
	)
}

export default Intro
