import { Link } from "react-router-dom"
import { PlayIcon } from "../../components/Icons"
import NewsSection from "../../components/NewsSection"
import { useLanguages } from "../../hooks/useLanguages"

function News() {
  const [t] = useLanguages("news")

  return (
    <div className="mb-[100px]">
      <main
        style={{ backgroundImage: `url(https://sooftgroup.com/project/about.jpg)` }}
        className="h-[720px] bg-center bg-cover relative mb-[80px]"
      >
        <div className="news_img_shadow"></div>

        <Link to="https://www.youtube.com/watch?v=_qEG9X3G7q0&ab_channel=Underworld" className="flex items-center gap-x-[24px] absolute bottom-[80px] right-[56px] z-10">
          <span className="text-xl font-medium">{t("watch_video")}</span>
          <PlayIcon className="w-[60px] h-auto" fill="#fff" playFill="var(--orange)" />
        </Link>
      </main>

      <section className="m-container mb-[80px]">
        <h1 className="font-medium text-[56px] mb-[32px]">{t("title")}</h1>
        <p className="text-2xl">{t("description")}</p>
      </section>

      <NewsSection title={t("news")} />
    </div>
  )
}

export default News