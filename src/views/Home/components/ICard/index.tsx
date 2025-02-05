import { Link } from "react-router-dom";
import { HomeLocationIcon } from "../../../../components/Icons"
import { useLanguages } from "../../../../hooks/useLanguages";


type PropTypes = {
  image?: string;
  title?: string;
  location?: string;
  id?: number;
  status?: string;
}


function ICard({ image, title, location, status, id }: PropTypes) {
  const [t] = useLanguages("main")


  return (
    <Link to={`/object/${id}`} className="relative mx-auto w-full">
      <div
        className={`${status === "IN_PROCESS" ? "bg-[var(--orange)]" : "bg-[#75C80B]"} absolute top-0 left-0 px-[25.5px] py-[7.5px] rounded-tl-[12px] rounded-br-[12px] text-center font-medium text-sm 2xl:rounded-br-[16px]
        2xl:rounded-tl-[16px]`}
      >
        {
          status === "IN_PROCESS"
            ? t("in_progress")
            : t("completed")
        }
      </div>
      <img
        className="w-full h-[202px] object-cover object-center rounded-[12px] mb-[12px] 2xl:h-[294.41px] 2xl:rounded-[16px] 2xl:mb-[19.56px]"
        src={image}
        alt={title || "building image"}
      />
      <h3 title={title} className="text-lg font-medium mb-[8px] whitespace-normal text-ellipsis overflow-hidden 2xl:text-2xl 2xl:mb-[16px] ">{title}</h3>
      <h5 className="flex gap-x-[5px] items-center pr-[7px] text-xs font-medium 2xl:text-base xl:gap-x-[12px]" title={location}>
        <HomeLocationIcon />
        <span className="flex-1 whitespace-nowrap text-ellipsis overflow-hidden">{location}</span>
      </h5>
    </Link>
  )
}

export default ICard