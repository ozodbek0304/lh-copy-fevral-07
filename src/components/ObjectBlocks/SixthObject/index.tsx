import { useState } from "react"
import MTitleBuilding from "../../MTitleBuilding"
import useRouters from "../../../hooks/useRouters"
import { useLanguages } from "../../../hooks/useLanguages"


export const SixthObjectBlock1 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 1 }) }

  return (
    // <div className="absolute pointer-events-none top-[188px] left-[88px]">
    <div className="absolute pointer-events-none top-[167px] left-[237px]">
      <MTitleBuilding title={`${t("one_block")} 1`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[135px] -top-[30px] w-[110px]`} />

      
      <svg className="pointer-events-none" width="139" height="169" viewBox="0 0 139 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M13 146.5L14.5 160.5V161.5H16L16.5 162.5H27.5V164H37.5V162.5H51V164H62.5V165H73.5L74 165.5V166.5L75 167L75.5 168H82L83 168.5H96.5L100.5 162.5H106.5L110.5 156L116.5 155.5L121.5 146.5L126.5 145.5L136 132.5L133 129.5L138 123.5L136 107.5V105.5V99.5L128.5 29H131V22H127V8.5H126V4H106.5L103 8.5H94V4H78L75 5.5H68V1L66.5 0.5H49L45.5 3L44.5 5.5H41L35.5 11H32L26 17H23.5V19L24.5 20.5L26 22V32H12L5.5 39.5V47L1 53L14.5 146.5H13Z" stroke="black"/>
      </svg>
     

    </div>
  )
}

export const SixthObjectBlock2 = () => {
    const [t] = useLanguages("object")
    const [isActive, setIsActive] = useState(false)
    const { setQueries } = useRouters()
    const clickHandler = (): void => { setQueries({ block: 2 }) }
  
    return (
      <div className="absolute pointer-events-none top-[136px] left-[378px]">
        <MTitleBuilding title={`${t("one_block")} 2`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[150px] -top-[45px] w-[110px]`} />
        <svg width="146" height="149" viewBox="0 0 146 149" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            onClick={clickHandler}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            style={{ pointerEvents: "all" }}
            className="object_patch"
            d="M1 32.5L10 135.5V137H20.5V138V141H33V143L34 144L53 144.5L53.5 147H79V148H100V146H108L108.5 147H115L115.5 145L130 145.5V144V143V141.5V140.5L129 139.5L128.5 138.5V137.5V136V134.5L129 133L130.5 131.5L131 130.5H133H134.5L140 120H144L139.5 17L144.5 10.5H141L139.5 9H131L130 8H127.5L126.5 6.5H117V5.5H110.5V4.5H98L95.5 8H94.5V10H74V9H70.5V5L70 4.5V2H54.5V1H50V2.5H37.5L36.5 3.5H32.5L31.5 2.5H23L18.5 8V15L14 19.5V25H6.5L1 32.5Z" stroke="black"/>
        </svg>
      </div>
    )
  }


export const SixthObjectBlock3 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 3 }) }

  return (
    <div className="absolute pointer-events-none top-[123px] left-[517px]">
      <MTitleBuilding title={`${t("one_block")} 3`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[150px] -top-[10px] w-[110px]`} />
      <svg width="137" height="145" viewBox="0 0 137 145" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }}
          className="object_patch"
          d="M30.5 1.5H19H18V8.5H14V17L12.5 19L11 23H6L0.5 30L5 133H16V136H29V139.5L47.5 140.5L48.5 143H75V144H96V143H114L114.5 108.5L117 99H123V95H124V93H125V81L128.5 71.5H136V8H123V5.5H111L109.5 4H91L88 10L64 8.5V0.5H32.5L30.5 1.5Z" stroke="black"/>
      </svg>
    </div>
  )
}

export const SixthObjectBlock4 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 4 }) }

  return (
    <div className="absolute pointer-events-none top-[191px] left-[631px]">
      <MTitleBuilding title={`${t("one_block")} 4`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[165px] -top-[30px] w-[110px]`} />
      <svg width="147" height="165" viewBox="0 0 147 165" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }}
          className="object_patch"
          d="M94.5 13.5L66.5 12V3.5H64.5L50 3V1H48V3H45V4H30V5H27V4.5L26 3H24L23 3.5H15.5L12 13V25H11V27H10V30.5H4L1 41V145H3H5.5V146H6.5V147L7.5 147.5H8.5L9 148.5V149.5L10 150.5H13.5L14.5 151.5H15.5V152.5L16.5 153.5H22V155H28.5V158H34V159H49L50 159.5L50.5 161.5L81.5 163V164H103V162H119.5V159.5H124V144H125V116H130V112.5H123.5L126.5 100H131V98V90H130V81H131V75H132V74H136L136.5 75H140V65H141V62H144V46.5H145V36.5H146V12H137.5H131.5V10H117V8.5H116V7.5H99.5V6H97L94.5 13.5Z" stroke="black"/>
      </svg>
    </div>
  )
}

