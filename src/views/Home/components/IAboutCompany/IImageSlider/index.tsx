import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ControlSlider from "../../../../../components/ControlSlider";
import { useRef, useState } from "react";

function IImageSlider({
  images_list,
}: {
  images_list: { id: number; image: string }[];
}) {
  const swiperRef = useRef<SwiperCore>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlideByIndex = (index: number): void => {
    swiperRef.current && swiperRef.current.slideTo(index);
  };
  const onSlideChange = (swiper: SwiperCore): void => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <div className="lg:flex lg:flex-col">
      <Swiper
        spaceBetween={30}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={onSlideChange}
        className="lg:w-[350px] xl:w-[500px] 2xl:w-[526px]"
      >
        {images_list.map((image_link, index) => (
          <SwiperSlide key={index} className="">
            <img
              className="w-[344px] h-[242px] rounded-[16px] object-cover object-center sm:mx-auto lg:h-full lg:w-[350px] xl:w-[500px] 2xl:w-[526px]"
              src={image_link.image}
              alt="building image"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <ControlSlider
        className="my-[24px]"
        list={images_list}
        clickHandler={changeSlideByIndex}
        currentIndex={currentIndex}
      />
    </div>
  );
}

export default IImageSlider;
