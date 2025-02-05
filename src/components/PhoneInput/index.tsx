import InputMask from "react-input-mask"


function PhoneInput({
  className = "",
  phoneChangeHandler,
  value,
  validError = "",
}) {
  return (
    <div>
      <div className={`${className} relative text-xl`}>
        <span className="absolute top-1/2 -translate-y-1/2 left-[16px] pointer-events-none">+998</span>
        <InputMask
          value={value}
          onChange={phoneChangeHandler}
          mask={"99    999    99    99"}
          placeholder="_ _    _ _ _    _ _    _ _"
          className={`${validError ? "border-[#ff0000]" : "border-transparent"} border bg-[#040507] rounded-[12px] pl-[70px] pr-[16px] py-[10px] font-medium outline-none w-full placeholder:text-white`}
        />
      </div>
      {!!validError && <p className="text-[#ff0000]">{validError}</p>}
    </div>
  )
}

export default PhoneInput