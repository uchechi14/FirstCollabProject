import CategoriesDropDown from './CategoriesDropDown'
import DetailInputHeader from './DetailInputHeader'
import BlackFriday from './BlackFriday'

const DetailHeader = () => {
  return (
    <div className='w-[90%] mt-2 flex items-center justify-center'>
      <div className='w-full flex items-center justify-between'>
<CategoriesDropDown  />
<DetailInputHeader  />
<BlackFriday  />
      </div>
    
    </div>
  )
}

export default DetailHeader