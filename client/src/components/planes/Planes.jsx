import { paths } from '../../paths'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlanes } from '../../store/planes/planesSlice'
import { Spinner } from '../spinner'
import { ContentWrapper } from '../content-wrapper'
import { PlaneItem } from '../plane-item'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { Button } from '../button'
import { useSortPlanes } from '../../hooks/useSortPlanes'

export const Planes = () => {
	const dispatch = useDispatch()
	const { planes, isLoading } = useSelector(state => state.planes)
	const { isDescSort, setIsDescSort, sortedPlanes } = useSortPlanes(
		planes || [],
	)

	useEffect(() => {
		dispatch(getPlanes())
	}, [dispatch])

	if (isLoading) {
		return <Spinner />
	}

	return (
		<div className={styles.bgWrap}>
			<div className={styles.sort}>
				<ContentWrapper className={styles.planesHeader}>
					<div className={styles.sortTitle}>Сортировка:</div>
					<Button
						onClick={() => setIsDescSort(!isDescSort)}
						className={styles.sortBtn}
					>
						{`${isDescSort ? ' по убыванию цены' : ' по возростанию цены'}`}
					</Button>
				</ContentWrapper>
			</div>
			<ContentWrapper className={styles.planesGrid}>
				{sortedPlanes &&
					sortedPlanes.map(plane => <PlaneItem key={plane._id} {...plane} />)}
			</ContentWrapper>
			<Link to={paths.createPlane} className={styles.createPlaneBtn}>
				Add plane
			</Link>
		</div>
	)
}
