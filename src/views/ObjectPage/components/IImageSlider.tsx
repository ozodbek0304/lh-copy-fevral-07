import SwiperCore from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import ControlSlider from "../../../components/ControlSlider"
import { useRef, useState } from "react"
import { ObjectDataType } from ".."
import { baseURL } from "../../../utils/requestAuth"


function IImageSlider({ objectData }: { objectData: ObjectDataType }) {
  const swiperRef = useRef<SwiperCore>()
  const [currentIndex, setCurrentIndex] = useState(0)


  const changeSlideByIndex = (index: number): void => { swiperRef.current && swiperRef.current.slideTo(index) };
  const onSlideChange = (swiper: SwiperCore): void => { setCurrentIndex(swiper.activeIndex) };

  const images = objectData?.photos?.map(item => item.photo)


  return (
    <div className="lg:flex lg:flex-col">
      <Swiper
        spaceBetween={30}
        onSwiper={swiper => swiperRef.current = swiper}
        onSlideChange={onSlideChange}
        className="lg:w-[350px] xl:w-[500px] 2xl:w-[526px]"
      >
        {
          images?.map((image_link, index) => (
            <SwiperSlide
              key={index}
              className=""
            >
              <img
                className="w-[344px] h-[242px] rounded-[16px] object-cover object-center sm:mx-auto lg:h-auto lg:w-[350px] xl:w-[500px] 2xl:w-[526px]"
                src={baseURL + image_link}
                alt="building image"
              />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <ControlSlider
        className="my-[24px]"
        list={images || []}
        clickHandler={changeSlideByIndex}
        currentIndex={currentIndex}
      />
    </div>
  )
}

export default IImageSlider