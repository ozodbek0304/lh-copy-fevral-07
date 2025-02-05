
function MInput({
  placeholder = "Имя",
  className = "",
  nameChangeHandler,
  value,
  validError = "",
}) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={nameChangeHandler}
        className={`${className} ${!!validError ? "border-[red]" : "border-transparent"} border bg-[#040507] rounded-[12px] px-[16px] py-[10px] font-medium text-xl outline-none w-full`}
        placeholder={placeholder}
      />
      {
        !!validError &&
        <p className="text-sm text-[red]">{validError}</p>
      }
    </div>
  )
}

export default MInput