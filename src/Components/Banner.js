import banner from '../assets/banner.png'
import '../styles/Banner.css'



function Banner() {

    return (
        <div className='banner'>
            <img src={banner} alt = 'banner background' className = 'banner-img' />
            <div className='headline'>Home anywhere and everywhere</div>
        </div>
    )
}

export default Banner