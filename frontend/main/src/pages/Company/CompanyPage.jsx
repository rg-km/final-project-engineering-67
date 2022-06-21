import '../Company/style/CompanyStyle.css'
import graph2 from '../Company/images/graph2.gif';
import { faHandHoldingDollar, faBuildingFlag, faChain, faChalkboard, faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const CompanyBuild = () => {
    return(
        <div className="company-build">
            <div className='p-5'>
                <h1 className='text-white text-center p-4 mt-4 text-3xl font-bold'>Were Committed to Help Others <br></br>By Your Hand and Our Community</h1>
            </div>
            <div className='w-full py-5 px-4'>
                <div className='max-w-[1080px] mx-auto grid md:grid-cols-2'>
                    <img className='flex felx-col justify-center opacity-20' src={graph2}/>
                    <div className='text-white mt-9 ml-5'>
                        <div className='flex flex-row mb-9'>
                            <FontAwesomeIcon icon={faHandHoldingDollar} className='text-5xl mr-7'></FontAwesomeIcon>
                            <div>
                                <h1 className='md:text-2xl sm:text-xl text-2xl'>Donate</h1>
                                <p className='md:text-lg sm:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias?</p>
                            </div>
                        </div>
                        <div className='flex flex-row mb-9'>
                            <FontAwesomeIcon icon={faChalkboardUser} className='text-5xl mr-7'></FontAwesomeIcon>
                            <div>
                                <h1 className='md:text-2xl sm:text-xl text-2xl'>Employee</h1>
                                <p className='md:text-lg sm:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias?</p>
                            </div>
                        </div>
                        <div className='flex flex-row mb-9'>
                            <FontAwesomeIcon icon={faBuildingFlag} className='text-5xl mr-7'></FontAwesomeIcon>
                            <div>
                                <h1 className='md:text-2xl sm:text-xl text-2xl'>Support Needed Schools</h1>
                                <p className='md:text-lg sm:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};