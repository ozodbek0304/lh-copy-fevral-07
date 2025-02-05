import { useState } from "react"
import MTitleBuilding from "../../MTitleBuilding"
import useRouters from "../../../hooks/useRouters"
import { useLanguages } from "../../../hooks/useLanguages"


export const SecondObjectBlock1 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 1 }) }

  return (
    // <div className="absolute pointer-events-none top-[188px] left-[88px]">
    <div className="absolute pointer-events-none top-[197px] left-[175px]">
      <MTitleBuilding title={`${t("one_block")} 1`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[185px] -top-[30px] w-[110px]`} />

      
      <svg className="pointer-events-none" width="275" height="336" viewBox="0 0 275 336" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M19 113L1.5 85L3 82.5L20.5 74L20 71.5L20.5 69.5L35 62L32.5 57V54.5L134.5 7L140.5 13L155.5 6L159 8.5L175 0.5H176.5L193.5 21L195 24L196 30L193.5 31.5L195 40L203.5 51L211.5 47L210.5 44.5L213.5 43L232 67.5L234.5 77.5L232 80L272 252.5L274.5 255.5V262.5V265.5L262.5 271.5L264 277.5L252 283V284.5L254.5 290L224.5 305.5L223 304L221 303.5V301L219 299H217H215.5L213.5 297.5L212 295.5H210L207.5 297.5H205.5L203.5 295.5H202H199V297.5L196.5 299H194V301L191 303.5H188L185 305.5V309L187 314.5L185 317.5V323V327L182.5 329L173.5 334.5L172 332L170 330.5L163 334.5H160.5L159 332L155 330.5L153 327H151H148.5H145L141 329H139.5H137V332L134 334.5L122 314.5L118.5 307.5V304L104.5 276.5L102 274H97L92 276.5L89 269.5L92 266.5L42.5 164L40 157L19 113Z" stroke="black" />
      </svg>
     

    </div>
  )
}

export const SecondObjectBlock2 = () => {
    const [t] = useLanguages("object")
    const [isActive, setIsActive] = useState(false)
    const { setQueries } = useRouters()
    const clickHandler = (): void => { setQueries({ block: 2 }) }
  
    return (
      <div className="absolute pointer-events-none top-[160px] left-[383px]">
        <MTitleBuilding title={`${t("one_block")} 2`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[200px] top-[15px] w-[110px]`} />
        <svg width="226" height="332" viewBox="0 0 226 332" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            onClick={clickHandler}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            style={{ pointerEvents: "all" }}
            className="object_patch"
            d="M20.5 73L1 81.5L20.5 103.5L24.5 115H23V117L65.5 297.5L67.5 299L74.5 295L81.5 302V313.5L84.5 322L89.5 330.5L92.5 328L101.5 322L97.5 319V313.5V308H101.5H105.5L108 305.5L113.5 302L118.5 299V295H121.5V299L124 302V299L127.5 295L130.5 302L134.5 299H141.5L144.5 295H149.5V299L156 302H159L164.5 305.5L183 291.5L191.5 302L208 291.5V284.5L216.5 280V274L225.5 268V265L224 262.5L225.5 261V257.5L223 77.5L224.5 76.5V66L203 45L195 50.5L173.5 27L180.5 22.5L159.5 1.5L144.5 9.5L141.5 6.5L128.5 14.5L123 8L26.5 56L31 62L18 68.5L20.5 73Z" stroke="black"/>
        </svg>
      </div>
    )
  }


