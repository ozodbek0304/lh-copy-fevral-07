import { Link, useNavigate } from "react-router-dom"
import { AngleArrowIcon, MenuIcon, PhoneIcon } from "../../components/Icons"
import { createPortal } from "react-dom"
import { useState } from "react"
import { scrollById } from "../../utils/scrollById"
import useMainFetch from "../../hooks/fetching/useMainFetch"
import { formatPhone } from "../../utils/formatPhone"
import MobileMenu from "./MobileMenu"
import { useLanguages } from "../../hooks/useLanguages"





function Navbar() {
  const navigate = useNavigate()
  const [t, changeLng] = useLanguages("main")

  const [lngModal, setLngModal] = useState(false)
  const [mobileModal, setMobileModal] = useState(false)
  const [currentLng, setCurrentLng] = useState(localStorage.getItem("lng") || "ru")
  const lngTitle = currentLng === "ru" ? "РУ" : "UZ"

  const nav_list = [
    {
      title: t("about_company") || "О компании",
      link: "about-company",
      havePage: true,
    },
    {
      title: t("projects") || "Проекты",
      link: "buildings",
    },
    {
      title: t("news") || "Новости",
      link: "news",
      havePage: true,
    },
    {
      title: t("contact") || "Контакты",
      link: "contact",
    },
  ]


  const { data } = useMainFetch({
    key: "about-company",
    endpoint: `/companies/`,
  })


  const changeLngHandler = (lng: string) => {
    changeLng(lng)
    setCurrentLng(lng)
    setLngModal(false)
  }

  const scrollByIdHandler = (id: string) => {
    scrollById(id)
    navigate(`/#${id}`)
  }


  return (
    <header id="navbar" className="m-container flex items-center justify-between my-[16px]">
      <Link to="/">
        <img className="w-[64px] h-[64px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px]" src="/images/logo.png" alt="Land House logo image" />
      </Link>

      {/* Mobile Menu Button */}
      <button onClick={() => setMobileModal(true)} className="lg:hidden">
        <MenuIcon />
      </button>

      {/* Desktop Navbar */}
      <div className="hidden lg:flex lg:items-center lg:gap-x-[30px] xl:gap-x-[40px] xl:text-lg 2xl:text-xl">
        <nav>
          <ul className="flex gap-x-[30px] xl:gap-x-[40px]">
            {
              nav_list.map(item => (
                <li key={item.link}>
                  {
                    item.havePage ?
                      <Link to={item.link} className="hover:text-[var(--orange)] transition-all">
                        {item.title}
                      </Link>
                      :
                      <button onClick={() => scrollByIdHandler(item.link)} className="hover:text-[var(--orange)] transition-all">
                        {item.title}
                      </button>
                  }
                </li>
              ))
            }
          </ul>
        </nav>

        {/* Language Selector */}
        <div className="relative">
          <button onClick={() => setLngModal(true)} className="flex items-center gap-x-[8px] xl:gap-x-[10px] 2xl:gap-x-[12px]">
            <span>{lngTitle}</span>
            <AngleArrowIcon className={`${lngModal ? "-rotate-180" : ""} transition-all duration-300 h-auto w-[18px] xl:w-[21px] 2xl:w-[24px]`} />
          </button>

          {
            lngModal &&
            <div className="grid absolute right-0 top-full w-full z-50 bg-black">
              <button onClick={() => changeLngHandler("uz")} className="py-[5px] hover:bg-white/20 transition-all">UZ</button>
              <button onClick={() => changeLngHandler("ru")} className="py-[5px] hover:bg-white/20 transition-all">РУ</button>
              {
                createPortal(
                  <div onClick={() => setLngModal(false)} className="fixed inset-0 z-40"></div>,
                  document.body
                )
              }
            </div>
          }
        </div>

        {/* <button className="bg-[var(--orange)] px-[24px] py-[5.5px] rounded-[12px]"> */}
        {/* <button className="bg-[var(--orange)] px-[18px] py-[4px] rounded-[12px] xl:px-[24px] xl:py-[5.5px]">
          360 <sup>o</sup>
        </button> */}

        <Link to={`tel:${data?.phone}`} className="flex items-center gap-x-[10px]  xl:gap-x-[16px] 2xl:gap-x-[24px]">
          <span className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center">
            <PhoneIcon className="w-[20px] h-auto" />
          </span>
          <span className="flex-1">{formatPhone(data?.phone)}</span>
        </Link>
      </div>

      {
        mobileModal &&
        <MobileMenu close_modal={() => { setMobileModal(false) }} nav_list={nav_list} />
      }
    </header>
  )
}

export default Navbar