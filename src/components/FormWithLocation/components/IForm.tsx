import { ChangeEvent, FormEvent, useState } from "react"
import MInput from "../../MInput"
import PhoneInput from "../../PhoneInput"
import useFetchMutate from "../../../hooks/fetching/useFetchMutate"
import { toast } from "react-toastify"
import { useLanguages } from "../../../hooks/useLanguages"


const initialData = { full_name: "", phone: "__    ___    __    __" }


function IForm() {
  const [t] = useLanguages("main")
  const [formData, setFormData] = useState(initialData)
  const [validErrors, setValidErrors] = useState({ full_name: null, phone: null })


  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, full_name: event.target.value }))
    setValidErrors(prev => ({ ...prev, full_name: null }))
  };
  const phoneChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, phone: event.target.value }))
    setValidErrors(prev => ({ ...prev, phone: null }))
  }


  const { isLoading, mutate } = useFetchMutate({
    endpoint: "/applications/",
    method: "POST"
  })


  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let isValid = true

    if (
      formData.phone.includes("_")
      || !formData.phone
    ) {
      setValidErrors(prev => ({ ...prev, phone: t("phone_input_error") }))
      isValid = false
    }

    if (!formData.full_name) {
      setValidErrors(prev => ({ ...prev, full_name: t("name_input_error") }))
      isValid = false
    }

    if (!isValid) return

    const generateData = {
      full_name: formData.full_name,
      phone: "+998" + formData.phone.replace(/ /g, ""),
      object_id: 0,
      room_id: 0,
    }

    mutate({
      payload: generateData,
    }, {
      onError: (error) => {
        toast.error("Ваш запрос не был отправлен!")

        const errorKeys = Object.keys(error?.data || {})
        if (errorKeys.includes("full_name")) {
          setValidErrors(prev => ({
            ...prev,
            full_name: error?.data?.full_name?.[0]
          }))
        }
        if (errorKeys.includes("phone")) {
          setValidErrors(prev => ({
            ...prev,
            phone: error?.data?.phone?.[0]
          }))
        }
      },
      onSuccess: () => {
        toast.success("Ваш запрос отправлен!")
        setFormData(initialData)
      }
    })
  }


  return (
    <form onSubmit={onSubmit} className="grid gap-y-[20px]">
      <MInput placeholder={t("name")} validError={validErrors?.full_name} nameChangeHandler={nameChangeHandler} value={formData.full_name} />

      <PhoneInput validError={validErrors?.phone} phoneChangeHandler={phoneChangeHandler} value={formData.phone} />

      <button disabled={isLoading} className="bg-[var(--orange)] py-[16px] text-xl font-medium rounded-[12px] w-full">
        {t("send_request")}
      </button>
    </form>
  )
}

export default IForm