export const SecondObjectBlock3 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 3 }) }

  return (
    <div className="absolute pointer-events-none top-[50px] left-[501px]">
      <MTitleBuilding title={`${t("one_block")} 3`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[150px] -top-[10px] w-[110px]`} />
      <svg width="207" height="308" viewBox="0 0 207 308" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }}
          className="object_patch"
          d="M3.5 86.5L7.5 120V121.5L11 125.5L24 117.5L27 120L41.5 112.5L62.5 133.5L55.5 138L77 161.5L85 156L106.5 177V187.5L105 188.5L107 298H112H115.5L118.5 300.5H122.5H126.5V304.5L130 307L140.5 300.5L145 307L171 291V287.5V284.5L173.5 281V277V274.5L176.5 271V268L181 264.5V262.5L185 264.5L188.5 262.5L202 70.5L204.5 68.5L206 58.5L183.5 39.5L176.5 44L160.5 29.5V28L163 26.5V20L142 1L128.5 10L124.5 7L113 13.5L106.5 7.5L23 47.5V55L15 60.5V64.5L0.5 71.5V81.5L3.5 86.5Z" stroke="black"/>
      </svg>
    </div>
  )
}

export const SecondObjectBlock4 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 4 }) }

  return (
    <div className="absolute pointer-events-none top-[20px] left-[684px]">
      <MTitleBuilding title={`${t("one_block")} 4`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[185px] top-[0px] w-[110px]`} />
      <svg width="202" height="323" viewBox="0 0 202 323" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }}
          className="object_patch"
          d="M195.5 68L155 245.5L154 250.5L119 271.5V279L113.5 283V286.5L115.5 288.5L116 292.5H110V290L101.5 283L64.5 304L63 316L59.5 318.5H58L56 316L53.5 314H50.5H48L45 312.5H42L39.5 314L37 316V318.5H35.5L34 320.5L31.5 322L28.5 320.5L27.5 318.5V316L26.5 308.5L25.5 307L24 305.5L22.5 304L20.5 302.5V300.5V298.5H19L18 296H16L13.5 294.5V291.5L12 293L10 291.5L8 290L6.5 291.5L20 99.5L22.5 97.5L24 87.5L1.5 68.5L13.5 62.5V58L20.5 54V46.5L98.5 7L105 12.5L116.5 6L121 9L132.5 1.5L153.5 17.5V27.5L171.5 42L179.5 37.5L199.5 53.5L200.5 61.5L195.5 67V68Z" stroke="black"/>
      </svg>
    </div>
  )
}

export const SecondObjectBlock5 = () => {
    const [t] = useLanguages("object")
    const [isActive, setIsActive] = useState(false)
    const { setQueries } = useRouters()
    const clickHandler = (): void => { setQueries({ block: 5 }) }
  
    return (
      <div className="absolute pointer-events-none top-[450px] left-[375px]">
        <MTitleBuilding title={`${t("one_block")} 5`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[200px] -top-[15px] w-[110px]`} />
        <svg width="264" height="354" viewBox="0 0 264 354" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            onClick={clickHandler}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            style={{ pointerEvents: "all" }} className="object_patch" d="M242 281.5L241.5 281.861M241.5 281.861L206 307.5L204 305.5L201.5 303H198.5H195V305.5L192.5 307.5L189.5 311.5H185.5L182.5 314L185.5 317.5V320L182.5 324.5L178 327L158 342L152.5 336L138 346.5L132.5 342L118 352.5L100.5 324.5V320L97 311.5L86 281.5L78 287.5H74L60.5 268V263.5L14 143L6 128.5L1 119.5L23.5 105L21 101L37.5 91L32.5 82.5L33.5 79L78.5 52L83.5 59L103.5 46.5L100.5 39.5L144.5 12L151.5 21L164.5 12H168L171.5 14.5L190.5 1.5L215.5 31L216.5 40.5L213.5 42.5L213 47.5L232 70H237L263 101L259 252.5L252 258L251.5 265.5L241.5 273V281.861Z" stroke="black"/>
        </svg>
      </div>
    )
  }

export const SecondObjectBlock6 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 6 }) }

  return (
    <div className="absolute pointer-events-none top-[408px] left-[610px]">
      <MTitleBuilding title={`${t("one_block")} 6`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[240px] top-[40px] w-[110px]`} />
      <svg width="261" height="351" viewBox="0 0 261 351" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }}
          className="object_patch"
          d="M8.5 105.5L1.5 110.5L29 143L25 294.5L25.5 295L26.5 296H28L33.5 292L44 305.5L48 311.5H52.5V316.5H56V321.5V325L58 327.5L56 330V331.5L58 334.5L60.5 337.5V341V343.5L63.5 346L66 348L68 350H72.5V346V343.5V341L76 337.5L80.5 334.5H84H89H93.5V330L96.5 327.5H99H102L107 334.5H110H113H116L132.5 321.5L136.5 316.5V311.5H139.5V305.5H145V302L148 298.5L150.5 295L153 291.5H156.5H159L161.5 289V286H164V283.5V279.5H168V283.5V287.5L170 289H174H178.5L182.5 286L186 283.5V276.5L189.5 270.5L192 263L195 259.5V254L199 250.5L201 248L205.5 244.5V241L253 101L258.5 96L260 90L231.5 60.5L221.5 66.5L199 43.5V31.5L201 28L173 1.5L157 14L152.5 8.5L148.5 11.5L138 19L131 11.5L129.5 11L90.5 36.5L90 37.5L89.5 38L89 39V40L89.5 41.5L94 46L78 56.5L77 56L75 54.5L69 49L62.5 54L61.5 53L60.5 52H59H57.5L55 53L48 58L47.5 59.5L48 61V62L46.5 61L44.5 61.5L39.5 64.5L38.5 66L37.5 69L27.5 75.5L26.5 78L32.5 86L18 95.5L21.5 100L10.5 107L8.5 105.5Z" stroke="black"/>
      </svg>
    </div>
  )
}




