// import useMainFetch from "../../../../hooks/fetching/useMainFetch";
// import { baseURL } from "../../../../utils/requestAuth";
import ICard from "../ICard"

// const screenWidth = window.innerWidth;
const dataList = [
  {
    // photo: "https://res.cloudinary.com/dtrhqmm9b/image/upload/v1725611567/05_1_seoyrp.png",
    photo: "../../../../public/images/example/1.jpg",
    title: "Building",
    status: "COMPLETED",
    id: 1,
    location: "Яккасарайский район"
  },
  {
    photo: "../../../../public/images/xonobod/1.jpg",
    title: "Building",
    status: "COMPLETED",
    id: 2,
    location: "Янгихаятский район"
  },
  {
    photo: "../../../../public/images/uysozlar/uysozlar.png",
    title: "Building",
    status: "IN_PROCESS",
    id: 3,
    location: "Какойто район"
  },
  {
    photo: "../../../../public/images/uchtalik-uy/1.png",
    title: "Building",
    status: "IN_PROCESS",
    id: 4,
    location: "Какойто район"
  },
  {
    photo: "../../../../public/images/obj-5/1.png",
    title: "Building",
    status: "IN_PROCESS",
    id: 5,
    location: "Какойто район"
  },
  {
    photo: "../../../../public/images/samarkand/1.png",
    title: "Building",
    status: "IN_PROCESS",
    id: 6,
    location: "Какойто район"
  },
  {
    photo: "../../../../public/images/urikzar/1.jpg",
    title: "Building",
    status: "IN_PROCESS",
    id: 7,
    location: "Какойто район"
  },
  {
    photo: "../../../../public/images/vernissage/1.png",
    title: "Building",
    status: "IN_PROCESS",
    id: 8,
    location: "Какойто район"
  },
]


function IBuildings() {
  // const limit = screenWidth >= 640 ? 9 : 4;


  // const { data: objectsData } = useMainFetch({
  //   key: "objects",
  //   endpoint: `/objects/`,
  //   searchParams: {
  //     limit,
  //     page: 1
  //   },
  //   generateData: (res) => res?.results?.map(item => ({
  //     title: item?.title,
  //     status: item?.status,
  //     id: item?.id,
  //     photo: item?.photos?.length
  //       ? `${baseURL}${item?.photos?.[0]?.photo}`
  //       : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
  //   }))
  // })


  return (
    <section id="buildings" className="m-container grid grid-cols-1 gap-[24px] xs:grid-cols-2 sm:grid-cols-3 mb-[80px]">
      {
        // objectsData?.map((item, index) => (
        dataList?.map((item, index) => (
          <ICard
            key={index}
            image={item?.photo}
            title={item?.title}
            location={item.location}
            id={item?.id}
            status={item?.status}
          />
        ))
      }
    </section>
  )
}

export default IBuildings