import React, { useRef, useState } from 'react'
import chexol from '../../assets/icons/intro/chexol.png'
import chexol1 from '../../assets/icons/intro/chexol1.png'
import constructor from '../../assets/icons/intro/constructor.png'
import fly1 from '../../assets/icons/intro/fly1.png'

import styles from './Intro.module.scss'
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
				key={array[currentElement].element.title}
			>
				<div className={styles.BlockUnderTitle}>Спецпредложение</div>
				<div>{array[currentElement].element.title}</div>
				<span>{array[currentElement].element.price} Р</span>
				<img
					className={styles.BlockImg}
					src={array[currentElement].element.linkImage}
					alt={array[currentElement].element.title}
				/>
			</div>
		)
	}
	return (
		<div className={styles.intro_wrapper}>
			<div className={styles.intro_wrapper_paraph}>
				<span>Создайте&nbsp;</span> индивидуальный
				<span>дизайн&nbsp;</span> для своего
				<span>&nbsp;чехла</span>
			</div>
			<div className={styles.block_fly}>
				<Block currentElement={currentElement} />
				<div>
					<div>
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
				</div>
			</div>
		</div>
	)
}

export default Intro
