import React from 'react'
import { useForm } from 'react-hook-form'
const Subscribe = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = data => console.log(data)
	console.log(errors)
	return (
		<div>
			<p>
				Подписывайтесь на рассылку с акциями и скидками до 90% на чехлы и
				аксессуары
			</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input type='email' placeholder='Введите E-mail' {...register} />
				<input type='submit' />
			</form>
		</div>
	)
}

export default Subscribe
