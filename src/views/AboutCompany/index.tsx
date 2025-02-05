import FormWithLocation from "../../components/FormWithLocation"
import NewsSection from "../../components/NewsSection"
import useMainFetch from "../../hooks/fetching/useMainFetch"
import { useLanguages } from "../../hooks/useLanguages"
import ICompanyInfo from "./components/ICompanyInfo"
import IIntroduce from "./components/IIntroduce"
import IStatistics from "./components/IStatistics"
import IVideSection from "./components/IVideSection"

function AboutCompany() {
  const [t] = useLanguages("about_company")

  const { data } = useMainFetch({
    key: "about-company",
    endpoint: "/companies/"
  })


  return (
    <div className="pb-[91px]">
      <IIntroduce />
      <ICompanyInfo data={data} />
      <IStatistics data={data} />
      <IVideSection />
      <NewsSection title={t("satisfied_customers")} />
      <FormWithLocation />
    </div>
  )
}

export default AboutCompany