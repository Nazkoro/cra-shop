import { observer } from 'mobx-react-lite';
import React ,{useState} from 'react';
import './App.css';
import StoreCounter from './store/StoreCounter.js';
import {
	toJS
 } from 'mobx';

const Counter = observer(({remove, id}) => {
	let [count, setCount] = useState(0)

	function inc() {
		setCount(count + 1)
		StoreCounter.inc(id,count)
	}

		function dec() {
		count === 0?setCount(count = 0):setCount(count - 1)
		StoreCounter.dec(id, count)
	}

		function reset() {
		setCount(count = 0)
	}

	const drop = () => {
		 remove(id)
	}

	return (
		<div className="main"
		style={{
        backgroundColor: count%2 ===0  ? 'white' : 'grey',
    }}
		>
			<div className='main__count'>{count}</div>
			<p className='main__p'> {count%2 ===0 ?'введено четное число':'введено нечетное число'}</p>
			
			<button className="main__btn" onClick = {dec}>-</button>
			<button className="main__btn" onClick = {reset}>Reset</button>
			{/* <button className="main__btn" onClick ={() => remove(id)}>Delete</button> */}
			<button className="main__btn" onClick ={drop}>Delete</button>
			<button className="main__btn" onClick ={inc}>+</button>
			
		</div>
	)

})
export default Counter;




// import React ,{useState, useEffect} from 'react';
// import StoreCounter from './store/StoreCounter.js';
// import './App.css';
// import { observer } from 'mobx-react-lite';

// const  Counter = observer(({post,remove, id}) => {
// 	// let [count, setCount] = useState(0)

// 	// function inc() {
// 	// 	setCount(count + 1)
// 	// }

// 	// 	function dec() {
// 	// 	count === 0?setCount(count = 0):setCount(count - 1)
// 	// }
// 	// 	function reset() {
// 	// 	setCount(count = 0)
// 	// }
// 	// useEffect(() => {
// 	// 	post.count = StoreCounter.count
// 	//   });

// 	// return (
// 	// 	<div className="main"
// 	// 	style={{
//     //     backgroundColor: count%2 ===0  ? 'white' : 'grey',
//     // }}
// 	// 	>
// 	// 		<div className='main__count'>{count}</div>
// 	// 		<p className='main__p'> {count%2 ===0 ?'введено четное число':'введено нечетное число'}</p>
			
// 	// 		<button className="main__btn" onClick = {dec}>-</button>
// 	// 		<button className="main__btn" onClick = {reset}>Reset</button>
// 	// 		<button className="main__btn" onClick ={() => remove(post)}>Delete</button>
// 	// 		<button className="main__btn" onClick ={inc}>+</button>
			
// 	// 	</div>
// 	// )



// 	return (
// 		<div className="main"
// 		style={{
//         backgroundColor: StoreCounter.count%2 ===0  ? 'white' : 'grey',
//     }}
// 		>
// 			<div className='main__count'>{StoreCounter.count}</div>
// 			<p className='main__p'> {StoreCounter.count%2 ===0 ?'введено четное число':'введено нечетное число'}</p>
			
// 			<button className="main__btn" onClick = {() => StoreCounter.dec()}>-</button>
// 			<button className="main__btn" onClick = {() =>StoreCounter.reset()}>Reset</button>
// 			<button className="main__btn" onClick ={() => remove(post)}>Delete</button>
// 			<button className="main__btn" onClick ={() => StoreCounter.inc()}>+</button>
			
// 		</div>
// 	)

// })
// export default Counter;