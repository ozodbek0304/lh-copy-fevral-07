import { useState } from "react"
import MTitleBuilding from "../../MTitleBuilding"
import useRouters from "../../../hooks/useRouters"
import { useLanguages } from "../../../hooks/useLanguages"


export const ThirdObjectBlock1 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 1 }) }

  return (
    <div className="absolute pointer-events-none top-[211px] left-[327px]">
      <MTitleBuilding title={`${t("one_block")} 1`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[185px] -top-[30px] w-[110px]`} />

      
      <svg className="pointer-events-none" width="245" height="345" viewBox="0 0 245 345" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M96.5 6L107.5 1.5L148.5 43V47L154.5 53L156 52.5L193 90V100.5L199 105.5V101.5L202 99.5L243.5 141.5L231.5 147.5L232 154.5L149.5 192.5L148 185.5L134.5 192.5L143.5 343.5L53.5 239L30 212V208.5L18.5 197.5L9.5 104.5L6 65L1 60V47L13 40.5L17 44V50L96.5 16.5V6Z" stroke="black"/>
      </svg>
     

    </div>
  )
}

export const ThirdObjectBlock2 = () => {
    const [t] = useLanguages("object")
    const [isActive, setIsActive] = useState(false)
    const { setQueries } = useRouters()
    const clickHandler = (): void => { setQueries({ block: 2 }) }
  
    return (
      <div className="absolute pointer-events-none top-[351px] left-[461px]">
        <MTitleBuilding title={`${t("one_block")} 2`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[200px] top-[15px] w-[110px]`} />
        <svg width="276" height="321" viewBox="0 0 276 321" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            onClick={clickHandler}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            style={{ pointerEvents: "all" }}
            className="object_patch"
            d="M97.5 8L111 1L131.5 20.5L152.5 11.5L168 26.5L189.5 16L192.5 19L203.5 13.5L214.5 25V34L264 83L266.5 80L275 88L272 239.5L111 320L10 206L1 53.5L12 48L13.5 54.5L98.5 15.5L97.5 8Z" stroke="black"/>
        </svg>
      </div>
    )
  }


export const ThirdObjectBlock3 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 3 }) }

  return (
    <div className="absolute pointer-events-none top-[294px] left-[663px]">
      <MTitleBuilding title={`${t("one_block")} 3`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[150px] -top-[10px] w-[110px]`} />
      <svg width="232" height="298" viewBox="0 0 232 298" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }}
          className="object_patch"
          d="M12.5 80.5L1.5 70.5L46.5 50L50 53V59.5L65.5 53V49L98.5 35V33.5L99.5 30L102 26.5L107 25L107.5 21.5L153.5 1.5L162.5 10.5V21.5L217 70.5L217.5 63.5L227.5 73L230.5 71.5L230 87L226 91L215 224L69.5 297L75.5 146L65.5 137.5L63.5 138.5L12.5 91V80.5Z" stroke="black"/>
      </svg>
    </div>
  )
}

export const ThirdObjectBlock4 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 4 }) }

  return (
    <div className="absolute pointer-events-none top-[195px] left-[780px]">
      <MTitleBuilding title={`${t("one_block")} 4`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[185px] top-[0px] w-[110px]`} />
      <svg width="262" height="324" viewBox="0 0 262 324" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }}
          className="object_patch"
          d="M0.5 116L34 100.5M34 100.5L45 110.5L44.5 122.5L98 171.5L99 163.5L109 173L112 171.5V187.5L109 189L98.5 323L238 251.5L256 117.5L261.5 114.5V100.5L144 1L132 6.5V13.5L60.5 48L59.5 39.5L44.5 45V63.5V96.5L34 100.5Z" stroke="black"/>
      </svg>
    </div>
  )
}

export const ThirdObjectBlock5 = () => {
    const [t] = useLanguages("object")
    const [isActive, setIsActive] = useState(false)
    const { setQueries } = useRouters()
    const clickHandler = (): void => { setQueries({ block: 5 }) }
  
    return (
      <div className="absolute pointer-events-none top-[70px] left-[682px]">
        <MTitleBuilding title={`${t("one_block")} 5`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[200px] -top-[15px] w-[110px]`} />
        <svg width="243" height="258" viewBox="0 0 243 258" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            onClick={clickHandler}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            style={{ pointerEvents: "all" }} className="object_patch" d="M231 129.5L242 124.5L146 44L140 47.5V38L96.5 1L85 6V15.5L62 25.5L60 23.5L52 27L54 28.5L34 37L29.5 33L26.5 36L28.5 39L15 45V39L11.5 36L1 41V56L4 58L2 173H3.5L6 173.5L10 175H11.5L14.5 176.5V179V181.5L13.5 184.5L15.5 187.5H17.5L21.5 188.5L22 191L21.5 193L19.5 194L17 195L15.5 197L13.5 198L13 198.5V201V204.5L14.5 205.5L17.5 209L18.5 215L17.5 218.5L15.5 221.5L14.5 224L54.5 257L55.5 246L66 257L74 251.5L79.5 254L83 250.5L88 249.5V245L133 224L135.5 225.5L144.5 219.5L145 189L143.5 188.5V167.5L157.5 163L159.5 170.5L230 137L231 129.5Z" stroke="black"/>
        </svg>
      </div>
    )
  }

