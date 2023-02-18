import React, {useState} from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import "./styles/app.css";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript', body: 'Description'},
    {id: 3, title: 'Javascript', body: 'Description'},
  ])

const [selectedSort, setSelectedSort] = useState('')
const [searchQuary, setSearchQuary] = useState('')

function getSortedPosts(){
  console.log('отработала')
  if (selectedSort){
    return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
  }
  return posts
}

const sortedPosts = getSortedPosts()

const createPost = (newPost) =>{
  setPosts([...posts, newPost])
}

const removePost = (post) =>{
  setPosts(posts.filter(p => p.id !== post.id))
}

const sortPosts = (sort) => {
  setSelectedSort(sort);
  
}


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <div>
        <MyInput
          value={searchQuary}
          onChange={e => setSearchQuary(e.target.value)}
          placeholder='search...'
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
      </div>
      {posts.length
      ? 
      <PostList remove={removePost} posts={sortedPosts} title={'Посты про JS'}/>
      : 
      <h1 style={{textAlign: 'center'}}>
        Посты не найдены
      </h1>
      }
      
    </div>
  );
}

export default App;
