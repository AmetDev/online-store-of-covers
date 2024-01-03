import React from 'react'
import facebook from '../../../assets/icons/intro/facebook.svg'
import instagram from '../../../assets/icons/intro/instagram.svg'
import mail from '../../../assets/icons/intro/mail.svg'
import vk from '../../../assets/icons/intro/vk.svg'
import styles from '../IntroLinks/IntroLink.module.scss'

const IntroLink = () => {
	const linksData = [
		{
			link: vk,
			linkHref: 'https://vk.com/justzero09',
		},
		{
			link: facebook,
			linkHref: 'https://vk.com/justzero09',
		},
		{
			link: instagram,
			linkHref: 'https://vk.com/justzero09',
		},
		{
			link: mail,
			linkHref: 'https://vk.com/justzero09',
		},
	]
	return (
		<div className={styles.IntroIconLinks}>
			{linksData.map(link => {
				return (
					<a target='_blank' href={link.linkHref}>
						<img src={link.link} alt='' srcset='' />
					</a>
				)
			})}
		</div>
	)
}

export default IntroLink
