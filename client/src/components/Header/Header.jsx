import React from 'react'
import { ContentWrapper } from '../content-wrapper'
import styles from './styles.module.css'
import WaveImage from './wave.svg'

export const Header = () => {
	return (
		<div className={styles.header}>
			<ContentWrapper className={styles.content}>
				<h1 className={styles.title}>{`Путешествуйте \n с  комфортом`}</h1>
				<p
					className={styles.desc}
				>{`C Нашей компанией вы забудете обо всем, \n   кроме выского уровня `}</p>
			</ContentWrapper>
			<img src={WaveImage} alt='' className={styles.wave} />
		</div>
	)
}
