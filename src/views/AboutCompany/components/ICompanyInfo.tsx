import { useLanguages } from "../../../hooks/useLanguages"

function ICompanyInfo({ data }) {
  const [t] = useLanguages("about_company")

  return (
    <section className="m-container mb-[80px]">
      <h1 className="font-medium text-[32px] sm:text-[36px] md:text-[42px] lg:text-[56px] mb-[16px] sm:mb-[20px] md:mb-[26px] lg:mb-[32px]">{t("about_company")}</h1>
      <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl">{data?.description}</p>
    </section>
  )
}

export default ICompanyInfo