import React from 'react'
import Card_Slider from './Card_Slider'

const Method = () => {
  return (
    <section className='methods py-20'>
        <div className="containr mx-auto px-4">
            <h2 className='text-6xl font-month mb-6 text-secondary font-bold text-center'>Coaching Methods</h2>
            <p className='text-white font-garet text-xl text-center mb-5 lg:px-96'>Check out all of the coaching methods we offer and find one that matches your style and personality best.</p>
            
            <a href="http://ixcoach.com/reasoning" className='font-garet text-xl text-secondary underline text-center block mb-10' >See the full menu</a>
        </div>
        <Card_Slider />
    </section>
  )
}

export default Method