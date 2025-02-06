import { Link } from "react-router-dom"
import { PlayIcon } from "../../../components/Icons"
import { scrollById } from "../../../utils/scrollById"
import useMainFetch from "../../../hooks/fetching/useMainFetch"
import { useLanguages } from "../../../hooks/useLanguages"

function IIntroduce({objectId}) {
  const [t] = useLanguages("object")

  const { data, isLoading } = useMainFetch({
    key: "about-company",
    endpoint: `/companies/`,
  })

  const staticData = [
    {
      img: "url(/images/example/building.jpg)",
      video: 'https://www.youtube.com/watch?v=_qEG9X3G7q0&ab_channel=Underworld'
    },
    {
      img: "url(/images/xonobod/3.jpg)",
      video: 'https://www.youtube.com/watch?v=_qEG9X3G7q0&ab_channel=Underworld'
    },
    {
      img: "url(/images/example/building.jpg)",
      video: 'https://www.youtube.com/watch?v=_qEG9X3G7q0&ab_channel=Underworld'
    },
    {
      img: "url(/images/example/building.jpg)",
      video: 'https://www.youtube.com/watch?v=_qEG9X3G7q0&ab_channel=Underworld'
    },
    {
      img: "url(/images/obj-5/2.jpg)",
      video: 'https://www.youtube.com/watch?v=_qEG9X3G7q0&ab_channel=Underworld'
    },
    {
      img: "url(/images/samarkand/1.png)",
      video: 'https://www.youtube.com/watch?v=_qEG9X3G7q0&ab_channel=Underworld'
    },
    {
      img: "url(/images/urikzar/2.jpg)",
      video: 'https://www.youtube.com/watch?v=_qEG9X3G7q0&ab_channel=Underworld'
    },
    {
      img: "url(/images/vernissage/3.jpg)",
      video: 'https://www.youtube.com/watch?v=_qEG9X3G7q0&ab_channel=Underworld'
    },
  ]


  return (
    <main
      style={{ backgroundImage: staticData[objectId - 1].img }}
      className="bg-center bg-cover relative h-[343px] rounded-[12px] px-[16px] flex items-center sm:h-[400px] md:px-[120px] lg:px-0 lg:h-[600px] xl:h-[720px]"
    >
      <div className="object_bg_shadow"></div>

      <div className="w-full relative lg:ml-[124px]">
        <h1 className="text-[2rem] font-medium mb-[12px] sm:text-4xl lg:text-5xl xl:text-[56px]">{t("about_object")}</h1>
        <h4 className="font-medium mb-[32px] sm:text-lg md:text-xl lg:text-2xl xl:text-[2.5rem]">{t("brief_note")}</h4>
        <div className="grid gap-y-[16px] lg:grid-cols-2 lg:w-[600px]">
          <button onClick={() => scrollById("send-request-form")} className="bg-[#FF8225] py-[16px] text-xl font-medium rounded-[12px] lg:w-[284px]">{t("submit_requrest")}</button>
          <Link to={`tel:${data?.phone}`} className={`${isLoading ? "pointer-events-none" : ""} bg-white text-center text-[#FF8225] py-[16px] text-xl font-medium lg:w-[284px] rounded-[12px]`}>{t("call")}</Link>
        </div>
      </div>

      <Link to={staticData[objectId - 1].video} className="items-center gap-x-[24px] w-[235px] absolute bottom-[50px] right-[36px] xl:bottom-[80px] xl:right-[56px] scale-[0.9] xl:scale-100 hidden lg:flex">
        <span className="flex-1 font-medium text-xl text-end">{t("watch_video")}</span>
        <PlayIcon className="w-[60px] h-auto" fill="#fff" playFill="#FF8225" />
      </Link>
    </main>
  )
}

export default IIntroduce