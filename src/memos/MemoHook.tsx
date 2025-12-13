import { useState } from "react"
import MyTitle from "./ui/MyTitle"
import MySubTitle from "./ui/MySubTitle";

const MemoHook = () => {

  const [title, setTitle] = useState("Hola");
  const [subTitle, setSubTitle] = useState("Mundo");

  return (
    <div className='bg-gradient flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>Memo App</h1>

      <MyTitle title={title} />

      <MySubTitle subtitle={subTitle} />

      <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'>
        Cambiar Titulo
      </button>

      <button className='bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer'>
        Cambiar Subtitulo
      </button>
    </div>
  )
}

export default MemoHook
