
import React ,{useState} from 'react';
import CountConters from './CountConters';
import './App.css';

function PageCounter() {
	const [posts, setPosts] = useState([])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])   
    }
	const deleteCounter = (id) => {	
        setPosts(posts.filter(item => item.id !== id))
   }
//    const getCount = (count) => {
//        alert(count)
//    }

//    function addCount() {
//         setPosts([...posts, <Counter cnt={getCount} remove={deleteCounter} key ={Date.now()} id ={Date.now()}/>])
//        console.log([...posts]);

       
//    }

//    function reset() {
//         setPosts(posts = [])
//    }

   return (
       <div  >
        <CountConters remove={deleteCounter} create={createPost} posts={posts}/>
       </div>
   )
}
export default PageCounter;