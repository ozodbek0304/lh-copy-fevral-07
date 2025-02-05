import { useState } from "react"
import MTitleBuilding from "../../MTitleBuilding"
import useRouters from "../../../hooks/useRouters"
import { useLanguages } from "../../../hooks/useLanguages"


export const FourthObjectBlock1 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 1 }) }

  return (
    <div className="absolute pointer-events-none top-[168px] left-[628px]">
      <MTitleBuilding title={`${t("one_block")} 1`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[185px] -top-[30px] w-[110px]`} />

      
      <svg className="pointer-events-none" width="336" height="513" viewBox="0 0 336 513" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }} className="object_patch" d="M91 225L1 141V140.5L24.5 126.5L20.5 122L44.5 107.5L39 101.5L90 71.5V56L86 54V48L147.5 13.5L167 28L188.5 15.5L197 21L217.5 9L224 13.5L242.5 1.5L335 70.5L263 341.5L273.5 352V367L80 511L91 225Z" stroke="black"/>
      </svg>
     

    </div>
  )
}

export const FourthObjectBlock2 = () => {
    const [t] = useLanguages("object")
    const [isActive, setIsActive] = useState(false)
    const { setQueries } = useRouters()
    const clickHandler = (): void => { setQueries({ block: 2 }) }
  
    return (
      <div className="absolute pointer-events-none top-[294px] left-[379px]">
        <MTitleBuilding title={`${t("one_block")} 2`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[200px] top-[15px] w-[110px]`} />
        <svg width="343" height="499" viewBox="0 0 343 499" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            onClick={clickHandler}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            style={{ pointerEvents: "all" }}
            className="object_patch"
            d="M218.5 39L251 21L338 101.5L327.5 388.5L178.5 490L98.5 382.5L85 337.5L76 324L5.5 61.5L41.5 43L40 40L50.5 35L53 37.5L122.5 3L141 22L179 1L218.5 39Z" stroke="black" shape-rendering="crispEdges"/>
        </svg>
      </div>
    )
  }


export const FourthObjectBlock3 = () => {
  const [t] = useLanguages("object")
  const [isActive, setIsActive] = useState(false)
  const { setQueries } = useRouters()
  const clickHandler = (): void => { setQueries({ block: 3 }) }

  return (
    <div className="absolute pointer-events-none top-[125px] left-[228px]">
      <MTitleBuilding title={`${t("one_block")} 3`} className={`${isActive ? "opacity-100" : "opacity-0"} transition-all duration-300 left-[150px] -top-[10px] w-[110px]`} />
      <svg width="275" height="494" viewBox="0 0 275 494" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onClick={clickHandler}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          style={{ pointerEvents: "all" }}
          className="object_patch"
          d="M260 154.5L274 169.5L204 204.5L201.5 201.5L189 208L190.5 211.5L154 229L225 493L210 474L205 477L179 444L174 446.5L142 402.5V392.5L129 373.5L122.5 358.5L113 344L1.5 50.5L36 35.5L33.5 32.5L43.5 27.5L46.5 30.5L112 1.5L127 16.5L133 13L148 27.5L156.5 23L166 32L179 25L221 67V90L259 128.5L249.5 133L266 150.5L260 154.5Z" stroke="black"/>
      </svg>
    </div>
  )
}



