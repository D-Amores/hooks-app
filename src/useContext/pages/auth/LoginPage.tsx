import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router'

const LoginPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl font-bold'>Iniciar Sesion</h1>
      <hr />

      <form action="#" className='flex flex-col gap-2 my-10'>
        <input 
          type="number" 
          placeholder='ID del usuario'
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
