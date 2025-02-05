import { useLanguages } from "../../../hooks/useLanguages"

function IStatistics({ data }) {
  const [t] = useLanguages("about_company")

  const statistics_list = [
    {
      title: t("objects"),
      value: data?.objects_count,
    },
    {
      title: t("satisfied_customers"),
      value: <span>{data?.clients}<sub className="text-xl">{t("year")}</sub></span>,
    },
    {
      title: t("experience"),
      value: <span>{data?.years}<sub className="text-xl">{t("thousand")}</sub></span>,
    },
  ]


  return (
    <section className="m-container text-center grid sm:grid-cols-3 mb-[80px] gap-y-[32px]">
      {
        statistics_list.map((item, index) => (
          <div key={index}>
            <h3 className="text-[var(--orange)] font-bold text-[48px] sm:text-[52px] md:text-[60px] lg:text-[80px] mb-[8px] lg:mb-[14px]">{item.value}</h3>
            <h5 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-light">{item.title}</h5>
          </div>
        ))
      }
    </section>
  )
}

export default IStatistics