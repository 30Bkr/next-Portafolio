import React from 'react'

const Contact = () => {
  return (
    <section className='h-screen pt-24 z-10' id='contact'>
        <div className='flex justify-center items-center mt-20'>
            <form className='z-20 flex flex-col bg-gray-800 h-[550px] w-[400px] rounded-xl px-8 py-8' action="">
                <h2 className='w-full flex justify-center items-center text-white'>Contactame</h2>
                <label className='my-4 w-full' htmlFor="nombre">
                    <input className='w-full bg-blue-300 p-4 rounded-3xl caret-pink-500 placeholder:text-slate-600 border border-stale-400  focus:border-sky-500' type="text" name="nombre" id="nombre" placeholder='Nombre' />
                </label>
                <label className='my-4 w-full' htmlFor='phone'>
                    <input className='w-full bg-blue-300 p-4 rounded-3xl caret-pink-500 placeholder:text-slate-600 border-sky-400' type="text" name='phone' id='phone' placeholder='Telefono'/>
                </label>
                <label className='my-4 w-full' htmlFor='email'>
                    <input className='w-full bg-blue-300 p-4 rounded-3xl caret-pink-500 placeholder:text-slate-600 border-sky-400' type="text" name='email' id='email' placeholder='E-mail'/>
                </label>
                <label className='my-4 w-full' htmlFor='content'>
                    <textarea className='w-full bg-blue-300 p-4 rounded-3xl caret-pink-500 placeholder:text-slate-600 ' name='content' id='content' placeholder='Mensaje'/>
                </label>
                <button className=' bg-blue-400 h-16 rounded-3xl'>Enviar</button>
            </form>
        </div>
    </section>
)
}

export default Contact