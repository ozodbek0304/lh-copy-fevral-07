import { useState } from "react"
import MTitleBuilding from "../../MTitleBuilding"
import useRouters from "../../../hooks/useRouters"
import { useLanguages } from "../../../hooks/useLanguages"


export const FifthObjectBlock1 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 1 }) }

  return (
    <div className="absolute pointer-events-none top-[542px] left-[78px]">
      <MTitleBuilding title={`${t("one_block")} 1`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[185px] top-[30px] w-[110px]`} />

      
      <svg className="pointer-events-none" width="167" height="182" viewBox="0 0 167 182" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M6 116L69 181H120L122 179.5L124.5 178L127.5 177H130L131 178H132.5H135H137H139L140 179.5H143H148H152.5L151 178L152.5 176V174.5V172.5V170.5L153.5 169V166.5H156L158 165.5V163L159.5 142L157 135.5L158 118.5H161.5L166 86V84L117 1L20 2L11 51.5L1 110L1.5 115L6 116Z" stroke="black"/>
      </svg>
     

    </div>
  )
}

export const FifthObjectBlock2 = () => {
    const [t] = useLanguages("object")
    const [isActive, setIsActive] = useState(false)
    const { setQueries } = useRouters()
    const clickHandler = (): void => { setQueries({ block: 2 }) }
  
    return (
      <div className="absolute pointer-events-none top-[452px] left-[203px]">
        <MTitleBuilding title={`${t("one_block")} 2`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[150px] top-[15px] w-[110px]`} />
        <svg  width="151" height="172" viewBox="0 0 151 172" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            onClick={clickHandler}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            style={{ pointerEvents: "all" }}
            className="object_patch"
            d="M1 86L12 2.5H118V1H120L122 2.5V4V7.5L150 92L148.5 119L148 120L145.5 164L144 163.5L143 162.5L142 162H140.5L139 161.5L138.5 160V159H137.5H136.5H135.5H134H133L131.5 160L131 160.5L130.5 161H129.5V162L128.5 162.5V163.5L128 164H127L126.5 165H125.5V166V167H124V168L123.5 169L122.5 170L121.5 170.5H107V169H104.5V165H101.5H85V169H83.5V171.5H82.5H70L69 170.5L67.5 169H65.5L64 170.5L61 169H58H56.5H54.5V170.5H53H48.5L3 90L1 88.5V86Z" stroke="black"/>
        </svg>
      </div>
    )
  }


export const FifthObjectBlock3 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 3 }) }

  return (
    <div className="absolute pointer-events-none top-[287px] left-[127px]">
      <MTitleBuilding title={`${t("one_block")} 3`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[150px] -top-[10px] w-[110px]`} />
      <svg width="144" height="184" viewBox="0 0 144 184" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }}
          className="object_patch"
          d="M1 84.5L49.5 176L51 178L51.5 178.5L52.5 178H54H56.5L57.5 179.5L58 180.5L60 181.5L60.5 180.5L61.5 180H64L64.5 181.5L66 182.5L66.5 183.5H68H70.5H72L73 182.5L74 181H75H76.5L77.5 181.5V182.5H78.5H79.5L81 181.5L81.5 180.5H83.5V179.5H85L86 180.5L88 167.5H132V165L133 164V161L136 154L134 149V146.5L130.5 135H138.5L142.5 110.5L101.5 0.5H15.5L1 84.5Z" stroke="black"/>
      </svg>
    </div>
  )
}

export const FifthObjectBlock4 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 4 }) }

  return (
    <div className="absolute pointer-events-none top-[218px] left-[236px]">
      <MTitleBuilding title={`${t("one_block")} 4`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[135px] top-[0px] w-[110px]`} />
      <svg width="131" height="176" viewBox="0 0 131 176" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }}
          className="object_patch"
          d="M107 0.5L10.5 1.5H9L1 67L37 167L38 167.5H39.5H41H42.5H44L45.5 166.5L47 167.5L49 168.5H51L53.5 167.5H54.5L55.5 168.5L57.5 170L58.5 170.5L60 173V175H63.5L65 174H68V175H71.5L72 173L73 172.5V168.5H91.5L93.5 174H105.5V172.5L106.5 170.5V168.5L107.5 166.5L108.5 164.5L110 163.5V161.5L111.5 161L112.5 160H114.5H116.5H118.5H121L122.5 161.5L123.5 163.5L124.5 164.5L125.5 165.5H126.5H127.5L128.5 164V155.5V142L129.5 141V125L130.5 123.5V112L129.5 111V106.5L107 0.5Z" stroke="black"/>
      </svg>
    </div>
  )
}

