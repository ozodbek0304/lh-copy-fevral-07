import SwiperCore from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import ControlSlider from "../../../../../components/ControlSlider"
import { useRef, useState } from "react"


const images_list = [
  "https://res.cloudinary.com/dtrhqmm9b/image/upload/v1725611567/05_1_seoyrp.png",
  "https://cdna.artstation.com/p/media_assets/images/images/000/844/222/large/header_ce431033-a678-4d5f-971f-6eb72417cb51.jpg?1636121604",
  "https://afrikta.com/wp-content/uploads/2023/04/Top-10-Building-Construction-Companies-in-Nigeria.jpg",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1bb454de-53e9-42c3-bd8a-3cdfd5c39e9d/dgb3ryl-cffda4b2-1b9d-4c90-bb4e-62e75e323329.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFiYjQ1NGRlLTUzZTktNDJjMy1iZDhhLTNjZGZkNWMzOWU5ZFwvZGdiM3J5bC1jZmZkYTRiMi0xYjlkLTRjOTAtYmI0ZS02MmU3NWUzMjMzMjkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Y2FVzz2rtNSKUMYr1Uy9XjCElfxYCyzYRh3xIv4CIe4",
  "https://orientalpacificconstruction.com/wp-content/plugins/burger-companion/inc/owlpress/images/slider/Imag02.jpg",
  "https://www.chandigarhhelp.com/wp-content/uploads/2022/01/Top-Construction-Companies-in-Panchkula.jpg",
  "https://img.indiafilings.com/learn/wp-content/uploads/2016/09/12010621/Company-Management.jpg",
]


function IImageSlider() {
  const swiperRef = useRef<SwiperCore>()
  const [currentIndex, setCurrentIndex] = useState(0)


  const changeSlideByIndex = (index: number): void => { swiperRef.current && swiperRef.current.slideTo(index) };
  const onSlideChange = (swiper: SwiperCore): void => { setCurrentIndex(swiper.activeIndex) };



  return (
    <div className="lg:flex lg:flex-col">
      <Swiper
        spaceBetween={30}
        onSwiper={swiper => swiperRef.current = swiper}
        onSlideChange={onSlideChange}
        className="lg:w-[350px] xl:w-[500px] 2xl:w-[526px]"
      >
        {
          images_list.map((image_link, index) => (
            <SwiperSlide
              key={index}
              className=""
            >
              <img
                className="w-[344px] h-[242px] rounded-[16px] object-cover object-center sm:mx-auto lg:h-full lg:w-[350px] xl:w-[500px] 2xl:w-[526px]"
                src={image_link}
                alt="building image"
              />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <ControlSlider
        className="my-[24px]"
        list={images_list}
        clickHandler={changeSlideByIndex}
        currentIndex={currentIndex}
      />
    </div>
  )
}

export default IImageSlider