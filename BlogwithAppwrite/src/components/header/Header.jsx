import React from 'react'
import { LogoutButton} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Logo} from '../index'
import {Container} from '../index'


function header() {

  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: "Login",
      slug: '/login',
      active: !authStatus

    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Post',
      slug: '/all-post',
      active: authStatus
    },
    {
      name: "Add Post",
      slug: '/add-post',
      active: authStatus
    },
  ]

  return (
   <header className='py-5 shadow bg-gray-500'>
    <Container>
      <nav className='flex '>
    <div className='mr-4'>
    <Link to='/'>
    <Logo width='70px'/>
    </Link>
    </div>
    <ul className='flex ml-auto'>
      {navItems.map((item) => item.active ? (
        <li key={item.name}>
          <button className='inline-block px-6 py-2 hover:bg-blue-100 duration-200 rounded-full'
          onClick={() => navigate(item.slug)}
          >{item.name}</button>
        </li>
      ) : null )}
      {
        authStatus && (
         <li>
          <LogoutButton />
         </li>
        )
      }
    </ul>
      </nav>
    </Container>
   </header>
  )
}

export default header