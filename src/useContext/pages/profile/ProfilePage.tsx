import { Button } from "@/components/ui/button"
import { UserContext } from "@/useContext/context/UserContext"
import { use } from "react"

const ProfilePage = () => {

  const { user, logout } = use(UserContext)

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl font-bold'>Perfil del Usuario</h1>
      <hr />

      <pre className='my-4'>{JSON.stringify(user, null, 2)}</pre>

      <Button
        variant="destructive"
        onClick={logout}
      >
        Salir
      </Button>
    </div>
  )
}

export default ProfilePage
