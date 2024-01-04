import React from 'react'
import coolIcon from '../../../../assets/icons/fakedata/coolicon.svg'
import cardIcon from '../../../../assets/icons/fakedata/shopping-cart_118662 1.svg'
import styles from './AccessorieButtonElement.module.scss'
const PhoneElement = ({ params }) => {
	const { title, type, typeProduct, price, withoutDiscount, image, discount } =
		params

	return (
		<div className={styles.PhoneElement}>
			<div className={styles.discount}>- {discount} %</div>
			<img className={styles.imgPhone} src={image} alt='' />
			<button
				onClick={() => {
					console.log('event')
				}}
				className={styles.btnLike}
			>
				<img src={coolIcon} alt='' />
			</button>
			<div className={styles.PhoneElementTitle}>{title}</div>
			<div className={styles.PhoneElementType}>{type}</div>
			<div className={styles.PhoneElementTypeProduct}>{typeProduct}</div>
			<div className={styles.PhoneElementBlockPrice}>
				<span>{price} ₽ </span>
				<span> {`${withoutDiscount}` + '₽'} </span>
			</div>
			<div className={styles.PhoneElementConstructorWrapper}>
				<div className={styles.PhoneElementConstructor}>
					<button
						onClick={() => {
							console.log('hello')
						}}
					>
						<span>В конструктор</span>
					</button>
				</div>
				<div className={styles.PhoneElementCardIcon}>
					<button
						onClick={() => {
							console.log('je1')
						}}
					>
						<img src={cardIcon} alt='' srcset='' />
					</button>
				</div>
			</div>
		</div>
	)
}

export default PhoneElement
