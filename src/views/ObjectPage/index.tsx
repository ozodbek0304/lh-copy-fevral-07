import { useNavigate, useParams } from "react-router-dom"
import useMainFetch from "../../hooks/fetching/useMainFetch"
import IApartments from "./components/IApartments"
import ICategory from "./components/ICategory"
import IForm from "./components/IForm"
import IIntroduce from "./components/IIntroduce"
import ILocation from "./components/ILocation"
import IObjectInfo from "./components/IObjectInfo"
import IObjectSelect from "./components/IObjectSelect"
import { useEffect } from "react"
import { scrollById } from "../../utils/scrollById"


export type ObjectDataType = {
  created_at: string;
  description: string;
  id: number;
  name: string;
  photos: { id: number; photo: string }[];
  rooms: { block: string; count: number; id: number; photo: string; total_area: number }[];
  status: string;
  title: string;
  video: string;
}


function ObjectPage() {
  const navigate = useNavigate()
  const params = useParams()
  const objectId = params?.objectId

  useEffect(() => {
    if (!objectId) navigate("/")
      scrollById("navbar")
  }, [])

  const { data: objectData }: { data: ObjectDataType } = useMainFetch({
    key: `object-${objectId}`,
    endpoint: "/objects/object/",
    searchParams: {
      pk: objectId
    }
  })
  

  return (
    <div className="m-container">
      <IIntroduce />
      <IObjectInfo objectData={objectData} />
      <IObjectSelect objectId={objectId}/>
      <ICategory />
      <IApartments />
      <ILocation />
      <IForm />
    </div>
  )
}

export default ObjectPage