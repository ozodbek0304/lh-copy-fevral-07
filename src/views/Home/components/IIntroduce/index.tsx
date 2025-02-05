import { useRef, useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowIcon, PlayIcon } from "../../../../components/Icons";
import { Link } from "react-router-dom";
import { useLanguages } from "../../../../hooks/useLanguages";


const images_list = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1522506978932-29afb581ae72?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1536559718449-a0b8085e0132?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1504081628880-804364338133?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
]


function IIntroduce() {
  const swiperRef = useRef<SwiperCore>();
  const smallSwiperRef = useRef<SwiperCore>();
  const [t] = useLanguages("main")
  
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);


  const changeSlideByIndex = (index: number): void => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index)

      if (
        images_list.length > 3
        && images_list.length < index + 3
        && currentSlideIndex < images_list.length - 3
      ) swiperRef.current.slideTo(index);
    }
  };

  const slideChangeView = (swiper: SwiperCore): void => {
    setCurrentSlideIndex(swiper.activeIndex);
    smallSwiperRef.current && smallSwiperRef.current.slideTo(swiper.activeIndex);
  }

  const smallSlideChangeView = (swiper: SwiperCore): void => {
    setCurrentSlideIndex(swiper.activeIndex);
    swiperRef.current && swiperRef.current.slideTo(swiper.activeIndex);
  }

  const prevSlide = () => swiperRef.current && swiperRef.current.slidePrev();
  const nextSlide = () => swiperRef.current && swiperRef.current.slideNext();


  return (
    <div>
      <div className="relative m-container overflow-hidden">
        <Swiper
          autoplay={{
            delay: 4000,
          }}
          modules={[Autoplay]}
          spaceBetween={40}
          onSlideChange={slideChangeView}
          onSwiper={swiper => swiperRef.current = swiper}
        >
          {
            images_list.map((url, index) => (
              <SwiperSlide key={index} className="">
                <img className="w-full h-[380px] mx-auto object-cover object-center rounded-[16px] lg:h-[400px] xl:h-[450px] 2xl:h-[580px]" src={url} alt="building image" />
              </SwiperSlide>
            ))
          }
        </Swiper>

        <div className="shadow_box absolute inset-0 z-10"></div>

        <Link to="https://www.youtube.com/watch?v=_qEG9X3G7q0&ab_channel=Underworld" className="items-center gap-x-[24px] hidden lg:flex absolute bottom-[90px] right-[30px] z-20 xl:right-[56px] 2xl:bottom-[115px]">
          <span className="text-[var(--orange)] font-medium">{t("video_btn")}</span>
          <PlayIcon />
        </Link>

        <div className="absolute inset-0">
          <div>
            <div className="absolute top-1/2 -translate-y-1/2 z-10 w-full px-[15px] lg:left-[86px]">
              <h1 className="font-medium text-4xl xl:text-[72px]">{t("title")}</h1>
              <h4 className="font-medium my-[4px] xl:text-[40px] lg:mb-[16px] xl:mb-[10px]">{t("desc")}</h4>
              <Link to="https://www.youtube.com/watch?v=_qEG9X3G7q0&ab_channel=Underworld" className="flex items-center mb-[15px] gap-x-[24px] lg:hidden">
                <span className="text-[var(--orange)] font-medium">{t("video_btn")}</span>
                <PlayIcon />
              </Link>
              <Link to="https://designingbuildings.co.uk/wiki/Construction_project" className="text-center text-[var(--orange)] py-[10px] px-[8px] w-full rounded-[8px] bg-white mt-[24px] lg:w-auto lg:px-[10px]">{t("btn")}</Link>
            </div>

            <ul className="absolute z-10 bottom-[32px] w-full flex justify-center gap-x-[8px] lg:flex-col lg:w-auto lg:top-1/2 lg:-translate-y-1/2 lg:left-[24px]">
              {
                images_list.map((_, index) => (
                  <li key={index}>
                    <button onClick={() => changeSlideByIndex(index)} className={`${currentSlideIndex === index ? "bg-white" : ""} transition-all w-[12px] h-[12px] border border-white rounded-full`}></button>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>

      <div className="m-container">
        <div className="flex justify-end relative -top-[15px] z-10 lg:justify-between lg:-top-[70px] xl:gap-x-[30px] 2xl:-top-[85px]">
          <div className="hidden lg:flex flex-1 lg:items-center justify-center xl:gap-x-[26px]">
            <button onClick={prevSlide} className="bg-white py-[19.6px] px-[34px] rounded-[16px] scale-[0.8] xl:scale-100"><ArrowIcon /></button>
            <button onClick={nextSlide} className="bg-white py-[19.6px] px-[34px] rounded-[16px] scale-[0.8] rotate-180 xl:scale-100"><ArrowIcon /></button>
          </div>

          <div className="w-[330px] sm:w-[360px] lg:w-[700px] xl:w-[900px] 2xl:w-[1010px]">
            <Swiper
              onSwiper={swiper => smallSwiperRef.current = swiper}
              slidesPerView={2.5}
              onSlideChange={smallSlideChangeView}
              breakpoints={{
                1024: {
                  slidesPerView: 3
                },
                1280: {
                  slidesPerView: 3.8
                }
              }}

              className=""
            >
              {
                images_list.map((url, index) => (
                  <SwiperSlide
                    key={index}
                    className=""
                  >
                    <div className="w-[120px] h-[108px] relative rounded-[14px] overflow-hidden lg:w-[220px] lg:h-[144px] 2xl:w-[250px] 2xl:h-[174px]">
                      <img className="w-full h-full object-cover object-center" src={url} alt="building image" />
                      <div className={`${currentSlideIndex === index ? "opacity-0" : ""} transition-all duration-500 absolute inset-0 backdrop-blur-[5px] bg-[#25252540] flex justify-center items-center`}>
                        <img className="w-[60px] h-[60px]" src="/images/logo.png" alt="Land House logo image" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IIntroduce;