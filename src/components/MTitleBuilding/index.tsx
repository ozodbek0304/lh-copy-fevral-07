import { BuildingIcon } from '../Icons'

function MTitleBuilding({ title = "Блок 8", className = "" }) {
  return (
    <div className={`${className} pointer-events-none absolute text-[var(--orange)] bg-white px-[16px] py-[12px] rounded-r-[12px] rounded-tl-[12px]`}>
      {/* {currentBuilding.title} */}
      <div className="flex items-center gap-x-[12px]">
        <BuildingIcon />
        <span>{title}</span>
      </div>
    </div>
  )
}

export default MTitleBuilding