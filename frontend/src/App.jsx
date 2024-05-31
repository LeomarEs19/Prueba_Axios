import React, { useEffect, useRef } from 'react'
import axios from 'axios'
function App() {

  const nombre = useRef(null)
  const telefono = useRef(null)
  const email = useRef(null)
  const cedula = useRef(null)


  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      nombre: nombre.current.value,
      telefono: telefono.current.value,
      email: email.current.value,
      cedula: cedula.current.value
   
    }

    axios.post("http://localhost:3333/usuarios", data).then((response) => {
      alert('Usuario Registrado Con exito');
      window.location.reload();
    })
  }

return (
  <div className='container mx-auto h-screen flex justify-center items-center'>
    <div className='w-1/2 rounded-lg bg-gray-100 shadow-md p-8 flex flex-col gap-5'>
      <h1 className='text-center text-2xl text-gray-800'>Registrar</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 text-gray-800'>
        <input type="text" required placeholder='Nombre' className='p-4 rounded border border-gray-300 bg-transparent' ref={nombre} />
        <input type="number" required placeholder='Teléfono' className='p-4 rounded border border-gray-300 bg-transparent' ref={telefono}  />
        <input type="email" required placeholder='Email' className='p-4 rounded border border-gray-300 bg-transparent' ref={email} />
        <input type="cedula" required placeholder='cedula' className='p-4 rounded border border-gray-300 bg-transparent' ref={cedula} />
       
        <button type='submit' className='p-5 bg-blue-500 text-white rounded-3xl hover:scale-101 transition-all'>enviar</button>
      </form>
    </div>
  </div>
)
}


export default App
