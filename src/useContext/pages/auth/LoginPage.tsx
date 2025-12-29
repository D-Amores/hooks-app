import { Button } from '@/components/ui/button'
import { UserContext } from '@/useContext/context/UserContext'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner'

const LoginPage = () => {

  const { login } = useContext(UserContext)
  const [userId, setUserId] = useState('');

  const navigation = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = login(+userId);
    if(!result) {
      toast.error('User not found');
      return;
    }

    navigation('/profile');
  }


  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl font-bold'>Iniciar Sesion</h1>
      <hr />

      <form action="#" className='flex flex-col gap-2 my-10'
        onSubmit={handleSubmit}
      >

        <input
          type="number"
          placeholder='ID del usuario'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className='border border-gray-300 rounded px-2 py-1'
        />

        <Button type='submit'>Iniciar Sesion</Button>
      </form>

      <Link to="/about">
        <Button variant='ghost'>Volver a la pagina principal</Button>
      </Link>
    </div>
  )
}

export default LoginPage
