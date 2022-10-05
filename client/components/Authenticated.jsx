import React from 'react'

// Import useAuth0 function
import { useAuth0 } from '@auth0/auth0-react'

// Call the useAuth0 hook, destructure and return isAuthenticated
const isAuthenticated = () => {
  return useAuth0().isAuthenticated
}

export function IfAuthenticated({ children }) {
  return isAuthenticated() ? <>{children}</> : null
}

export function IfNotAuthenticated({ children }) {
  return !isAuthenticated() ? <>{children}</> : null
}
