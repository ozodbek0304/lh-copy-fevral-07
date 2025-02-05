import { useState } from "react"
import MTitleBuilding from "../../MTitleBuilding"
import useRouters from "../../../hooks/useRouters"
import { useLanguages } from "../../../hooks/useLanguages"


export const FirstObjectBlock1 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 1 }) }

  return (
    <div className="absolute pointer-events-none top-[188px] left-[88px]">
      <MTitleBuilding title={`${t("one_block")} 1`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[185px] -top-[30px] w-[110px]`} />

      <svg className="pointer-events-none" width="243" height="365" viewBox="0 0 243 365" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M151.5 11L183 0.5L187 3.5L187.5 9.5L204 23.5L203.5 21.5L207 21L210.5 24L211 32H209.5L225.5 159L226.5 159.5L228 170.5L214 174.5L231 298L238 305L239.5 321L240.5 323.5L238.5 324.5L242.5 330.5L227 337.5L225 335L221.5 336L223 339.5L183 356.5L180 354L175.5 356L177.5 358.5L161.5 365L157 359.5L150.5 362.5L147 357.5L137.5 361.5L130 353L133 350.5L131 348L126.5 350.5L106 327L106.5 326L98 316.5L106 312L103 308L95 311L88 303L92 300.5L89.5 298L85.5 301L57 269L58 268L50 259.5L57.5 255.5L53.5 252L44.5 255.5L38 247.5L42 245.5L40 243L35.5 246L17.5 225.5L17 223.5L10 212.5L16.5 210L14 193L12 190L27.5 184.5L3.5 71.5L1 69.5L0 62L39 48.5L41 54L48 51.5L47.5 46.5L110.5 24.5L113.5 29.5L119 27.5V22.5L143.5 14L145.5 15.5L150.5 16.5L151.5 16V11Z"
        />
      </svg>    

    </div>
  )
}


export const FirstObjectBlock2 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 2 }) }

  return (
    <div className="absolute pointer-events-none top-[429px] left-[345px]">
      <MTitleBuilding title={`${t("one_block")} 2`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[300px] -top-[15px] w-[110px]`} />
      <svg className="pointer-events-none" width="353" height="336" viewBox="0 0 353 336" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M9 23.5L10.5 26L27.5 19.5V18.5L31.5 16L32 17L45.5 12.5V10.5L48.5 8.5L50.5 10.5L54.5 8.5L53.5 3.5L61 0L107 46V52L108 53V51.5L111 50L144 82L156.5 77.5L169.5 89.5H171V84L182 79L182.5 77.5L220.5 61L222.5 63.5L223 66.5L228.5 64L228 58.5L232.5 56L233.5 55.5L263.5 42H265L304 25L308.5 29V35.5L336.5 60V57.5L340 56.5L345.5 61.5V69.5L343.5 70.5L341.5 198L350.5 207.5L348.5 225V227L352.5 234L148.5 335.5L143 327.5L133.5 333.5L129 327.5L119.5 331.5L1.5 191L8 187.5L5.5 167.5L18 161.5L3 35L0.5 32.5V25L8 22L9 23.5Z"
        />
      </svg>
    </div>
  )
}


