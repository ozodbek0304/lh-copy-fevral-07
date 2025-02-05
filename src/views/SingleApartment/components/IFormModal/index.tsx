import { ChangeEvent, FormEvent, memo, useEffect, useState } from "react"
import { CloseIcon } from "../../../../components/Icons"
import MInput from "../../../../components/MInput"
import PhoneInput from "../../../../components/PhoneInput"
import { useNavigate, useParams } from "react-router-dom"
import useFetchMutate from "../../../../hooks/fetching/useFetchMutate"
import { toast } from "react-toastify"


const initialData = { full_name: "", phone: "__    ___    __    __" }


function IFormModal({ onClose = () => { } }) {
  const navigate = useNavigate()
  const params = useParams()
  
  const objectId = +params?.objectId
  const apartmentId = +params?.apartmentId

  const [formData, setFormData] = useState(initialData)
  const [validErrors, setValidErrors] = useState({ full_name: null, phone: null })

  useEffect(() => { if (!apartmentId) navigate("/") }, [])


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
      room_id: apartmentId,
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
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black/70 z-50"></div>
      <form onSubmit={onSubmit} className="w-11/12 sm:w-[448px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-[16px] pb-[16px] pt-[18px] rounded-[16px] bg-[#1E1E1E] z-50">
        <button onClick={onClose} type="button" className="p-[5.71px] absolute top-[26px] right-[15px]">
          <CloseIcon />
        </button>
        <h2 className="text-center mb-[40px] text-3xl text-[18px] min-[290px]:text-[22px] xs:text-3xl">Отправить запрос</h2>
        <MInput validError={validErrors?.full_name} nameChangeHandler={nameChangeHandler} value={formData.full_name} className="" />
        <PhoneInput validError={validErrors?.phone} phoneChangeHandler={phoneChangeHandler} value={formData.phone} className="mt-[20px]" />
        <button disabled={isLoading} className="text-xl font-medium py-[16px] w-full rounded-[12px] bg-[var(--orange)] mt-[20px]">Отправить заявку</button>
      </form>
    </>
  )
}

export default memo(IFormModal)