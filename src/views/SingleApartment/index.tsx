import { useParams } from "react-router-dom"
import useMainFetch from "../../hooks/fetching/useMainFetch"
import IApartmentInfo from "./components/IApartmentInfo"
import IMainSection from "./components/IMainSection"


function SingleApartment() {
  const { apartmentId } = useParams()


  const { data }: ApartmentDataType = useMainFetch({
    key: `apartment-${apartmentId}`,
    endpoint: `/objects/object/room/?pk=${apartmentId}`
  })


  return (
    <div>
      <IMainSection />
      <IApartmentInfo data={data} />
    </div>
  )
}

export default SingleApartment