export const FifthObjectBlock5 = () => {
    const [t] = useLanguages("object")
    const [isActive, setIsActive] = useState(false)
    const { setQueries } = useRouters()
    const clickHandler = (): void => { setQueries({ block: 5 }) }
  
    return (
      <div className="absolute pointer-events-none top-[98px] left-[162px]">
        <MTitleBuilding title={`${t("one_block")} 5`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[100px] -top-[15px] w-[110px]`} />
        <svg width="96" height="208" viewBox="0 0 96 208" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            onClick={clickHandler}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            style={{ pointerEvents: "all" }} className="object_patch" d="M1 98.5L38 190.5L38.5 191.5H67.5L73 206.5L73.5 206L74 205L75 204.5H76L78 205L78.5 204.5L80 205H81L76 189.5L84 124.5H95V118.5L63 17V14.5L62 10.5L61.5 9L62 8L63 7L62 6V4.5V2H59H31V1H26.5V2H18H17V6H16V8V12H15V18.5H14V24H11L10.5 24.5L10 25V31L9.5 31.5L9 32V36H8V37V39.5L7.5 40H4.5L4 40.5V41.5V46V47H3V48V53.5H2.5L2 54.5V60V61.5H2.5L3 62V69L2 69.5V74V75.5V76.5L3 77.5L1 96.5V98.5Z" stroke="black"/>
        </svg>
      </div>
    )
  }

export const FifthObjectBlock6 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 6 }) }

  return (
    <div className="absolute pointer-events-none top-[41px] left-[175px]">
      <MTitleBuilding title={`${t("one_block")} 6`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[110px] top-[40px] w-[110px]`} />
      <svg width="114" height="174" viewBox="0 0 114 174" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }}
          className="object_patch"
          d="M8 2L0.5 41V42.5L1 43.5V44.5H2V45V50.5L3 51V52.5H4V56H13.5V55H18V56H49V57V58V59.5L50 60.5L49.5 61.5L49 62V63V64L49.5 65.5L50 67V68.5L49.5 70L82 172.5L83 171.5V169L84 166.5H83V165L84 163.5H85V162V160L84 158V155L85 155.5L86.5 157V158H92L93 156L94 154H96L99 155.5L100.5 157H108.5H113.5V155.5V154V151.5V150L112 148.5V145.5V144V142.5L111 141.5V140L81.5 35L85.5 6.5V5H75.5V4.5V3H66V1L8 2Z" stroke="black"/>
      </svg>
    </div>
  )
}




