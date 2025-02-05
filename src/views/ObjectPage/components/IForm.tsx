import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import MInput from "../../../components/MInput"
import PhoneInput from "../../../components/PhoneInput"
import useFetchMutate from "../../../hooks/fetching/useFetchMutate"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { useLanguages } from "../../../hooks/useLanguages"


const initialData = { full_name: "", phone: "__    ___    __    __" }


function IForm() {
  const navigate = useNavigate()
  const params = useParams()
  const objectId = +params?.objectId
  const [t] = useLanguages("object")

  const [formData, setFormData] = useState(initialData)
  const [validErrors, setValidErrors] = useState({ full_name: null, phone: null })

  useEffect(() => { if (!objectId) navigate("/") }, [])

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
      setValidErrors(prev => ({ ...prev, phone: "Введите номер телефона" }))
      isValid = false
    }

    if (!formData.full_name) {
      setValidErrors(prev => ({ ...prev, full_name: "Введите свое имя" }))
      isValid = false
    }

    if (!isValid) return

    const generateData = {
      full_name: formData.full_name,
      phone: "+998" + formData.phone.replace(/ /g, ""),
      object_id: objectId,
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
    <form id="send-request-form" onSubmit={onSubmit} className="grid lg:grid-cols-3 gap-y-[20px] gap-x-[20px] p-[16px] rounded-[16px] bg-[#1E1E1E] mb-[95px]">
      <MInput validError={validErrors?.full_name} nameChangeHandler={nameChangeHandler} value={formData.full_name} placeholder={t("name")} />
      <PhoneInput validError={validErrors?.phone} phoneChangeHandler={phoneChangeHandler} value={formData.phone} />
      <button disabled={isLoading} className="bg-[var(--orange)] text-xl font-medium rounded-[12px] py-[16px] lg:py-0 lg:h-[50px]">{t("submit_requrest")}</button>
    </form>
  )
}

export default IForm