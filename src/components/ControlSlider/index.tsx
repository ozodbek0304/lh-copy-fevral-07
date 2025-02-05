import { FC } from "react";

type PropsType = {
  list: Array<any>;
  clickHandler: (index: number) => void;
  currentIndex: number;
  className?: string;
}


const ControlSlider: FC<PropsType> = ({
  list,
  clickHandler,
  currentIndex,
  className = ""
}) => {
  return (
    <ul className={`${className} w-full flex justify-center gap-x-[8px]`}>
      {
        list.map((_, index) => (
          <li key={index}>
            <button onClick={() => clickHandler(index)} className={`${currentIndex === index ? "bg-white" : ""} transition-all w-[12px] h-[12px] border border-white rounded-full`}></button>
          </li>
        ))
      }
    </ul>
  )
}

export default ControlSlider