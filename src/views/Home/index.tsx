import { useEffect } from "react"
import FormWithLocation from "../../components/FormWithLocation"
import NewsSection from "../../components/NewsSection"
import IAboutCompany from "./components/IAboutCompany"
import IBuildings from "./components/IBuildings"
import IIntroduce from "./components/IIntroduce"
import { scrollById } from "../../utils/scrollById"
import { useLanguages } from "../../hooks/useLanguages"

function Home() {
  const [t] = useLanguages("main")

  useEffect(() => {
    const hashId = window.location.hash?.replace("#", "")

    if (hashId) scrollById(hashId)
  }, [])


  return (
    <div className="pb-[51px] sm:pb-[80px] lg:pb-[100px] xl:pb-[125px]">
      <IIntroduce />
      <IAboutCompany />
      <IBuildings />
      <NewsSection title={t("news")} />
      <FormWithLocation />
    </div>
  )
}

export default Home