export const FirstObjectBlock3 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 3 }) }

  return (
    <div className="absolute pointer-events-none top-[199px] left-[393px]">
      <MTitleBuilding title={`${t("one_block")} 3`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[280px] top-[115px] w-[110px]`} />
      <svg width="315" height="316" viewBox="0 0 315 316" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }}
          className="object_patch"
          d="M315 177.5L307 171L309.5 169.5V163.5L293.5 151L287 153.5V156.5L284.5 157.5V151.5L286.5 151V145L271 132L264.5 135.5L260.5 132C260.167 132.167 259.5 132.6 259.5 133C259.5 133.4 259.167 132.167 259 131.5L251 125L233.5 131.5V138.5L220 143.5L208.5 133.5L210.5 132.5L210 126.5L196.5 114.5H194.5L193.5 86L195.5 85V77L189 71.5L191.5 71V64.5L177.5 53L171 55.5V59H169.5V55L171.5 54.5L171 48L158 37.5L152 39.5L148 37.5L147 38V36.5L139.5 31L122.5 36.5V43L109.5 47.5L100 39L102 38L101 32L89 21L83.5 23.5V16.5L69 6.5L65 8.5L62 6L60 7V5L53.5 0L37 6L37.5 11.5L23 17L22.5 15.5L18.5 11.5L0.5 17.5L1.5 27L4 34.5L5 36.5L16 161L18 164V177L46.5 205L50 203.5L55 208.5L58 207L63.5 211L66 209.5L68.5 211L95 199L109.5 211.5L112 259.5V262L114 264.5L113.5 268.5L115.5 270V276L152 301.5L174.5 290.5L176.5 293C176.833 293.833 177.5 295.6 177.5 296C177.5 296.4 180.5 294.5 182 293.5V288L217 271.5L219 272L258 254.5L262.5 259V265.5L290.5 290V287.5L294 286L299.5 291V299.5L297.5 300.5V315.5H309.5L313 186.5L315 185.5V177.5Z" />
      </svg>
    </div>
  )
}

export const FirstObjectBlock4 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 4 }) }

  return (
    <div className="absolute pointer-events-none top-[90px] left-[384px]">
      <MTitleBuilding title={`${t("one_block")} 4`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[190px] -top-[30px] w-[110px]`} />
      <svg width="224" height="208" viewBox="0 0 224 208" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }}
          className="object_patch"
          d="M7 181.5L13.5 179.5L2.5 70L1 68.5L0.5 61L32 51L33.5 55.5L39 54V48.5L62.5 41L64.5 43L70.5 43.5L71 39L128.5 21L129.5 25.5L134.5 24V19L157.5 11.5L158.5 14L164 12.5V9.5L192.5 0L197 3V9L216.5 22L217 20L219 19.5L222.5 22V29L221 30L224 162.5L197.5 172L185.5 162L179 164.5V168H177.5V164L179.5 163.5V157.5L166 146.5L160 148.5L156.5 146.5L155 147V145.5L147.5 140L130.5 145.5V152L117 156L108 148L110 147L109 141L97 130L91.5 132.5V125.5L77.5 115.5L73 117.5L70 115L68.5 115.5L68 114L61.5 109L45 114.5L45.5 120.5L31.5 126L30.5 124.5L26.5 120.5L8.5 126.5L9.5 136L13 145.5L18.5 207.5L10 200V196.5L9 195V184.5L8 183.5L7 181.5Z" />
      </svg>
    </div>
  )
}

