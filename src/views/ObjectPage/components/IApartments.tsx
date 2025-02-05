import { Link, useParams } from "react-router-dom"
import { BuildingIcon } from "../../../components/Icons"
// import useMainFetch from "../../../hooks/fetching/useMainFetch"
import useRouters from "../../../hooks/useRouters"
import { useLanguages } from "../../../hooks/useLanguages"
// import { baseURL } from "../../../utils/requestAuth"


// type DataType = {
//   data: {
//     count: number;
//     id: number;
//     photo: string;
//     total_area: number;
//   }[]
// }


const apartment_image = [
  "https://www.apartments-mitte.de/wp-content/uploads/2023/12/premium-3-1.webp",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/b0/b6/2b/apartment-hotels.jpg?w=1200&h=-1&s=1",
  "https://deluxe-apartments-by-the-railway-station.wroclaw-hotels.com/data/Photos/OriginalPhoto/14166/1416659/1416659211/photo-deluxe-apartments-by-the-railway-station-wroclaw-1.JPEG"
]


function IApartments() {
  const { query } = useRouters()
  const [t] = useLanguages("object")
  const params = useParams()
  const objectId: number = +params?.objectId || 1
  const currentBlock = query?.block || 1
  // const entrance = query?.entrance
  // const currentFloor = query?.floor


  // const { data }: DataType = useMainFetch({
  //   key: `object-rooms`,
  //   endpoint: `/objects/object/room/filter/`,
  //   searchParams: {
  //     block: currentBlock,
  //     object: objectId,
  //     entrance: entrance,
  //     floor: currentFloor,
  //   }
  // })


  // const apartments = data || []


  return (
    <section>
      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 mb-[32px] gap-x-[32px] gap-y-[40px]">
        {
          apartments.map((item, index) => (
            <Link to={`/object/${objectId}/${item.id}`} key={index}>
              <img
                src={baseURL + item.photo}
                alt={"room image"}
                className="w-full object-center object-cover rounded-[12px] h-[262px] mb-[20px]"
              />
              <h4 className="font-medium text-2xl whitespace-nowrap text-ellipsis overflow-hidden">{`${item.count} комнатная квартира`}</h4>
              <h3 className="my-[8px] text-[var(--orange)] font-bold text-3xl">{`${item.total_area} м2`}</h3>
              <h6 className="flex items-center gap-x-[12px]">
                <BuildingIcon className="w-[20px] h-auto" />
                <span>{`${t("one_block")} ${currentBlock}`}</span>
              </h6>
            </Link>
          ))
        }
      </div> */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 mb-[32px] gap-x-[32px] gap-y-[40px]">
        {
          apartment_image.map((item, index) => (
            <Link to={`/object/${objectId}/${index + 1}`} key={index}>
              <img
                src={item}
                alt={"room image"}
                className="w-full object-center object-cover rounded-[12px] h-[262px] mb-[20px]"
              />
              <h4 className="font-medium text-2xl whitespace-nowrap text-ellipsis overflow-hidden">{`${2} комнатная квартира`}</h4>
              <h3 className="my-[8px] text-[var(--orange)] font-bold text-3xl">{`${40} м2`}</h3>
              <h6 className="flex items-center gap-x-[12px]">
                <BuildingIcon className="w-[20px] h-auto" />
                <span>{`${t("one_block")} ${currentBlock}`}</span>
              </h6>
            </Link>
          ))
        }
      </div>

      <div className="grid sm:grid-cols-2 gap-x-[32px] gap-y-[40px]">
        {
          Array(2).fill(null).map((_, index) => (
            <Link to={`/object/1/2`} key={index}>
              <img
                src={
                  index % 2 === 0
                    ? "https://www.thespruce.com/thmb/BpZG-gG2ReQwYpzrQg302pezLr0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txp3d216bb1tUq300_Medium_4988078-56c96ac19def4bf8ba430cf5063b6b38.jpg"
                    : "https://cdn.sanity.io/images/v48q37k7/production/d09208183125ab47493d5de2f8710b6faa27d7cc-3000x2000.jpg"
                }
                // src={
                //   index % 2 === 0
                //   ? "https://www.thespruce.com/thmb/BpZG-gG2ReQwYpzrQg302pezLr0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txp3d216bb1tUq300_Medium_4988078-56c96ac19def4bf8ba430cf5063b6b38.jpg",
                //   : "https://cdn.sanity.io/images/v48q37k7/production/d09208183125ab47493d5de2f8710b6faa27d7cc-3000x2000.jpg"
                // }
                alt=""
                className="w-full object-center object-cover rounded-[12px] h-[262px] mb-[20px]"
              />
              <h4 className="font-medium text-2xl whitespace-nowrap text-ellipsis overflow-hidden">3 комнатная квартира</h4>
              <h3 className="my-[8px] text-[var(--orange)] font-bold text-3xl">{50 + (index + 2) * 3}</h3>
              <h6 className="flex items-center gap-x-[12px]">
                <BuildingIcon className="w-[20px] h-auto" />
                <span>{t("one_block")} {currentBlock}</span>
              </h6>
            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default IApartments