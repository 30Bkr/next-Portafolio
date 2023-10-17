import React from 'react'

const Contact = () => {
  return (
    <section className='h-screen pt-24 z-20' id='contact'>
        <div className='mt-20'>
            <form className='z-20' action="">
                <label htmlFor="nombre">
                    <span>Nombre:</span>
                    <input type="text" name="nombre" id="nombre" />
                </label>
            </form>
        </div>
    </section>
)
}

export default Contact