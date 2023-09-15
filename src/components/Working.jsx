import React from 'react'

const Working = () => {
    return (
        <section className='working py-20'>
            <div className="container mx-auto px-10 gap-x-4 grid md:grid-cols-2 grid-cols-1 texture py-10">
                <div className='pe-5'>
                    <p className='font-garet text-white text-xl mb-10'>our referral Program:</p>
                    <h2 className='font-mont text-7xl font-bold text-blue-700 mb-10'>How It<br /> Works</h2>
                    <p className='font-garet text-white text-xl mb-10'>Get gifted with free access to life coaching while sharing the gift of coaching with others.
                    </p>
                    <p className='font-garet text-white text-xl mb-10'>The more you share, the greater the impact.
                    </p>
                    <p className='font-garet text-white text-xl mb-10'>The greater the impact, the greater our gifts to you. </p>
                </div>
                <div>
                    <div className='border-l-2 border-dotted ps-10 pb-10 relative before:absolute before:w-10 before:h-10 before:rounded-full before:bg-gradient-to-tr before:from-primary before:to-secondary before:-left-5 before:top-0'>
                        <p className='font-garet text-white mb-3'>STEP 1</p>
                        <div className="">
                            <h3 className='font-mont text-5xl font-bold text-white mb-4'>Try Getting Coaching</h3>
                            <p className='font-garet text-white text-xl mb-2'>Explore Coaching For Free and See how you like it</p>
                            <a href='http://ixcoach.com/dashboard' className='font-garet text-secondary text-xl mb-10'>Try coaching now</a>
                         </div >
                    </div>
                    
                    <div className='border-l-2 border-dotted ps-10 pb-4 relative before:absolute before:w-10 before:h-10 before:rounded-full before:bg-gradient-to-tr -top-5 before:from-primary before:to-secondary before:-left-5 before:top-0'>
                        <p className='font-garet text-white mb-3'>STEP 2</p>
                        <div className="">
                            <h3 className='font-mont text-5xl font-bold text-white mb-4'>Share with Friends</h3>
                            <p className='font-garet text-white text-xl mb-2'>If you like it, share with our quick sharing toolset with your friends</p>
                            <a href='https://pages.viral-loops.com/ix-coach-free-coaching-competition-1z6k3oa1ral' className='font-garet text-secondary text-xl mb-10'>Join the Referral Program</a>
                         </div >
                    </div>
                    
                    <div className='-top-5 ps-10 pb-10 relative before:absolute before:w-10 before:h-10 before:rounded-full before:bg-gradient-to-tr before:from-primary before:to-secondary before:-left-5 before:top-0'>
                        <p className='font-garet text-white mb-3'>STEP 3</p>
                        <div className="">
                            <h3 className='font-mont text-5xl font-bold text-white mb-4'>Get Rewarded</h3>
                            <p className='font-garet text-white text-xl mb-2'>Rise up the Leaderboard and unlock better and better rewards as you go.</p>
                            <a href='https://pages.viral-loops.com/ix-coach-free-coaching-competition-1z6k3oa1ral' className='font-garet text-secondary text-xl mb-10'>Register and View the Leaderboard</a>
                         </div >
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Working