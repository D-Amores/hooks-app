import { Button } from "@/components/ui/button"
import { UserContext } from "@/useContext/context/UserContext"
import { use } from "react"

const ProfilePage = () => {

  const { user } = use(UserContext)

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl font-bold'>Perfil del Usuario</h1>
      <hr />

      <pre className='my-4'>{JSON.stringify(user, null, 2)}</pre>

      <Button
        variant="destructive"
      >
        Salir
      </Button>
    </div>
  )
}

export default ProfilePage
