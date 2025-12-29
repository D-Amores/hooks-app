import { use, type JSX } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router";

interface Props {
  element: JSX.Element,
}

const PrivateRouter = ({ element }: Props) => {

  const { authStatus } = use(UserContext);

  if (authStatus === 'checking') {
    return <div>Loading...</div>
  }

  if ( authStatus === 'authenticated') {
    return element;
  }

  return (
    <Navigate to="/login" replace />
  )
}

export default PrivateRouter