export const SixthObjectBlock5 = () => {
    const [t] = useLanguages("object")
    const [isActive, setIsActive] = useState(false)
    const { setQueries } = useRouters()
    const clickHandler = (): void => { setQueries({ block: 5 }) }
  
    return (
      <div className="absolute pointer-events-none top-[245px] left-[750px]">
        <MTitleBuilding title={`${t("one_block")} 5`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[200px] -top-[15px] w-[110px]`} />
        <svg width="125" height="196" viewBox="0 0 125 196" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            onClick={clickHandler}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            style={{ pointerEvents: "all" }} className="object_patch" d="M121.5 61L124 23.5L122 22.5V15.5H118V11V7H115L96 6.5V12H82V8H79.5V6.5H63.5V11H51V10V3L28 1.5V8H20.5V21H13L10 30V34.5L11 37V46H7L3.5 58.5L5 63L1 167L5 168.5V177.5H9.5V185.5L33 188V185.5L78.5 189.5V192.5L102.5 194.5V177.5H104V169.5H109V160.5H113V158.5L115.5 124L121.5 61Z" stroke="black"/>
        </svg>
      </div>
    )
  }

export const SixthObjectBlock6 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 6 }) }

  return (
    <div className="absolute pointer-events-none top-[350px] left-[562px]">
      <MTitleBuilding title={`${t("one_block")} 6`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[200px] top-[0px] w-[110px]`} />
      <svg width="181" height="198" viewBox="0 0 181 198" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }}
          className="object_patch"
          d="M122.5 3.5L80 1V2H78.5V6H61V3L60.5 2H40V3.5H20.5L16 14L17 17L18 26.5L11.5 42.5H6.5L1 56.5V73L2 74.5V98.5H3V121.5L3.5 122V146.5L4 147H5.5L6.5 148H7.5V150V151V152.5H9H10V153V154L11.5 155H13L14 155.5V156.5V158H12.5H11L9 158.5L8.5 160L10 161L11.5 162.5H12.5L14 164C13.6667 164.167 13.4 164.6 15 165C16.6 165.4 16 165.5 15.5 165.5L17 166V166.5V167.5V168V169L18 170H20.5L21.5 170.5L22.5 172L21.5 174L20.5 174.5L19.5 175.5V176.5L20.5 178H21.5L22.5 179H24L25 178H26H27H29H30.5L32 177L32.5 175.5L34 174H36L37 176L38 177L39 179V181L39.5 181.5H41.5L42.5 182L43 183.5L42.5 184L41.5 184.5V185.5L43 187H46V185.5V183L44.5 181.5L44 180H42.5L41.5 178L42.5 177L43 176H44V175.5H44.5H46L46.5 174V173.5V172L48 170.5L49 169H50L51 170H52V171V172L52.5 173V173.5L52 174.5L52.5 176L53 176.5H55L55.5 175L56 173H58.5L59 173.5L59.5 175L60.5 176.5L61.5 178L60.5 179L59.5 180V182H61.5L62.5 183L63 183.5H64L65 182H66.5L68.5 182.5H69.5V184V184.5V185.5V187H72.5H74.5V188.5H80L80.5 187L83 186.5H85.5H87V184.5V182.5V180H88V178C88 177.6 88.3333 176.167 88.5 175.5V173L89.5 170.5L90 169L92.5 167.5L95 170C95.8 170.8 96 170.333 96 170C96.3333 170.333 97.2 171 98 171C98.8 171 99.3333 172.333 99.5 173L100.5 173.5L101 175L102 175.5V177V178H106V179H110.5L111 178V177L112.5 176.5H114L115.5 176H117.5L118 175.5L119.5 174L121.5 173H123H124L125.5 174L126.5 175H129H131L132.5 175.5H133.5L134.5 176.5L136 177H137L138 176.5L138.5 175.5H140L141 177V178H142.5H144L145 179H146.5L145 180H144V181L145 182.5V184V185.5H146.5L148 186.5L148.5 189L149 190V191.5L148.5 192V194H146.5V195H150V196H157.5L158 197H164.5V196V194V192L165 190L165.5 188V187V175.5H166.5V170H167.5V167.5V164L168.5 163.5V152.5H173L176 135.5L175.5 130L175 129.5V128.5V125L176 124.5V122V106H177V82H178V58.5H179V34H180V16L163 15V11L142.5 10L141.5 12.5L122.5 11V3.5Z" stroke="black"/>
      </svg>
    </div>
  )
}
export const SixthObjectBlock7 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 7 }) }

  return (
    <div className="absolute pointer-events-none top-[302px] left-[402px]">
      <MTitleBuilding title={`${t("one_block")} 7`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[180px] -top-[40px] w-[110px]`} />
      <svg width="181" height="198" viewBox="0 0 181 198" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }}
          className="object_patch"
          d="M1 48L12.5 166.5V167.5V170H23.5V171H28V174.5H37.5L38.5 175H42.5L43.5 177L44.5 178H56L57 179H68V176H85.5V177H94V178H102V183H108L109 184H117L118 185H126.5V184H137V185H144.5V183H157.5L158 184H162V177.5H163.5V170L163 169.5V146.5H162V122.5L161 121V104.5L166.5 90.5H171.5L178 75L177 64.5L176 62.5L178 58V13.5H171H162V9H151V7.5H142V9H123.5V1H117.5L116.5 4H102V3H91.5V2H82L78 6.5H67V2H62V1H47V2H46V3H34V1.5H29.5L23 12V21L17.5 30L17 33.5L15.5 34L12.5 37.5H9L1 48Z" stroke="black"/>
      </svg>
    </div>
  )
}
