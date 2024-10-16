import rightHeroImage from '../assets/camera.png'
import lowerRightHeroImage from '../assets/calc.png'
import WatchImage from '../assets/watch.png'
import ShirtImage from '../assets/shirt.png'
import JacketImage from '../assets/jacket.png'
import ImageCardHolder from '../components/LandingPageCategories/ImageCardHolder'
import HeroSliderComponent from '../components/HeroSliderComponent'
import MensClothing from '../components/LandingPageCategories/MensClothing'
import WomenClothing from '../components/LandingPageCategories/WomenClothing'
import creativeDesign from '../assets/creativeDesign.png'

const LandingPage = () => {
  return (
    <>
    <div className=' mt-4 top-[200px]  w-[100%] flex items-center flex-col '>
      <div className='w-[90%] flex justify-between gap-3 '>
            <div className='w-[65%] h-[300px]'>
            <HeroSliderComponent />
            </div>
            <div className='w-[33%]'>
                <img src={rightHeroImage} className=' w-full h-[220px]' />
                <img src={lowerRightHeroImage} className='w-full mt-4 h-[220px]' />
            </div>
            </div>
    
  
        <div className='w-[90%] flex justify-between gap-4 mt-16'>
            <div>
                <img src={WatchImage} />
            </div>
            <div>
                <img src={ShirtImage} />
            </div>
            <div>
                <img src={JacketImage} />
            </div>
        </div>
        <div className='w-[90%] flex justify-between gap-4 mt-9 '>
            <div className='w-full'>
                <h1 className='text-2xl font-medium'>Top Categories this week</h1>
                <ImageCardHolder/>
                <MensClothing />
                </div>
        </div>
        <div className='w-full flex justify-center bg-[#F9F9F9] py-4 mt-9'>
        <div className='w-[90%] flex flex-col justify-between gap-4  py-9'>
           <div className='w-full flex justify-between border-b borrder-[#F9F9F9] pb-3'>
           <h1 className='text-2xl font-medium'>Hot Sales On Women Clothing</h1>
           <p className='text-[17px] font-medium hover:text-[#62ab00] cursor-pointer'>Buy Now</p>
           </div>
           <div className=''>
            <WomenClothing />
            </div>
        </div>
        </div>
        <div className='w-full flex justify-center bg-[#333E48]'>
            <div className='w-[90%] py-14 flex justify-between items-center '>
                <div>
                    <img src={creativeDesign} />
                </div>
                <div>
                    <img src={creativeDesign} />
                </div>
                <div>
                    <img src={creativeDesign} />
                </div>
                <div>
                    <img src={creativeDesign} />
                </div>
                <div>
                    <img src={creativeDesign} />
                </div>
            </div>
        </div>
     
    </div>
    </>
  )
}

export default LandingPage