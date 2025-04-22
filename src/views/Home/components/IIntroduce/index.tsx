import { useRef, useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowIcon, PlayIcon } from "../../../../components/Icons";
import { Link } from "react-router-dom";
import { useLanguages } from "../../../../hooks/useLanguages";
import useMainFetch from "../../../../hooks/fetching/useMainFetch";

type Banner = {
  id: number;
  title: string;
  description: string;
  url: string;
  youtube_url: string;
  image: string;
};

function IIntroduce() {
  const swiperRef = useRef<SwiperCore>();
  const smallSwiperRef = useRef<SwiperCore>();
  const [t] = useLanguages("main");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const { data, isSuccess } = useMainFetch({
    key: "banner-list",
    endpoint: `/banners-list/`,
  });

  const changeSlideByIndex = (index: number): void => {
    swiperRef.current?.slideTo(index);
  };

  const slideChangeView = (swiper: SwiperCore): void => {
    setCurrentSlideIndex(swiper.activeIndex);
    smallSwiperRef.current?.slideTo(swiper.activeIndex);
  };

  const smallSlideChangeView = (swiper: SwiperCore): void => {
    setCurrentSlideIndex(swiper.activeIndex);
    swiperRef.current?.slideTo(swiper.activeIndex);
  };

  const prevSlide = () => swiperRef.current?.slidePrev();
  const nextSlide = () => swiperRef.current?.slideNext();

  const currentItem = isSuccess && data?.length > 0 && data[currentSlideIndex];

  return (
    <div>
      <div className="relative m-container overflow-hidden">
        {/* Main Swiper */}
        <Swiper
          autoplay={{ delay: 4000 }}
          modules={[Autoplay]}
          spaceBetween={40}
          onSlideChange={slideChangeView}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {isSuccess &&
            data?.length > 0 &&
            data?.map((item: Banner) => (
              <SwiperSlide key={item.id}>
                <img
                  className="w-full h-[380px] object-cover rounded-[16px] lg:h-[400px] xl:h-[450px] 2xl:h-[580px]"
                  src={item.image}
                  alt={item.title}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        {/* Overlay */}
        <div className="shadow_box absolute inset-0 z-10"></div>

        {/* Slide Text + Button */}
        {currentItem && (
          <div className="absolute inset-0">
            <div className="absolute top-1/2 -translate-y-1/2 z-10 w-full px-[15px] lg:left-[86px]">
              <h1 className="font-medium text-4xl xl:text-[72px]">
                {currentItem.title}
              </h1>
              <h4 className="font-medium my-[4px] xl:text-[40px] lg:mb-[16px] xl:mb-[10px]">
                {currentItem.description}
              </h4>
              <Link
                target="_blank"
                to={currentItem.url}
                className="text-center text-[var(--orange)] py-[10px] px-[8px] w-full rounded-[8px] bg-white mt-[24px] lg:w-auto lg:px-[10px]"
              >
                {t("btn")}
              </Link>
            </div>

            {/* Dots */}
            <ul className="absolute z-10 bottom-[32px] w-full flex justify-center gap-x-[8px] lg:flex-col lg:w-auto lg:top-1/2 lg:-translate-y-1/2 lg:left-[24px]">
              {isSuccess &&
                data?.length > 0 &&
                data?.map((_: any, index: number) => (
                  <li key={index}>
                    <button
                      onClick={() => changeSlideByIndex(index)}
                      className={`${
                        currentSlideIndex === index ? "bg-white" : ""
                      } transition-all w-[12px] h-[12px] border border-white rounded-full`}
                    />
                  </li>
                ))}
            </ul>

            {/* YouTube Link */}
            <Link
              target="_blank"
              to={currentItem.youtube_url}
              className="items-center gap-x-[24px] hidden lg:flex absolute bottom-[90px] right-[30px] z-20 xl:right-[56px] 2xl:bottom-[115px]"
            >
              <span className="text-[var(--orange)] font-medium">
                {t("video_btn")}
              </span>
              <PlayIcon />
            </Link>
          </div>
        )}
      </div>

      {/* Small Swiper with preview thumbnails */}
      <div className="m-container">
        <div className="flex justify-end relative -top-[15px] z-10 lg:justify-between lg:-top-[70px] xl:gap-x-[30px] 2xl:-top-[85px]">
          {/* Arrows */}
          <div className="hidden lg:flex flex-1 justify-center xl:gap-x-[26px]">
            <button
              onClick={prevSlide}
              className="bg-white py-[19.6px] px-[34px] rounded-[16px] scale-[0.8] xl:scale-100"
            >
              <ArrowIcon />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white py-[19.6px] px-[34px] rounded-[16px] scale-[0.8] rotate-180 xl:scale-100"
            >
              <ArrowIcon />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="w-[330px] sm:w-[360px] lg:w-[700px] xl:w-[900px] 2xl:w-[1010px]">
            <Swiper
              onSwiper={(swiper) => (smallSwiperRef.current = swiper)}
              slidesPerView={2.5}
              onSlideChange={smallSlideChangeView}
              breakpoints={{
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3.8 },
              }}
            >
              {isSuccess &&
                data?.length > 0 &&
                data?.map((item: Banner, index: number) => (
                  <SwiperSlide key={item.id}>
                    <div className="w-[120px] h-[108px] relative rounded-[14px] overflow-hidden lg:w-[220px] lg:h-[144px] 2xl:w-[250px] 2xl:h-[174px]">
                      <img
                        className="w-full h-full object-cover object-center"
                        src={item.image}
                        alt={item.title}
                      />
                      <div
                        className={`${
                          currentSlideIndex === index ? "opacity-0" : ""
                        } transition-all duration-500 absolute inset-0 backdrop-blur-[5px] bg-[#25252540] flex justify-center items-center`}
                      >
                        <img
                          className="w-[60px] h-[60px]"
                          src="/images/logo.png"
                          alt="Land House logo"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IIntroduce;
