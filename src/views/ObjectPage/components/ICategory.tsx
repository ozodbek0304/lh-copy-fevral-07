import { Select } from "antd"
import useRouters from "../../../hooks/useRouters"
// import useMainFetch from "../../../hooks/fetching/useMainFetch"
// import { useParams } from "react-router-dom"
import { useLanguages } from "../../../hooks/useLanguages"


// type BlockDataType = {
//   data: {
//     id: number;
//     name: string;
//     number: string;
//     max_entrance: number;
//     max_floor: number;
//   }[]
// }


function ICategory() {
  const { query, setQueries } = useRouters()
  // const { objectId } = useParams()
  const [t] = useLanguages("object")


  const currentBlock = query?.block || 1


  // const { data }: BlockDataType = useMainFetch({
  //   key: `object-${objectId}`,
  //   endpoint: `/objects/object/room/filter/choices/?pk=${objectId}`
  // })


  // const object_options = data?.map(item => ({ value: item.id, label: item.name }))
  // console.log(object_options)


  return (
    <div className="mt-[40px] lg:mt-[60px] xl:mt-[80px] mb-[40px]">
      <h3 className="font-bold text-[32px] mb-[24px] sm:mb-[28px] lg:mb-[35px] xl:mb-[40px]">
        {t("apartments_info")} <span className="text-[var(--orange)]">{t("block")} - {currentBlock}</span>
      </h3>

      <div className="custom_style grid grid-cols-1 lg:grid-cols-3 gap-x-[20px] px-[8px] sm:px-[16px] py-[16px] rounded-[16px] bg-[#1E1E1E] gap-y-[20px]">
        <Select
          placeholder="Блок"
          // options={object_options || []}  Комнатные
          value={{ value: currentBlock, label: `${t("one_block")} ${currentBlock}` }}
          options={Array(8).fill(null).map((_, index) => ({ value: index + 1, label: `${t("one_block")} ${index + 1}` }))}
          onChange={(value) => {
            setQueries({ block: value })
          }}
          className="bg-black w-full h-[56px]"
        />
        <Select
          placeholder={t("part")}
          onChange={(value) => {
            setQueries({ entrance: value })
          }}
          options={Array(4).fill(null).map((_, index) => ({ value: index + 1, label: `${t("part")} ${index + 1}` }))}
          className="bg-black w-full h-[56px]"
        />
        <Select
          placeholder={t("floor")}
          onChange={(value) => {
            setQueries({ floor: value })
          }}
          options={Array(15).fill(null).map((_, index) => ({ value: index + 1, label: `${t("floor")} ${index + 1}` }))}
          className="bg-black w-full h-[56px]"
        />
      </div>
    </div>
  )
}

export default ICategory