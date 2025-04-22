import { Link } from "react-router-dom";
import { LongArrowIcon, PhoneIcon } from "../../../../components/Icons";
import useMainFetch from "../../../../hooks/fetching/useMainFetch";
import IImageSlider from "./IImageSlider";
import IStatistics from "./IStatistics";
import { useLanguages } from "../../../../hooks/useLanguages";

function IAboutCompany() {
  const [t] = useLanguages("main");

  const { data } = useMainFetch({
    key: "about",
    endpoint: `/about-company/`,
  });

  return (
    <section className="m-container mt-[35px] mb-[56px] lg:flex lg:gap-x-[40px] xl:gap-x-[60px] 2xl:gap-x-[100px]">
      <IImageSlider images_list={data?.images || []} />

      <div className="flex-1">
        <h2 className="font-medium text-[2rem] sm:text-center sm:text-4xl md:text-5xl 2xl:text-[3.5rem]">
          {t("mp_about_company")}
        </h2>
        <p className="text-sm font-medium mt-[12px] mb-[28px] sm:w-10/12 sm:mx-auto sm:text-base md:text-xl md:mt-[20px] 2xl:mt-[16px] 2xl:text-2xl lg:w-full">
          {data?.description}
        </p>

        <IStatistics data={data} />

        <div className="grid gap-y-[24px] mt-[28px] lg:grid-cols-2 lg:gap-x-[24px]">
          <Link
            to="/about-company"
            className="button_main bg-white text-[var(--orange)]"
          >
            <span>{t("ma_company")}</span>
            <LongArrowIcon />
          </Link>
          <Link
            to={`tel:${data?.phone}`}
            className="button_main bg-[var(--orange)] text-white"
          >
            <span>{t("pm_btn_contact")}</span>
            <LongArrowIcon fill="#fff" />
          </Link>
        </div>
      </div>

      <Link
        to={`tel:${data?.phone}`}
        className="fixed z-50 right-[12px] bottom-[15px] md:bottom-[50px] md:right-[30px] lg:bottom-[70px] lg:right-[45px] xl:right-[86px] xl:bottom-[117px] rounded-full flex justify-center items-center bg-[var(--orange)] w-[40px] h-[40px] md:w-[46px] md:h-[46px] lg:w-[50px] lg:h-[50px] xl:w-[56px] xl:h-[56px]"
      >
        <PhoneIcon
          fill="#fff"
          className="w-[18px] h-auto md:w-[20px] lg:w-[22px] lg:h-[24px]"
        />
      </Link>
    </section>
  );
}

export default IAboutCompany;
