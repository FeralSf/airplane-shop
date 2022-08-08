import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home-page/'
import { PlanePage } from './pages/plane-page/'
import { OrderPage } from './pages/order-page/'
import { CreatePlanePage } from './pages/create-plane-page'
import { paths } from './paths'

// const store = store

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={paths.home} element={<HomePage />}></Route>
				<Route path={`${paths.plane}/:id`} element={<PlanePage />}></Route>
				<Route path={paths.createPlane} element={<CreatePlanePage />}></Route>
				<Route path={paths.order} element={<OrderPage />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
