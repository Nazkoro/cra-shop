// import React ,{useState} from 'react';
// import './App.css';

// function Counter({cnt,remove, id}) {
// 	let [count, setCount] = useState(0)

// 	function inc() {
// 		setCount(count + 1)
// 	}

// 		function dec() {
// 		count === 0?setCount(count = 0):setCount(count - 1)
// 	}

// 		function reset() {
// 		setCount(count = 0)
// 	}

// 	const drop = () => {
// 		 console.log(cnt);
// 		//  setCount( count =cnt)
// 		 console.log(count);
// 		 cnt(count)
// 		 remove(id)
// 	}

// 	return (
// 		<div className="main"
// 		style={{
//         backgroundColor: count%2 ===0  ? 'white' : 'grey',
//     }}
// 		>
// 			<div className='main__count'>{count}</div>
// 			<p className='main__p'> {count%2 ===0 ?'введено четное число':'введено нечетное число'}</p>
			
// 			<button className="main__btn" onClick = {dec}>-</button>
// 			<button className="main__btn" onClick = {reset}>Reset</button>
// 			{/* <button className="main__btn" onClick ={() => remove(id)}>Delete</button> */}
// 			<button className="main__btn" onClick ={drop}>Delete</button>
// 			<button className="main__btn" onClick ={inc}>+</button>
			
// 		</div>
// 	)

// }
// export default Counter;




import React ,{useState} from 'react';
import './App.css';

function Counter({post,remove, id}) {
	let [count, setCount] = useState(0)

	function inc() {
		setCount(count + 1)
	}

		function dec() {
		count === 0?setCount(count = 0):setCount(count - 1)
	}

		function reset() {
		setCount(count = 0)
	}

	// const drop = () => {
	// 	 console.log(cnt);
	// 	//  setCount( count =cnt)
	// 	 console.log(count);
	// 	 cnt(count)
	// 	 remove(id)
	// }

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
			<button className="main__btn" onClick ={() => remove(post)}>Delete</button>
			<button className="main__btn" onClick ={inc}>+</button>
			
		</div>
	)

}
export default Counter;