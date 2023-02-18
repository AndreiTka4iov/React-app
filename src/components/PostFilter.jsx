import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

function PostFilter({filter, setFilter}) {
  return (
    <div>
        <MyInput
          value={filter.quary}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder='search...'
        />
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue='Сортировка'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
    </div>
  )
}

export default PostFilter