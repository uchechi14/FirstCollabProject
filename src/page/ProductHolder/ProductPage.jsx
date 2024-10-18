// import DetailHeader from './DetailHeader'
import DetailSecondHeader from './DetailSecondHeader'
import ProductCards from './ProductCards'

const ProductPage = () => {
  return (
    <div className='w-[100%] flex flex-col items-center'>
        {/* <DetailHeader  /> */}
        <DetailSecondHeader  />
        <ProductCards  />
    </div>
  )
}

export default ProductPage