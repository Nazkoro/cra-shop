import { observer } from 'mobx-react-lite';
import React ,{useState} from 'react';
import './App.css';
import StoreCounter from './store/StoreCounter.js';
import Counter from './Counter';
import { toJS } from 'mobx';


const CountConters = observer(() => {

	let [counter, setCounter] = useState([])


	// const deleteCounter = (id) => {
		
	// 	 setCounter(counter.filter(item => item.id !== id))
	// 	//  counter.forEach( item => item.inc())
	// }

	// const getCount = (count) => {
	// 	alert(count)
	// }

	// function addCount() {
	// 	setCounter([...counter, <Counter  remove={deleteCounter} key ={Date.now()} id ={Date.now()}/>])
	// 	console.log(counter);

	// 	// counter.forEach( item => item.inc())
	// }

	// 	const addNewPost = () => {
    //     let newPost = {
    //         ...post, id: Date.now(), key: Date.now(), count: post.count
    //     }
    //     create(newPost)
    // }


	// function reset() {
	// 		setCounter(counter = [])
	// }
	console.log(toJS(StoreCounter.counts));

	return (
		<div  >
			<button onClick={() => StoreCounter.create()}> Add count</button>
			<button onClick={() => StoreCounter.reset()}> Reset</button>
				<div>
                  	{StoreCounter.counts.map((item) =>
                   		<div  key={Date.now()}>
                         	<Counter remove={() => StoreCounter.removeItem(item.id)} id ={Date.now()} />
                    	</div>
					)}
                </div>
           
		</div>
	)




	
})
export default CountConters;
















// import { observer } from 'mobx-react-lite';
// import React ,{useState} from 'react';
// import './App.css';
// import Counter from './Counter';


// const CountConters = observer(() => {

// 	let [counter, setCounter] = useState([])


// 	const deleteCounter = (id) => {
		
// 		 setCounter(counter.filter(item => item.id !== id))
// 		//  counter.forEach( item => item.inc())
// 	}

// 	// const getCount = (count) => {
// 	// 	alert(count)
// 	// }

// 	function addCount() {
// 		setCounter([...counter, <Counter  remove={deleteCounter} key ={Date.now()} id ={Date.now()}/>])
// 		console.log(counter);

// 		// counter.forEach( item => item.inc())
// 	}

// 	// 	const addNewPost = () => {
//     //     let newPost = {
//     //         ...post, id: Date.now(), key: Date.now(), count: post.count
//     //     }
//     //     create(newPost)
//     // }


// 	function reset() {
// 			setCounter(counter = [])
// 	}

// 	return (
// 		<div  >
// 			<button onClick={addCount}> Add count</button>
// 			<button onClick={reset}> Reset</button>
// 			{counter}
// 		</div>
// 	)




	
// })
// export default CountConters;































// import React,{useState} from 'react';
// import './App.css';
// import Counter from './Counter';


// function CountConters({posts,create, remove}) {


// 	const [post, setPost] = useState([])

// 	const addNewPost = () => {
//         let newPost = {
//             ...post, id: Date.now(), key: Date.now(), count: post.count
//         }
//         create(newPost)
//     }



// 	return (
// 		<div>
// 			<button onClick={addNewPost}> Add count</button>
			
// 			<div>
//                 {posts.map((post) =>
//                     <div  key={post.id}>
//                         <Counter remove={remove} post={post} />
//                     </div>
//                 )}
//            </div>


			
// 		</div>
// 	)


// }
// export default CountConters;