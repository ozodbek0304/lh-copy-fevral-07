import { Swiper, SwiperSlide } from "swiper/react"
import { LongArrowIcon } from "../Icons";
import {useQuery} from 'react-query'
import { useRef, useEffect } from "react"
import SwiperCore from "swiper"
import useMainFetch from "../../hooks/fetching/useMainFetch"


type NewsType = {
  description: string;
  id: number;
  title: string;
  video?: string;
  photo: string;
}

// const staticData = Array(8).fill(null).map(() => ({
//   id: 1,
//   title: "Довольные клиенты",
//   descriptions: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.",
//   video: "",
//   photo: "https://img.freepik.com/free-photo/confident-young-woman-showing-thumbs-up-smiling-positive-reply-express-approval-like-praise-product-standing-white-wall_176420-42667.jpg",
// }))


// useEffect(() => {

// }, [])

fetch('https://apis.lhd.uz/news').then(res => res.json()).then(data => console.log(data))





const staticData = [
  "https://infrastructuremagazine.com.au/wp-content/uploads/2024/06/shutterstock_57862405-copy.jpeg",
  "https://cdn.ca.emap.com/wp-content/uploads/sites/8/2010/11/hard_hat-1024x685.jpg",
  "https://media.rnztools.nz/rnz/image/upload/s--eARvvsIE--/ar_16:10,c_fill,f_auto,g_auto,q_auto,w_1050/v1691694425/4L4GDK9_building_site_jpg?_a=BACCd2AD",
  "https://agmk.uz/uploads/news/b4e76655a9f04d8d04103c1c31867c81.JPG",
  "https://cdn.property-forum.eu//image/articles/8726/1500/dzwigi-945.jpg",
  "https://cceonlinenews.com/wp-content/uploads/2018/03/Top-construction-companies-in-Kenya.jpg",
  "https://i2-prod.kentlive.news/incoming/article8777019.ece/ALTERNATES/s615/2_Media168389smxx.jpg",
  "https://www.mepmiddleeast.com/cloud/2021/07/06/EM7Whff1-ellington2_1-1200x900.jpg"
]

  

function NewsSection({ title = "Новости" }) {
  const swiperRef = useRef<SwiperCore>()



  const { data: newsData }: { data: NewsType[] } = useMainFetch({
    key: "news",
    endpoint: "/news/",
    searchParams: {
      page: 1,
      limit: 10,
    },
    generateData: res => res?.results || []

  })

  console.log(newsData)



  const prevSlide = () => swiperRef.current && swiperRef.current.slidePrev();
  const nextSlide = () => swiperRef.current && swiperRef.current.slideNext();


  // if (!isStatic && !newsData?.length) return ""

  return (
    <section className="m-container">
      <div className="flex items-center justify-between mb-[17px] sm:mb-[20px] lg:mb-[25px] xl:mb-[32px]">
        <h2 className="main_title">{title}</h2>
        <div className="flex items-center gap-x-[16px]">
          <button onClick={prevSlide} className="news_slider_btn"><LongArrowIcon className="rotate-180 sm:w-[20px] sm:h-auto lg:w-[26px] xl:w-[32px]" /></button>
          <button onClick={nextSlide} className="news_slider_btn"><LongArrowIcon className="sm:w-[20px] sm:h-auto lg:w-[26px] xl:w-[32px]" /></button>
        </div>
      </div>

      <Swiper
        spaceBetween={16}
        slidesPerView={2.13}
        onSwiper={swiper => { swiperRef.current = swiper }}
        breakpoints={{
          1024: {
            slidesPerView: 3.15,
            spaceBetween: 30
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 32
          },
        }}
      >
        {
          !newsData?.length
            ? staticData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-[12px] overflow-hidden bg-[#1E1E1E]">
                  <img
                    className="w-full h-[230.79px] object-cover object-center mb-[8px] sm:h-[250px] xl:h-[230px]"
                    // src={item.image}
                    src={item}
                  />
                  <div className="p-[8px]">
                    <h4 className="mb-[16px] h-[52px] overflow-hidden text-ellipsis text-lg font-medium sm:text-2xl sm:h-[62px]">Довольные клиенты</h4>
                    <p className="h-[65px] overflow-hidden text-ellipsis text-xs sm:text-sm sm:h-[62px]">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
                  </div>
                </div>
              </SwiperSlide>
            ))
            : newsData?.map(item => (
              <SwiperSlide key={item.id}>
                <div className="rounded-[12px] overflow-hidden bg-[#1E1E1E]">
                  <img
                    className="w-full h-[230.79px] object-cover object-center mb-[8px] sm:h-[250px] xl:h-[230px]"
                    // src={item.image}
                    src={"https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?cs=srgb&dl=pexels-expect-best-79873-323705.jpg&fm=jpg"}
                    alt={item.title}
                  />
                  <div className="p-[8px]">
                    <h4 className="mb-[16px] h-[52px] overflow-hidden text-ellipsis text-lg font-medium sm:text-2xl sm:h-[62px]">{item.title}</h4>
                    <p className="h-[65px] overflow-hidden text-ellipsis text-xs sm:text-sm sm:h-[62px]">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))
        }
      </Swiper>
    </section>
  )
}

export default NewsSection