import React, {useRef, useState} from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/app.css"

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript', body: 'Description'},
    {id: 3, title: 'Javascript', body: 'Description'},
  ])


const createPost = (newPost) =>{
  setPosts([...posts, newPost])
}



  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title={'Посты про JS'}/>
    </div>
  );
}

export default App;
