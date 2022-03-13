import React, { useContext } from 'react'
import OrderItem from '@components/OrderItem'
import flechita from '@icons/flechita.svg'
import AppContext from '@context/AppContext'
import '@styles/MyOrder.scss'

const MyOrder = () => {
	const { state } = useContext(AppContext)
	const sumTotal = () => {
		const reducer = (acum, value) => acum + value.price
		const sum = state.cart.reduce(reducer, 0)
		return sum
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{ 
					state.cart.map( (item, index) => 
						<OrderItem key={index} indexValue={index} product={item} />
					) 
				}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder