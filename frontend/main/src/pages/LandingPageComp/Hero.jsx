import '../LandingPageComp/style/HeroStyle.css'
import Typed from 'react-typed';

const SuperHero = () => {
    return(
        <div className='myBg hero-selector text-center text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <h1 className='md:text-5xl sm:text-5xl text-5xl font-bold mt-4'>DOAKAN</h1>
                <h1 className='md:text-5xl sm:text-5xl text-5xl mt-4 font-semibold'>Donasi <span className='font-bold'>Pendidikan</span></h1>
                <p className='text-2xl mt-5 mb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quaerat exercitationem maiores dolores quia nostrum.
                </p>
                <div className='flex justify-center items-center'>
                    <p className='md:text-2xl sm:text-2xl text-xl py-4'>
                    Lets donate for a better
                    </p>
                    <Typed
                    className='md:text-2xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                    strings={['future']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                    />
                </div>
                <button className='bg-[#b8b9fa] w-[140px] rounded-md my-2 mx-auto py-2 text-white hover:bg-[#595bc9]'>GET STARTED</button>
            </div>
            <div className='columns-2'>

            </div>
        </div>
    )
}

export default SuperHero;