
import React ,{useState, useEffect} from 'react';
import CountConters from './CountConters';
import './App.css';

function PageCounter() {
	const [posts, setPosts] = useState([])
    const [conts, setCount] = useState([0])
    console.log(posts);

    const createPost = (newPost) => {

        setPosts([...posts, newPost])  
        let arr = () => {
            return posts.forEach(post => 
                post.count +1)
                
        }
        console.log(arr());
       
    }
    
    // const createPost = (newPost) => {

    //     setPosts([...posts, newPost])  
    //     let arr = () => {
    //         return conts.forEach(cnt => 
    //             cnt += 1
                
    //             )
    //             console.log(cnt);
    //     }
       
    // }
	const deleteCounter = (id) => {	
        setPosts(posts.filter(item => item.id !== id))
   }

   useEffect(() => {
 
        posts.forEach(post => 
            post.count += 1)

  },[posts]);

   return (
       <div  >
        <CountConters remove={deleteCounter} create={createPost} posts={posts}/>
       </div>
   )
}
export default PageCounter;