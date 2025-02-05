import { useCallback, useRef, useState } from "react"
import SwiperCore from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import ControlSlider from "../../../../components/ControlSlider"
import { Link } from "react-router-dom"
import { main_phone } from "../../../../constants/contacts"
import IFormModal from "../IFormModal"
import { useLanguages } from "../../../../hooks/useLanguages"



const images = [
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/517437485.jpg?k=dedc4b8e0ed4f145db09dd69a6bd8aa0628ce90844e5ce195021f19f54d6cc39&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/520236265.jpg?k=8da2c4299980f665ca16219710dda3ac1579e84485485e2beb57768efdb80fe5&o=&hp=1",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Studio_apartment.webp/1200px-Studio_apartment.webp.png",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/455613071.jpg?k=680a0f6fab928725bbb5ece932800731883b705a355331386c3ea12f5e6c10be&o=&hp=1",
  "https://media.self.com/photos/630635c30b7f36ce816f374a/4:3/w_2560%2Cc_limit/DAB03919-10470989.jpg",
  "https://furnishd.com.au/cdn/shop/files/Collins-Arch-000_Large_landscape_1.jpg?v=1683286881&width=1280",
  "https://www.apartments-mitte.de/wp-content/uploads/2023/12/premium-3-1.webp",
]


function IMainSection() {
  const swiperRef = useRef<SwiperCore>()
  const [t] = useLanguages("apartment")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [formModal, setFormModal] = useState(false)


  const changeSlideByIndex = (index: number): void => { swiperRef.current && swiperRef.current.slideTo(index) };
  const onSlideChange = (swiper: SwiperCore): void => { setCurrentIndex(swiper.activeIndex) };

  const onClose = useCallback(() => setFormModal(false), [])


  return (
    <main className="w-full mt-[18px] relative mb-[80px]">
      <Swiper
        className="relative"
        onSwiper={swiper => swiperRef.current = swiper}
        onSlideChange={onSlideChange}
        autoplay={{
          delay: 5000,
        }}
        modules={[Autoplay]}
        spaceBetween={40}
      >
        {
          images.map((imageUrl, index) => (
            <SwiperSlide
              key={index}
              style={{ backgroundImage: `url(${imageUrl})` }}
              className="w-full h-[380px] md:h-[400px] lg:h-[550px] xl:h-[696px] bg-center bg-cover bg-no-repeat"
            />
          ))
        }
      </Swiper>

      <div className="object_bg_shadow z-[1] pointer-events-none"></div>

      <div className="absolute z-[2] top-1/2 -translate-y-1/2 m-container mx-auto left-1/2 -translate-x-1/2 flex items-center flex-col lg:flex-row">
        <div className="lg:rotate-90 order-last lg:order-first mt-[32px] lg:mt-0">
          <ControlSlider
            clickHandler={changeSlideByIndex}
            currentIndex={currentIndex}
            list={images}
          />
        </div>

        <div className="font-medium mx-auto lg:mx-0">
          <h1 className="text-[30px] sm:text-[32px] md:text-[40px] lg:text-[60px] xl:text-[72px] mb-[12px]">{t("name_of_apartment")}</h1>
          <h3 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[35px] xl:text-[40px] mb-[32px]">{t("note")}</h3>
          <div className="grid gap-y-[16px] lg:grid-cols-2 lg:w-[600px]">
            <button onClick={() => setFormModal(true)} className="bg-[#FF8225] py-[16px] text-xl font-medium rounded-[12px] lg:w-[284px]">{t("submit_request")}</button>
            <Link to={`tel:${main_phone}`} className="bg-white text-center text-[#FF8225] py-[16px] text-xl font-medium lg:w-[284px] rounded-[12px]">{t("call")}</Link>
          </div>
        </div>
      </div>

      {formModal && <IFormModal onClose={onClose} />}
    </main>
  )
}

export default IMainSection