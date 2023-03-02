import React from 'react'

// Zadání: Po kliku na tlačítko zobraz bublinu s textem „Ahoj“.
const handleShowBubble = () => {
	return (
		alert('ahoj')
	)
}

export const Uloha1 = () => {
	return <button onClick={handleShowBubble}>Ukaž bublinu</button>
}