export const FirstObjectBlock5 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 5 }) }

  return (
    <div className="absolute pointer-events-none top-[112px] left-[661px]">
      <MTitleBuilding title={`${t("one_block")} 5`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[185px] top-[60px] w-[110px]`} />
      <svg width="257" height="284" viewBox="0 0 257 284" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }}
          className="object_patch"
          d="M257 178.5L256 187L254 187.5L249 235.5L245.5 237L244 236L218 247L219 248.5L212 251.5L212.5 257.5L208.5 259L208 255.5L206.5 254L144.5 281V282.5L143 281.5L141.5 280.5L134 284L135.5 267L105 239.5L88.5 245.5L89 249L69 254L21.5 217.5L22 178L1 160V22.5L0 20V14.5L15.5 10L20 14.5L30 11V5L45 0L52.5 4L53 6L54 5.5L57.5 8L58 7L63 5.5L96 28V33.5L101.5 38V45.5L99.5 46.5L99 63L122 79V85L126.5 88.5L128 88L133.5 92.5L144 88.5V82L160 76.5L173 85.5L179 83L216.5 108.5L215.5 115L222.5 120V128L220.5 129L219.5 146L249 165.5V173L257 178.5Z" />
      </svg>
    </div>
  )
}

export const FirstObjectBlock6 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 6 }) }

  return (
    <div className="absolute pointer-events-none top-[335px] left-[725px]">
      <MTitleBuilding title={`${t("one_block")} 6`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[220px] -top-[20px] w-[110px]`} />
      <svg width="258" height="293" viewBox="0 0 258 293" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }}
          className="object_patch"
          d="M47 288L0.5 246L6 100L4 99V91L38 76L40 77.5L40.5 81L45.5 78.5V73.5L50.5 71L50 69L77.5 57.5L80.5 59.5V58L142.5 31L144 32.5L144.5 36L148.5 34.5L148 28.5L155 25.5L154 24L180 13L181.5 14L213 0L218 3.5V8L220 9C220.288 9.86442 220.751 11.4014 220.612 11.5439C221.598 12.1365 228.056 16.6042 231.5 19L233 18.5L235.5 20V22L248.5 30.5L249 28L251 26.5L257 31L256.5 39L254.5 39.5L238.5 164L247.5 171L248 173.5V185L257.5 193.5L233.5 204L232 202.5L229 204L230.5 207.5L176 234L172.5 230.5L170 233L171.5 235.5L157 242.5L151 237L148.5 238.5L153 244.5L137.5 252L135 249.5L133 251L134 255L56.5 293L50 287L47 288Z" />
      </svg>
    </div>
  )
}

export const FirstObjectBlock7 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 7 }) }

  return (
    <div className="absolute pointer-events-none top-[21px] left-[653px]">
      <MTitleBuilding title={`${t("one_block")} 7`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[270px] top-[50px] w-[110px]`} />
      <svg width="309" height="260" viewBox="0 0 309 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }}
          className="object_patch"
          d="M309 239L260.5 260L257 256.5L227.5 237L228.5 220L230.5 219V211L223.5 206L224.5 199.5L187 174L181 176.5L168 167.5L152 173V179.5L151 180L136 170.5L130 173V170L107 154L107.5 137.5L109.5 136.5V129L104 124.5V119L71 96.5L66 98L65.5 99L62 96.5L61 97L60.5 95L53 91L38 96V102L28 105.5L23.5 101L8 105.5V111L9 113.5V182.5L0.5 178.5V160.5L7.5 157.5L8 51.5H6.5V44L33.5 35.5L34.5 40L39 38.5V34.5L114.5 11L115 14.5L119.5 13V8.5L147.5 0L170 13.5V18.5L172 19.5V16.5L174 16L211 38L210.5 43L213 44.5L213.5 42L216 41L230 49.5V54.5L232 56L233 53L234.5 52.5L273 75.5V81L276.5 83L277 78L303.5 94V101.5L301.5 102L290.5 205.5L309 217V239Z" />
      </svg>
    </div>
  )
}

export const FirstObjectBlock8 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 8 }) }

  return (
    <div className="absolute pointer-events-none top-[174px] left-[986px]">
      <MTitleBuilding title={`${t("one_block")} 8`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[170px] top-[30px] w-[110px]`} />
      <svg className="pointer-events-none" width="223" height="319" viewBox="0 0 223 319" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M49.5 318.5L0.5 281.5L16.5 167.5L9.5 163.5L28.5 25L27.5 24.5L28 16.5L33 14.5L35 16V19L41 16.5V14.5L43 12.5L46 14.5L51.5 12.5V11.5L54.5 9.5L56 10.5L64.5 7.5L65 1.5L70.5 0L96.5 15V20L100 22.5L100.5 20L102.5 18.5L123 30.5L122 35.5L127.5 38.5L128 35.5L130 34.5L182.5 65.5L182 70.5L188 74L188.5 70.5L190.5 69.5L223 88.5L222 96.5L219.5 98L196 209.5L212.5 221L209.5 242.5L198.5 248V252.5L76.5 313.5L72.5 311L49.5 318.5Z"
        />
      </svg>
    </div>
  )
}