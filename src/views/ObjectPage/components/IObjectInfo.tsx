import IImageSlider from "./IImageSlider"
import { ObjectDataType } from ".."
import { useLanguages } from "../../../hooks/useLanguages"


function IObjectInfo({ objectData }: { objectData: ObjectDataType }) {
  const [t] = useLanguages("object")
  console.log(objectData)


  return (
    <section className="mt-[40px] lg:grid lg:grid-cols-2 lg:items-center">
      <div className="lg:order-last">
        <h2 className="font-medium text-[2rem] sm:text-center sm:text-4xl md:text-5xl 2xl:text-[3.5rem]">
          {t("about_object")}
        </h2>
        <p className="text-sm font-medium mt-[12px] mb-[28px] sm:w-10/12 sm:mx-auto sm:text-base md:text-xl md:mt-[20px] 2xl:mt-[16px] 2xl:text-2xl lg:w-full">
          {objectData?.description}
        </p>
      </div>
      <IImageSlider objectData={objectData} />
    </section>
  )
}

export default IObjectInfo