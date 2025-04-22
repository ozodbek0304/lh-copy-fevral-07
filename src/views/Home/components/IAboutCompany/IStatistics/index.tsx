
function IStatistics({data}:any) {

  const statistics_list = [
    {
      title: data?.key1,
      value: data?.obj1,
    },
    {
      title: data?.key2,
      value: <span>{data?.obj2}<sub>тыcяч</sub></span>,
    },
    {
      title: data?.key3,
      value: <span>{data?.obj3}<sub>лет</sub></span>,
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