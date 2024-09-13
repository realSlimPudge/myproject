import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import Square from './components/Square'

function App() {
	let props = 'props'

	function Mycounter() {
		const [count, setCount] = useState(0)
		function plus() {
			setCount(count + 1)
		}
		function minus() {
			setCount(count - 1)
		}
		return (
			<div>
				<div>{count}</div>
				<button onClick={plus}>+</button>
				<button onClick={minus}>-</button>
			</div>
		)
	}
	function buttonClick() {
		console.log('button has been clicked')
	}
	return (
		<div className='counter'>
			<button onClick={buttonClick}>Click</button>
			<Square valueProps={props}></Square>
			<Square></Square>
			<Square></Square>
			<Square></Square>
			<Mycounter></Mycounter>
			<Mycounter></Mycounter>
		</div>
	)
}

export default App
