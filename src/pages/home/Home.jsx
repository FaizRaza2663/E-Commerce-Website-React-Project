import Banner from '../../components/banner/Banner'
import Carousel from '../../components/carousal/Carousel'
import Modal from '../../components/common/modal/Modal'
import FeaturedCategory from '../../components/featuredCategory/FeaturedCategory'
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts'
import FlashSale from '../../components/FlashSale/FlashSale'
import Header from '../../components/header/Header'
import './Home.css'

const Home = () => {
  const openModal = ()=>{
    return(
      <Modal />
    )
  }
  return (
    <div className='main-home'>
      <div className='home'>
        <Header />
        <Carousel />
        <Banner />
        <FeaturedCategory />
        <FeaturedProducts />
        <FlashSale />
        {/* <button onClick={openModal()}>Click Me</button> */}
      </div>
    </div>
  )
}

export default Home