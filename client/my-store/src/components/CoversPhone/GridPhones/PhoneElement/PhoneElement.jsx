import React from 'react'
import coolIcon from '../../../../assets/icons/fakedata/coolicon.svg'
import cardIcon from '../../../../assets/icons/fakedata/shopping-cart_118662 1.svg'
import styles from './PhoneElement.module.scss'
const PhoneElement = ({ params }) => {
	const { title, type, typeProduct, price, withoutDiscount, image, discount } =
		params
	console.log(title, type, typeProduct, price, withoutDiscount, image, discount)
	return (
		<div className={styles.PhoneElement}>
			<div className={styles.discount}>- {discount} %</div>
			<img src={image} alt='' />
			<button className={styles.btnLike}>
				<img src={coolIcon} alt='' />
			</button>
			<div className={styles.PhoneElementTitle}>{title}</div>
			<div className={styles.PhoneElementType}>{type}</div>
			<div className={styles.PhoneElementTypeProduct}>{typeProduct}</div>
			<div>
				<span>{price} ₽ </span>
				<span> {withoutDiscount} ₽</span>
			</div>
			<div className={styles.PhoneElementConstructorWrapper}>
				<div className={styles.PhoneElementConstructor}>
					<button>
						<span>В конструктор</span>
					</button>
				</div>
				<div className={styles.PhoneElementCardIcon}>
					<button>
						<img src={cardIcon} alt='' srcset='' />
					</button>
				</div>
			</div>
		</div>
	)
}

export default PhoneElement
