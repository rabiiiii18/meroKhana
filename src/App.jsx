
import { Navigate, Outlet } from 'react-router-dom'

import { useUser } from '@clerk/clerk-react'
import Header from './component/custom/Header';

function App() {
  const { user, isLoaded, isSignedIn } = useUser();
  if (!isSignedIn && isLoaded) {
    return <Navigate to={'/auth/sign-In'} />
  }
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
