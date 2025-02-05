import i18next from "i18next";

// RU
import {
	ru_main,
	ru_about_company,
	ru_news,
	ru_object,
	ru_apartment,
} from "../locales/ru"

// UZ
import {
	uz_main,
	uz_about_company,
	uz_news,
	uz_object,
	uz_apartment,
} from "../locales/uz"


i18next.init({
	interpolation: { escapeValue: false },
	lng: localStorage.getItem("lng") || "ru",
	resources: {
		ru: {
			main: ru_main,
			about_company: ru_about_company,
			news: ru_news,
			object: ru_object,
			apartment: ru_apartment,
		},
		uz: {
			main: uz_main,
			about_company: uz_about_company,
			news: uz_news,
			object: uz_object,
			apartment: uz_apartment,
		}
	}
})

export default i18next