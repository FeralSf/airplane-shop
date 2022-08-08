import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/button'
import { ContentWrapper } from '../../components/content-wrapper'
import { Input } from '../../components/input/input'
import { paths } from '../../paths'
import { createPlane } from '../../store/plane/planeSlice'

import styles from './styles.module.css'

export const CreatePlanePage = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { errors } = useSelector(state => state.plane)

	const [name, setName] = useState('')
	const [price, setPrice] = useState('')
	const [descpiption, setDescpiption] = useState('')
	const [capacity, setCapacity] = useState('')
	const [planeImage, setPlaneImage] = useState(null)

	const handleCreatePlane = useCallback(() => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', price)
		formData.append('descpiption', descpiption)
		formData.append('capacity', capacity)
		formData.append('planeImage', planeImage)

		dispatch(createPlane(formData)).then(res => {
			if (!res.error) {
				navigate(`${paths.plane}/${res.payload._id}`, { replace: true })
			}
		})
	}, [capacity, descpiption, name, planeImage, price])

	return (
		<ContentWrapper className={styles.createPlane}>
			<Button
				isBackButton={true}
				containerClassName={styles.backButtonContainer}
				onClick={() => navigate(-1)}
			>
				НАЗАД
			</Button>
			<form className={styles.form}>
				<h1 className={styles.title}>Создать самолёт</h1>
				<Input
					name='name'
					placeholder='Название самолёта'
					error={errors && errors.name && errors.name.message}
					onChange={e => setName(e.target.value)}
				/>

				<Input
					name='price'
					placeholder='Цена  самолёта'
					error={errors && errors.price && errors.price.message}
					onChange={e => setPrice(e.target.value)}
				/>

				<Input
					name='description'
					placeholder='Описание самолёта'
					error={errors && errors.descpiption && errors.descpiption.message}
					onChange={e => setDescpiption(e.target.value)}
				/>

				<Input
					name='capacity'
					placeholder='Вместимость самолёта'
					error={errors && errors.capacity && errors.capacity.message}
					onChange={e => setCapacity(e.target.value)}
				/>

				<Input
					name='planeImage'
					type='file'
					placeholder=' Фото самолёта'
					error={errors && errors.planeImage && errors.planeImage.message}
					onChange={e => setPlaneImage(e.target.files[0])}
				/>
				<Button
					containerClassName={styles.buttonContainer}
					onClick={handleCreatePlane}
				>
					Добавить самолёт
				</Button>
			</form>
		</ContentWrapper>
	)
}
