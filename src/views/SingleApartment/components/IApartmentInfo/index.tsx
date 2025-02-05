import { baseURL } from "../../../../utils/requestAuth"
import { useCallback, useState } from "react"
import IFormModal from "../IFormModal"
import { useLanguages } from "../../../../hooks/useLanguages"


function IApartmentInfo({ data }: ApartmentDataType) {
  const [t] = useLanguages("apartment")
  const [formModal, setFormModal] = useState(false)

  const onClose = useCallback(() => setFormModal(false), [])

  const apartment_infos = [
    {
      title: t("floor"),
      value: data?.floor,
    },
    {
      title: t("part"),
      value: data?.entrance,
    },
    {
      title: t("rooms_count"),
      value: data?.count,
    },
  ]


  return (
    // <section className="m-container flex items-center gap-[62px] mb-[81px]">
    <section className="m-container flex items-center gap-[62px] mb-[81px] flex-col lg:flex-row">
      {/* <div className="p-[16px] rounded-[16px] bg-[#1E1E1E] w-[472px]"> */}
      <div className="p-[16px] rounded-[16px] bg-[#1E1E1E] w-full md:w-[472px]">
        <h3 className="font-medium text-[28px] mb-[40px]">{t("about_premises")}</h3>

        {/* <div className="text-center flex items-start justify-between mb-[40px]"> */}
        <div className="text-center flex flex-col items-center justify-between mb-[40px] gap-y-[40px] md:flex-row">
          <div className="flex flex-col items-center gap-y-[4px]">
            <span className="text-2xl font-medium"><span className="font-bold text-[var(--orange)]">{data?.price?.toLocaleString()?.replace(/,/g, " ")}</span> {t("sum")}</span>
            <span>{t("price")}</span>
          </div>

          <div className="flex flex-col items-center gap-y-[4px]">
            <span className="text-[32px] font-bold text-[var(--orange)]">{data?.total_area} {t("m")}²</span>
            <span>{t("square")}</span>
          </div>
        </div>

        {/* <div className="text-center grid grid-cols-3 mb-[40px]"> */}
        <div className="text-center grid grid-cols-1 mb-[40px] gap-y-[40px] md:grid-cols-3">
          {
            apartment_infos.map((item, index) => (
              <div className="flex flex-col gap-y-[]" key={index}>
                <span className="text-[32px] font-bold text-[var(--orange)]">{item.value}</span>
                <span className="text-2xl">{item.title}</span>
              </div>
            ))
          }
        </div>

        {/* <Link to="tel:+998112223344" className="block text-center w-full py-[16px] text-xl font-medium rounded-[12px] bg-[var(--orange)]">Забронировать</Link> */}
        <button onClick={() => setFormModal(true)} className="block text-center w-full py-[16px] text-xl font-medium rounded-[12px] bg-[var(--orange)]">{t("shop")}</button>
      </div>

      <img
        className="w-full h-[242px] sm:h-[300px] md:h-[350px] bg-cover bg-center rounded-[12px] lg:h-[410px] lg:w-[430px] object-center object-cover lg:flex-1"
        // src="https://furnishd.com.au/cdn/shop/files/Collins-Arch-000_Large_landscape_1.jpg?v=1683286881&width=1280"
        src={baseURL + data?.photo}
        alt="Apartment image"
      />
      {formModal && <IFormModal onClose={onClose} />}
    </section>
  )
}

export default IApartmentInfo