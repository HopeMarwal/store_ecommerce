import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
//icon
import { FiLogOut } from 'react-icons/fi';

export default function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <span onClick={() => logout({ returnTo: window.location.origin })}>
        <FiLogOut />
      </span>
    )
  )
}
