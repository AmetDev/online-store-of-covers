import React, { useEffect, useRef, useState } from 'react'
import chexol from '../../assets/icons/intro/chexol.png'
import chexol1 from '../../assets/icons/intro/chexol1.png'
import constructor from '../../assets/icons/intro/constructor.png'
import fly1 from '../../assets/icons/intro/fly1.png'

import polygons from '../../assets/icons/intro/polygons.svg'
import styles from './Intro.module.scss'
import IntroLink from './IntroLinks/IntroLink'
const Intro = () => {
	const [currentElement, setCurrentElement] = useState(0)
	const arraycards = [
		{
			element: {
				title: 'Доставка бесплатно при заказе',
				linkImage: fly1,
				price: 650,
			},
		},
		{
			element: {
				title: 'Чехол для наушников',
				linkImage: chexol1,
				price: 100,
			},
		},
		{
			element: {
				title: 'Выбери свой чехол',
				linkImage: chexol,
				price: 950,
			},
		},
		{
			element: {
				title: 'Создай свой чехол в конструкторе',
				linkImage: constructor,
				price: 350,
			},
		},
	]
	const ref = useRef([])
	const [array, setArray] = useState(arraycards)

	const Block = ({ currentElement }) => {
		return (
			<div
				className={styles.wrapperBlock}
				style={{
					background: `url(${array[currentElement].element.linkImage})`,
					transition: 'margin-right 2s ease-in-out',
					width: '100%',
					height: '100%',
				}}
				key={array[currentElement].element.title}
			>
				<div className={styles.BlockUnderTitle}>Спецпредложение</div>
				<p className={styles.BlockTitle}>
					{array[currentElement].element.title}
				</p>
				<div className={styles.BlockWrapp}>
					От&nbsp;{' '}
					<div
						style={{
							color: '#424242',
							fontSize: '42px',
							fontStyle: 'normal',
							fontWeight: 250,
							lineHeight: '92.8%' /* 35.264px */,
							textTransform: 'uppercase',
						}}
					>
						{array[currentElement].element.price.toString()}₽
					</div>
				</div>
			</div>
		)
	}
	useEffect(() => {
		let count = 0
		function loopCounter() {
			setInterval(() => {
				console.log(count)
				setCurrentElement(count)
				ref.current.map(el => {
					el.style.backgroundColor = '#dfe3f0	'
				})
				ref.current[count].style.backgroundColor = '#011a6c'
				count = (count + 1) % 4
			}, 5000)
		}

		loopCounter()
	}, [])
	return (
		<div className={styles.intro_wrapper}>
			<div className={styles.wrapperFirst}>
				<div className={styles.intro_wrapper_paraph}>
					<span>Создайте&nbsp;</span> индивидуальный
					<span>дизайн&nbsp;</span> для своего
					<span>&nbsp;чехла</span>
				</div>
				<div className={styles.IntroWrappersParagraph}>
					<p>Или выберите готовый шаблон</p>
					<img src={polygons} alt='' />
				</div>
			</div>

			<div className={styles.wrapperSecond}>
				<div className={styles.block_fly}>
					<Block currentElement={currentElement} />
					<div className={styles.btns}>
						{array.map((el, index) => {
							return (
								<button
									ref={el => (ref.current[index] = el)}
									onClick={() => {
										ref.current.map(el => {
											el.style.backgroundColor = '#dfe3f0	'
										})
										ref.current[index].style.backgroundColor = '#011a6c'
										setCurrentElement(index)
									}}
									className={styles.btnblue}
									key={el.element.title}
								></button>
							)
						})}
					</div>
					<div></div>
				</div>
				<div className={styles.IntroLinkWrapperLast}>
					<IntroLink />
				</div>
			</div>
		</div>
	)
}

export default Intro