export const FifthObjectBlock7 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 7 }) }

  return (
    <div className="absolute pointer-events-none top-[41px] left-[255px]">
      <MTitleBuilding title={`${t("one_block")} 7`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[140px] -top-[30px] w-[110px]`} />
      <svg className="pointer-events-none" width="239" height="311" viewBox="0 0 239 311" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M126.5 16.5L140 107L140.5 108V127L140 128V130V131.5V134.5V136.5L139 138L140 140L139 141.5V143.5H137.5H135.5L133.5 142.5L131.5 141.5H129.5L127.5 143.5L129.5 145.5V147.5V150L127.5 151L124.5 152V153.5H122.5L121 152V150L119.5 148.5V145.5H118L115.5 145V143.5L113 142.5L110.5 143.5H108.5L106.5 145V146.5L104 147.5V149H101.5H99.5V150L97.5 151V152L95 153.5H93.5L92 155V157H87H84.5L82.5 156.5H80L78.5 159L75.5 161H73.5H70H67.5H65.5H62.5H60.5L58.5 159H56.5H53.5L52 157L50.5 156.5V155V153.5H51.5V152L50.5 151L49.5 150V149L49 148.5H47.5H46.5V147.5L45 147L44 146.5L43 145.5L41.5 145H40H38.5L38 145.5H37H36H35V146.5H33.5L33 147L32 147.5L31 147V143.5L30 142.5V141.5L0.5 36L5 5H33.5V3.5L51.5 3L53.5 0.5H63.5H66H70.5H73.5H75L76.5 2L77.5 3.5H97V5H124.5L126.5 6V16.5Z" stroke="black"/>
      </svg>
    </div>
  )
}
export const FifthObjectBlock8 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 8 }) }

  return (
    <div className="absolute pointer-events-none top-[340px] left-[423px]">
      <MTitleBuilding title={`${t("one_block")} 8`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[150px] top-[30px] w-[110px]`} />
      <svg className="pointer-events-none" width="135" height="203" viewBox="0 0 135 203" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M25 44.5L1.5 73L14.5 165L15.5 166V169L16.5 170.5V172H18L20 174H21.5L23 175.5L25 177H26.5H28H29.5H31.5L33 179H34.5V180V181L36 181.5L37 182L37.5 183H39L40 185L41.5 186L42 187L44.5 188L45.5 189L46.5 189.5L47 190.5H49V189V188L50.5 187L51.5 188L52.5 189H54L55 190.5L57 191.5L57.5 192.5H59H60.5L62.5 194V195L65 195.5V196.5L66.5 198L67.5 199H68.5H70H71H72H73L73.5 198L74 196.5L75 195H76.5H78H79.5L81 195.5H82V196.5L82.5 197H84H85L85.5 197.5V198.5H86.5L87.5 199.5V201L89 199.5L90.5 197.5L92 195.5L93 194V192.5V190.5L94 189V187L95.5 185L96.5 184.5L98 183H99.5H101.5V181.5V179V177L102.5 175.5V174L103.5 172L105 170.5V168L107 166L108 164V162.5L108.5 161.5L109.5 160H111.5V161H113H114.5L115.5 160V157.5L117.5 156L119 153.5H120.5H122.5H124L127 149.5L129.5 145.5L131.5 142L134 40L61.5 1L40 25V41.5L33 49.5L25 44.5Z" stroke="black"/>
      </svg>
    </div>
  )
}
export const FifthObjectBlock9 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 9 }) }

  return (
    <div className="absolute pointer-events-none top-[295px] left-[553px]">
      <MTitleBuilding title={`${t("one_block")} 9`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[150px] top-[30px] w-[110px]`} />
      <svg className="pointer-events-none" width="133" height="203" viewBox="0 0 133 203" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M131.5 40.5L58 1L37 27V44L32 49.5L26.5 46L25 45.5H23.5L22.5 46L3 70.5L2.5 72L2 73L2.5 74L4 76L1.5 175H2.5L4 176L5.5 177L6.5 177.5L7 178L8 178.5H9H10V177.5H11H12H13L14 178H15H17.5L18 178.5L19 179L21 179.5V180.5V181.5L22 183L23.5 184L24 186L25 187L31.5 191.5L33 190V188.5V187L34 186L35 184H36H37.5L39 185L40 186L41 187H41.5L43 188V189L44.5 189.5L45 189H46L46.5 188L47.5 188.5L48.5 190L49.5 191H50.5H52V191.5L52.5 192V193H53.5H54.5L55 194L55.5 194.5L56 195.5L55.5 196.5V197.5V198.5V199.5L57 200L57.5 201L58.5 201.5L59.5 201V199.5L60.5 198.5H62L63 197.5L64 196.5H65.5L67 195.5H68V193.5L69 193L71 192H72V191V190L73.5 188.5L75 188H77H79H80.5V189.5H82V191H83H84V189.5L85 188L86.5 185V179.5V173.5L91.5 166L97.5 168.5L100.5 163.5V160.5V158L103 155.5H105.5L109.5 149.5L114.5 139.5V136L131.5 40.5Z" stroke="black"/>
      </svg>
    </div>
  )
}
export const FifthObjectBlock10 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 10 }) }

  return (
    <div className="absolute pointer-events-none top-[185px] left-[456px]">
      <MTitleBuilding title={`${t("one_block")} 10`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[100px] top-[30px] w-[120px]`} />
      <svg className="pointer-events-none" width="86" height="178" viewBox="0 0 86 178" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M0.5 71V19H4V10.5H6.5V1.5H19.5L20 1H23L24 1.5H52.5V11H61V17.5H63V26.5H84.5L85.5 166L84.5 167V172.5H75.5V175H65L28.5 155.5L10 176L0.5 71Z" stroke="black"/>
      </svg>
    </div>
  )
}
export const FifthObjectBlock11 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 11 }) }

  return (
    <div className="absolute pointer-events-none top-[92px] left-[456px]">
      <MTitleBuilding title={`${t("one_block")} 11`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[100px] top-[30px] w-[120px]`} />
      <svg className="pointer-events-none" width="58" height="106" viewBox="0 0 58 106" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M17.5 3.5H9.5H7.5V25.5H4V40H1V68.5L2 69V80H3V90H5V95.5H18.1875L19 95H22L23 95.5H51.5V105H57.5V77L56.5 75V24H53.5V20.5V15V11.5L50.5 9V3.5H24V0.5H17.5V3.5Z" stroke="black"/>
      </svg>
    </div>
  )
}
export const FifthObjectBlock12 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 12 }) }

  return (
    <div className="absolute pointer-events-none top-[38px] left-[457px]">
      <MTitleBuilding title={`${t("one_block")} 12`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[150px] top-[30px] w-[120px]`} />
      <svg className="pointer-events-none" width="81" height="160" viewBox="0 0 81 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M3 72.5V76V77.5H6.5V55.5H16.5V52.5H23V55.5H49.5V60.5L52.5 63.5V76H55.5V126.5L56.5 129V157H68L69.5 158.5V155H80.5V149V33.5H79.5V4.5H69.5V2.5H60.5V0.5L1.5 1L1 46.5H2.5V54V56V71.5L3 72.5Z" stroke="black"/>
      </svg>
    </div>
  )
}
export const FifthObjectBlock13 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 13 }) }

  return (
    <div className="absolute pointer-events-none top-[37px] left-[536px]">
      <MTitleBuilding title={`${t("one_block")} 13`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[150px] top-[30px] w-[120px]`} />
      <svg className="pointer-events-none" width="123" height="163" viewBox="0 0 123 163" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M108 149L122 34L120 4H91V2.5H70.5V1H47.5V3H28V5H0.5V34.5H1.5V155H8L11 159H24L26 161H33L35 160H36.5H46.5L49.5 162.5H62L64.5 161H66.5H71L73 160L74.5 161H79H82L84 157.5H100.5V156H108V149Z" stroke="black"/>
      </svg>
    </div>
  )
}
export const FifthObjectBlock14 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 14 }) }

  return (
    <div className="absolute pointer-events-none top-[36px] left-[642px]">
      <MTitleBuilding title={`${t("one_block")} 14`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[120px] top-[0px] w-[120px]`} />
      <svg className="pointer-events-none" width="96" height="174" viewBox="0 0 96 174" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M33 3H25H24V6H14L16.5 35L1.5 158H12L15 155.5H21.5H29.5V163.5L30.5 164V167.5L30 168V170.5H32L33 172L48 56H90.5V51.5H89.5V50H92V43H95L89 0.5H33V3Z" stroke="black"/>
      </svg>
    </div>
  )
}
export const FifthObjectBlock15 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 15 }) }

  return (
    <div className="absolute pointer-events-none top-[91px] left-[673px]">
      <MTitleBuilding title={`${t("one_block")} 15`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[100px] top-[30px] w-[115px]`} />
      <svg className="pointer-events-none" width="77" height="122" viewBox="0 0 77 122" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M47.5 96H74H75V90H74V84H73V77.5L74 76.5V74H75.5V73L73 57H76L74 37H70V33.5H69V26H68V22H65V18H64V11H63V2H58.5V1H17L2 117L1 115.5V120.5L20 121V113.5H23V104.5H30V96H40V95H47L47.5 96Z" stroke="black"/>
      </svg>
    </div>
  )
}
export const FifthObjectBlock16 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 16 }) }

  return (
    <div className="absolute pointer-events-none top-[186px] left-[654px]">
      <MTitleBuilding title={`${t("one_block")} 16`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[130px] top-[30px] w-[115px]`} />
      <svg className="pointer-events-none" width="109" height="179" viewBox="0 0 109 179" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M108.5 67.5L102 18H98V12H97.5V9.5H94.5V6.5H93.5V2H66.5L66 1H59V2H49V10.5H42V19.5H39V27L18 26.5L1.5 136L29.5 152L25.5 177.5L80 176V169.5H82V166L108.5 67.5Z" stroke="black"/>
      </svg>
    </div>
  )
}
export const FifthObjectBlock17 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 17 }) }

  return (
    <div className="absolute pointer-events-none top-[390px] left-[728px]">
      <MTitleBuilding title={`${t("one_block")} 17`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[150px] top-[0px] w-[115px]`} />
      <svg className="pointer-events-none" width="140" height="192" viewBox="0 0 140 192" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M27.5 36.5L2.5 116L1.5 118L2.5 119L1.5 120L1 121L1.5 122V123L2.5 123.5V124.5H1.5L1 126L1.5 126.5V127.5H2.5L3.5 128.5V129.5L4.5 130.5L5.5 131L6.5 131.5V132.5V133.5L5.5 135L5 136.5L4 137V138.5L4.5 139.5L5 141L5.5 141.5L6.5 143L7.5 144.5L8.5 145.5V146.5V147.5L9.5 148.5H11L11.5 149.5H12.5L13 151L13.5 151.5H14.5H16H17.5V152.5V154L18 154.5H19H20L20.5 155.5V156.5V157.5L20 158.5H19L18 159.5L19 161L20.5 162L21.5 163L23.5 165.5H24H25L26 166.5H27.5H28.5L29 165H30H31.5L32.5 165.5L34 166V167.5L33.5 168.5V170H35H37.5H39L40 172.5H39L40 174L41 175.5L42 179H43.5V181.5L45.5 183V186L47 186.5L48 188.5L50.5 190.5L52 188.5L53 186L90.5 104L131.5 79.5L122.5 69L138.5 37.5L118.5 14.5L118 13L115 9.5H114L106.5 1L98 6L95.5 3L86 8.5L83 6L27.5 36.5Z" stroke="black"/>
      </svg>
    </div>
  )
}
export const FifthObjectBlock18 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 18 }) }

  return (
    <div className="absolute pointer-events-none top-[469px] left-[779px]">
      <MTitleBuilding title={`${t("one_block")} 18`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[160px] top-[30px] w-[115px]`} />
      <svg className="pointer-events-none" width="183" height="221" viewBox="0 0 183 221"  fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M138.5 146.5L180 121L181.5 120L178.5 117L174 112L174.5 111L175.5 109L174.5 108L170.5 104.5V101.5V99.5H169H167L161.5 92.5L162.5 91L164 90V89L164.5 87.5L152 75.5L150 73.5L148.5 71.5V70.5V69V68L150 66.5L151 64.5V62.5L150 61.5L140.5 51L132 41.5L131 40.5L130.5 39.5L129.5 39V38L128.5 37.5H127.5H126.5H125.5L124.5 38L123.5 39H122.5L121 41L120 42H119L116.5 39L117.5 37.5V36.5V35V34L110 25.5L108.5 26.5L107 27.5H106V26.5L93.5 12.5V11.5L92.5 10.5H91.5L90 11.5L89 10.5L84 5.5L83 4V3L81.5 1L39.5 25L39 25.5L2 106V108.5L1 111.5V113L2 114H3.5L4.5 115V116L5.5 116.5L6.5 117L8 118L8.5 119L9 120L9.5 121V122.5V123.5L10 125L11 126V127.5H12L12.5 129L13.5 129.5L14 130L14.5 131.5H15.5V132.5H16.5V133.5L17.5 134.5L16.5 136L17.5 137L16.5 138V139.5L17.5 140.5L18.5 141.5L19.5 142V143.5L20.5 144V145L21.5 146L23 147L24 149L24.5 150L25.5 150.5L26.5 151.5L27.5 153L29 155L30.5 155.5L33.5 157L34.5 158L35 159.5L36 160.5L37 161.5V163L39 164L40.5 166L42.5 168L44 171.5V173V174.5V176L45.5 178H47V180L48 182L50 183.5L51.5 185.5L53 187.5L54.5 189L56.5 191L58.5 193.5V195L60.5 196H62.5L64 198L65.5 199.5L67 202L69 205L71 207L73 209L73.5 210L74.5 211.5L76.5 213H78.5V214.5L79.5 216L81 218L82.5 220L86.5 216V214.5L88 213L138.5 146.5Z" stroke="black"/>
      </svg>
    </div>
  )
}
export const FifthObjectBlock19 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 19 }) }

  return (
    <div className="absolute pointer-events-none top-[589px] left-[859px]">
      <MTitleBuilding title={`${t("one_block")} 19`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[200px] top-[0px] w-[115px]`} />
      <svg className="pointer-events-none" width="194" height="178" viewBox="0 0 194 178" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M192.5 58L154.5 13H153.5L153 13.5L139.5 24L130.5 13.5L129.5 13H128.5L115.5 21.5L114 20L98 1L81 11.5L56.5 26.5L7.5 91L6 93L4.5 94.5V96L1 99.5V101.5L2.5 104.5L4 106.5L6 108.5L4 110.5V112.5L7 114V116L8.5 118L10 120L11 123.5H12.5H15V125.5H17V128V130V131.5L18.5 133L20 135L22.5 139L24 140.5L25.5 142L27 145L30 146L32 148.5H33.5L35.5 149.5V151.5V153.5L36.5 154L38 156.5V158.5L40 162L41.5 163.5L44.5 166L46.5 168.5L48 170H49.5L52 173L54.5 176L56 177.5H58L59 176L61.5 173L64 170L66.5 168.5L68.5 170L70.5 168.5L75.5 163.5H78.5L86 156.5L90.5 154L95.5 149.5L102 146L108.5 142L138.5 114L178 79L176 76.5L185 69L183.5 67L192.5 58Z" stroke="black"/>
      </svg>
    </div>
  )
}
export const FifthObjectBlock20 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 20 }) }

  return (
    <div className="absolute pointer-events-none top-[538px] left-[996px]">
      <MTitleBuilding title={`${t("one_block")} 20`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[150px] top-[30px] w-[120px]`} />
      <svg className="pointer-events-none" width="157" height="167" viewBox="0 0 157 167" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M17 61V62.5L55.5 108L46.5 117L48 119L39 126.5L41 129L1 164.5V166H3L6 164.5L9.5 161.5L17 156.5L19 155.5L21 156.5V158L23.5 156.5L42 143.5L79.5 112.5L122 74.5V72.5L139.5 59.5V57L156 42L142 27L141 25L139.5 24L138 23L117.5 1H116H115L108.5 6H107L106 5V4.5H104.5H103.5L102.5 5L101 6L100 6.5L99 6H98H96.5L95.5 6.5L94 5H92.5L79.5 13.5L55 29L54 30L28.5 46V48L17 61Z" stroke="black"/>
      </svg>
    </div>
  )
}
export const FifthObjectBlock21 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 9 }) }

  return (
    <div className="absolute pointer-events-none top-[471px] left-[1036px]">
      <MTitleBuilding title={`${t("one_block")} 21`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 -left-[90px] top-[30px] w-[120px]`} />
      <svg className="pointer-events-none" width="195" height="182" viewBox="0 0 195 182" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M80 23L116.5 0.5H117L121 4L122.5 5.5L124 7L125 8L126.5 9L127 8.5L128 8L129 8.5L137.5 16.5L138.5 15.5H141L194 69V70.5L138.5 116.5L102 146.5L93.5 153L91 154L89 156L87.5 157L85 159L82.5 161L79.5 162L78 163L76 164.5L73.5 166L71.5 167.5L70 169H68L67 170.5L65.5 172L64 173H62L59.5 174.5L57.5 177L54.5 178H52L50 177L48 178L45.5 180L43 181.5H41V180L83 142V140.5L100.5 127V124.5L117 110L104.5 96.5L103 95L102 93L100.5 92L99 91L81 71.5L80 70.5L79 69.5L78 69H77H76L73.5 71L71.5 72.5L70 73.5L69 74H68L67.5 73.5L67 72.5H66H65H64L63.5 73L63 73.5L62 74L61 74.5L60.5 74H59.5H58.5H57.5L56.5 74.5L55.5 73.5L54.5 73H53L19 95L15.5 97.5L14.5 98.5L0.5 107L80 23Z" stroke="black"/>
      </svg>
    </div>
  )
}
export const FifthObjectBlock22 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 22 }) }

  return (
    <div className="absolute pointer-events-none top-[362px] left-[952px]">
      <MTitleBuilding title={`${t("one_block")} 22`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[180px] top-[30px] w-[120px]`} />
      <svg className="pointer-events-none" width="202" height="218" viewBox="0 0 202 218" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M37 57L1.5 111L2 112L3 113H3.5H4.5H6.5H7L8.5 114L9.5 115.5V116.5L11 117.5V119V120V121.5V122.5V124L9.5 125.5L11 126.5L12 125.5L13.5 125H15.5V126.5L14 128.5L12.5 129.5L11 131H9.5L8.5 132.5V133.5L8 135.5L7 136H6.5L5.5 136.5V137.5L6.5 139L7 140H8.5V141L9.5 142.5H11V144.5V146.5V148.5H12.5L14 150.5V152.5V153.5L15.5 155H17V157H18.5H20V159V160.5L23 163.5H25L27 162.5V161L28.5 160.5L29.5 161L30.5 162.5L32 163.5L34 165.5V167.5L35.5 169.5H37V171L39 173L42.5 176L44 178L42.5 180V181.5L44 183.5L45 184.5L47 185.5L49 187V190L50 191L51.5 193L54 196H55.5L58 198L60 199.5L62 201.5L64.5 204.5L67 207L68 210L70.5 213.5L73 211.5H74.5L76 213.5L77.5 215L80 217H81.5L84 215L162 132.5L199 109.5L201 107.5L176 83L178 80.5L161 63.5L162 62.5V60.5L141.5 39.5H139.5H138L122 24H119L96 1L58.5 24L37 57Z" stroke="black"/>
      </svg>
    </div>
  )
}
export const FifthObjectBlock23 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 23 }) }

  return (
    <div className="absolute pointer-events-none top-[295px] left-[876px]">
      <MTitleBuilding title={`${t("one_block")} 23`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[180px] top-[0px] w-[120px]`} />
      <svg className="pointer-events-none" width="173" height="181" viewBox="0 0 173 181" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M115 1.5L66.5 27.5L64.5 29L66 32L58 37L59 40L52.5 43.5L3.5 139.5L1 146.5L2.5 147.5V149.5L4.5 151.5H6.5V153H8.5L9.5 154H11L12.5 156V158V159.5H14L15.5 161H18L19.5 162.5H21V165H23L24.5 167L26.5 168.5V170L24.5 172.5V175L26.5 176.5L28 178.5L29 177.5L31.5 175H34.5L35.5 176L37.5 174L43 170L46.5 168.5L48.5 170L52 172.5H53.5H55H57L58 174L60 176L61.5 176.5L63.5 177.5L65 178.5H66.5V180L68.5 178.5H70.5H72L73 177.5H74.5L75.5 176.5L76.5 176H78.5L135 89L171.5 68.5L165.5 62.5L167 59.5L160 51.5L161.5 49L115 1.5Z" stroke="black"/>
      </svg>
    </div>
  )
}