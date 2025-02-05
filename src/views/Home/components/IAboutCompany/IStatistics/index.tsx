import { useLanguages } from "../../../../../hooks/useLanguages";

// type PropsType = {
//   objectsCount: number;
//   clients: number;
//   years: number;
// }


// function IStatistics({ objectsCount, clients, years }: PropsType) {
function IStatistics() {
  const [t] = useLanguages("main")

  const statistics_list = [
    {
      title: t("objects"),
      // value: objectsCount,
      value: 50,
    },
    {
      title: t("satisfied_customers"),
      // value: <span>{clients}<sub>тыcяч</sub></span>,
      value: <span>{400}<sub>тыcяч</sub></span>,
    },
    {
      title: t("experience"),
      // value: <span>{years}<sub>лет</sub></span>,
      value: <span>{20}<sub>лет</sub></span>,
    },
  ]


  return (
    <div className="grid gap-y-[32px] lg:grid-cols-3">
      {
        statistics_list.map((item, index) => (
          <div key={index} className="inter grid gap-y-[8px] justify-center text-center lg:gap-y-[2px] xl:gap-y-[8px]">
            <span className="text-[var(--orange)] text-[48px] font-bold lg:text-[40px] xl:text-[48px]">{item.value}</span>
            <span className="text-lg font-light 2xl:text-2xl">{item.title}</span>
          </div>
        ))
      }
    </div>
  )
}

export default IStatistics