import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton'

function Navbar() {
  const {isAurh, setIsAuth} = useContext(AuthContext)
  const logout = () =>{
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className="navbar">
      <MyButton 
      style={{color: 'red', borderColor: 'red'}}
      onClick={logout}
      >Выйти</MyButton>
        <div className="navbar__links">
          <Link to="/about">О сайте</Link>
          <Link to="posts">Посты</Link>
        </div>
    </div>
  )
}

export default Navbar