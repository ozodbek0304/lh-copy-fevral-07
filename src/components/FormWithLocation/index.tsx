import { Link } from "react-router-dom"
import { EmailIcon, FacebookIcon, HomeLocationIcon, InstagramIcon, PhoneIcon, TelegramIcon, YoutubeIcon } from "../../components/Icons"
import IForm from "./components/IForm"
import useMainFetch from "../../hooks/fetching/useMainFetch"
import { formatPhone } from "../../utils/formatPhone"
import { useLanguages } from "../../hooks/useLanguages"



function FormWithLocation() {  
  const [t] = useLanguages("main")


  const { data } = useMainFetch({
    key: "about-company",
    endpoint: `/companies/`,
  })

  const social_media = [
    {
      link: data?.you_tube,
      icon: <YoutubeIcon />
    },
    {
      link: data?.instagram,
      icon: <InstagramIcon />
    },
    {
      link: data?.telegram,
      icon: <TelegramIcon />
    },
    {
      link: data?.facebook,
      icon: <FacebookIcon />
    },
  ]


  return (
    <section id="contact" className="m-container mt-[56px] mb-[24px] lg:mt-[100px] relative ">
      <h2 className="main_title mb-[24px]">{t("form_contact")}</h2>
      <div className="bg-[#1E1E1E] rounded-[24px] py-[32px] px-[12px] sm:px-[20px] lg:w-[610px] relative z-10">
        <div className="flex items-center gap-x-[20px] mb-[32px]">
          <HomeLocationIcon className="w-[24px] h-auto" />
          <p className="font-medium flex-1 sm:text-lg lg:text-base">{data?.address}</p>
        </div>

        <div className="grid gap-y-[14px] mb-[40px]">
          {/* Phone Number */}
          <Link to={`tel:${data?.phone}`} className="flex items-center gap-x-[24px]">
            <div className="icon_box">
              <PhoneIcon />
            </div>
            <span className="font-medium text-xl">{formatPhone(data?.phone)}</span>
          </Link>
          {/* Email */}
          <Link to={`mailto:${data?.email}`} className="flex items-center gap-x-[24px]">
            <div className="icon_box">
              <EmailIcon />
            </div>
            <span className="font-medium text-xl">{data?.email}</span>
          </Link>
          {/* Social Media */}
          <div className="flex gap-x-[24px]">
            {
              social_media.map((item, index) => (
                <Link className="icon_box" to={item.link} target="_blank" key={index}>
                  {item.icon}
                </Link>
              ))
            }
          </div>
        </div>

        <IForm />
      </div>

      {/* Location */}
      <div className="lg:absolute lg:w-[450px] lg:top-1/2 lg:-translate-y-1/2 lg:right-0 lg:mt-[20px] xl:w-[700px] 2xl:w-[830px]">
        <iframe
          className="w-full mt-[24px] rounded-[24px] h-[312px] lg:h-[600px]"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5039.735039651641!2d69.23833149182337!3d41.31659925916942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b40d847941d%3A0x5765a18b352df71e!2sTashkent%20City%20Park!5e0!3m2!1sen!2s!4v1726033740741!5m2!1sen!2s`}
          loading="lazy"
        >
        </iframe>
        <div className="absolute inset-0 bg-black/20 pointer-events-none hidden lg:block"></div>
      </div>
    </section>
  )
}

export default FormWithLocation