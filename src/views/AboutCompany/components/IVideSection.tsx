import { SimplePlayIcon } from "../../../components/Icons"

function IVideSection() {
  return (
    <section className="m-container relative mb-[80px]">
      <img
        src="https://www.sobha.com/blog/wp-content/uploads/2022/12/difference-between-flats-and-apartments-flat-vs-apartment.png"
        className="w-full h-[279px] object-center object-cover rounded-[12px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[652px] lg:rounded-[24px]"
      />

      <div className="absolute inset-0 bg-black/20"></div>
      <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <SimplePlayIcon />
      </button>
    </section>
  )
}

export default IVideSection