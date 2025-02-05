
function ILocation() {
  return (
    <div className="my-[80px] relative">
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      <iframe
        className="w-full rounded-[24px] h-[312px] sm:h-[320px] md:h-[350px] lg:h-[450px] xl:h-[600px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5039.735039651641!2d69.23833149182337!3d41.31659925916942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b40d847941d%3A0x5765a18b352df71e!2sTashkent%20City%20Park!5e0!3m2!1sen!2s!4v1726033740741!5m2!1sen!2s"
        loading="lazy"
      >
      </iframe>
    </div>
  )
}

export default ILocation