import { useTranslation } from "react-i18next"
import { useQueryClient } from "react-query"


type TOverloadFunc = (word: string) => string
type HandleChangeLanguage = (lng: string) => void


export const useLanguages = (lng_branch_name: string): [TOverloadFunc, HandleChangeLanguage] => {
    const [t, i18n] = useTranslation(lng_branch_name)
    const queryClient = useQueryClient()

    const handleChangeLanguage: HandleChangeLanguage = (lng: string): void => {
        i18n.changeLanguage(lng)
        localStorage.setItem("lng", lng)
        queryClient.refetchQueries()
    }

    const t_overload_func: TOverloadFunc = (word: string): string => {
        return t(word) || ""
    }

    return [t_overload_func, handleChangeLanguage]
}