import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
//icon
import { BsFillPersonFill } from 'react-icons/bs';


export default function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <span className='login' onClick={() => loginWithRedirect()}>
        <BsFillPersonFill />
      </span>
    )
  )
}
