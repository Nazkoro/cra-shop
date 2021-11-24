// import React ,{useState} from 'react';
// import './App.css';
// import Counter from './Counter';


// function CountConters() {

// 	let [counter, setCounter] = useState([])


	// const deleteCounter = (id) => {
		
	// 	 setCounter(counter.filter(item => item.id !== id))
	// 	//  counter.forEach( item => item.inc())
	// }

// 	const getCount = (count) => {
// 		alert(count)
// 	}

// 	function addCount() {
// 		setCounter([...counter, <Counter cnt={getCount} remove={deleteCounter} key ={Date.now()} id ={Date.now()}/>])
// 		console.log([...counter]);

// 		// counter.forEach( item => item.inc())
// 	}

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




	
// }
// export default CountConters;



import React,{useState} from 'react';
import './App.css';
import Counter from './Counter';


function CountConters({posts,create, remove}) {

	const [post, setPost] = useState([])
	// let [counter, setCounter] = useState([])
	// const deleteCounter = (id) => {
	// 	 setCounter(counter.filter(item => item.id !== id))	
	// }
	// const getCount = (count) => {
	// 	alert(count)
	// }
	// function addCount() {
	// 	setCounter([...counter, <Counter cnt={getCount} remove={deleteCounter} key ={Date.now()} id ={Date.now()}/>])
	// 	console.log([...counter]);
	// }
	const addNewPost = () => {
        // e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
		setPost(newPost)
        // create(newPost)
        // setPost({title: '', body: ''})
    }
	// function reset() {
	// 		setCounter(counter = [])
	// }
	{/* <button onClick={reset}> Reset</button> */}
	return (
		<div  >
			<button onClick={addNewPost}> Add count</button>
			
			<div>
                {posts.map((post) =>
                    <div  key={post.id}>
                        <Counter remove={remove} post={post} />
                    </div>
                )}
           </div>


			
		</div>
	)


}
export default CountConters;