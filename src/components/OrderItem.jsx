import React, { useContext } from 'react'
import iconClose from '@icons/icon_close.png'
import AppContext from '@context/AppContext'
import '@styles/OrderItem.scss'

const OrderItem = ({ product, indexValue }) => {
	const { removeFromCart } = useContext(AppContext)
	const handleRemove = (product) => {
		removeFromCart(product)
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p> {product.title} </p>
			<p>$ {product.price} </p>
			<img src={iconClose} alt="close" onClick={() => handleRemove(indexValue)} />
		</div>
	)
}

export default OrderItem;