export const SecondObjectBlock7 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 7 }) }

  return (
    <div className="absolute pointer-events-none top-[260px] left-[721px]">
      <MTitleBuilding title={`${t("one_block")} 7`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[160px] -top-[30px] w-[110px]`} />
      <svg className="pointer-events-none" width="239" height="311" viewBox="0 0 239 311" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M1 164.5L3.5 168L17.5 158.5L26 168L40 157.5L45 161.5L60 151L61.5 149.5L89.5 176.5L91.5 180L89.5 182L90.5 184H91.5V188.5L90.5 189.5L87 192L110.5 215L120.5 208.5L148 236.5L146 245L139.5 249L120.5 309L149.5 289L152 282L156 278L160 266.5L163.5 265L168 260.5V253L216 116.5L218 115L222 111V106.5L220.5 104L223.5 101.5L229 96V91L238.5 83.5V79L207.5 51.5L205.5 53L205 54V55.5L203.5 56.5L179 34V33L183.5 29.5V25L157 1.5L141.5 12.5L137 8L124.5 17.5L117.5 10.5H116.5L81.5 32V39H80.5L75.5 43L76 45.5L79 49L77 51L80.5 54L79 55V57.5H77L71.5 52L72 50.5L63.5 42.5L26 64.5V75.5L20.5 80V85L5.5 94L5 95.5V104L7.5 106.5L1 164.5Z" stroke="black"/>
      </svg>
    </div>
  )
}
export const SecondObjectBlock8 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 8 }) }

  return (
    <div className="absolute pointer-events-none top-[223px] left-[888px]">
      <MTitleBuilding title={`${t("one_block")} 8`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[250px] top-[30px] w-[110px]`} />
      <svg className="pointer-events-none"width="267" height="344" viewBox="0 0 267 344" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M54.5 340.5L56 343H57.5L64 337.5L66.5 335.5L68 333H71L72.5 331.5H74.5L75.5 330.5V328.5V327H77L78.5 328.5H80.5L82 327L84.5 325.5H86.5L89 323.5L90.5 325.5H92.5L95.5 322.5L98.5 320.5L103.5 317L109 313.5L112 310V308L114.5 306L117 303V300.5V298.5V296L118.5 293.5H120L122 292L123.5 289H125.5H127.5L129 287V285.5H131L133.5 284H136.5L139 282.5V280L140 279L141.5 278H144.5H146L155 263L241 114.5L242 113L243 112L244.5 111L247 108.5L248.5 106.5L250.5 105L251.5 102.5L248.5 97.5L251.5 94V91.5L254 89V86H255L264.5 76L265.5 72L235.5 48.5L228.5 54L200 31.5V29L204 25.5V23.5L175.5 1.5L162.5 11L158 7.5L146.5 16.5L138 8.5L106 29.5L103 36.5L106 40.5L101 50.5L89 40.5L56.5 62L55.5 65L56.5 73L50.5 77.5V82.5L40 89.5H42L71 114.5L60 125.5V128V132.5L53.5 139L56.5 143.5L54.5 149.5L3 289L1.5 298.5L19 312H20.5H22V310V308.5H23.5H25.5L28 310V312V314L29 315H32L33 313.5V312L35 313.5H36.5V312V310V308.5H38L39 310L40.5 312L42 313.5L43.5 315.5H46L47 317L48.5 318H49.5L50.5 319L52 320.5L53.5 322.5L52 323.5V325.5V327L53.5 328.5L54.5 330.5L53.5 331.5V333L52 335.5H53.5L54.5 337.5V340.5ZM54.5 340.5L53.5 339.5" stroke="black"/>
      </svg>
    </div>
  )
}