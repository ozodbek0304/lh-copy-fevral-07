import { Link } from "react-router-dom"
import { PlayIcon } from "../../../components/Icons"
import { useLanguages } from "../../../hooks/useLanguages"

function IIntroduce() {
  const [t] = useLanguages("about_company")

  return (
    <main
      style={{ backgroundImage: `url(https://sooftgroup.com/project/about.jpg)` }}
      className="h-[380px] rounded-[24px] lg:rounded-none bg-center bg-cover relative mb-[80px] mx-auto w-11/12 xs:w-[344px] sm:w-[590px] sm:h-[400px] md:w-[720px] md:h-[500px] lg:w-full"
    >
      <div className="news_img_shadow"></div>
      <div className="relative h-full lg:w-[970px] xl:w-[1210px] 2xl:w-[1356px] mx-auto">
        <Link to="https://www.youtube.com/watch?v=_qEG9X3G7q0&ab_channel=Underworld" className="flex items-center gap-x-[24px] absolute bottom-[21px] right-[16px] z-10 md:bottom-[40px] md:right-[30px] lg:bottom-[80px] lg:right-[56px]">
          <span className="text-xl font-medium">{t("watch_video")}</span>
          <PlayIcon className="w-[60px] h-auto" fill="#fff" playFill="var(--orange)" />
        </Link>
      </div>
    </main>
  )
}

export default IIntroduce