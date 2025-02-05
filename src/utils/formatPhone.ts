export const formatPhone = (phone: string): string => {
  if (!phone || typeof phone !== "string") return ""


  const country_code = phone.slice(0, 4) || "___"
  const company_code = phone.slice(4, 6) || "__"
  const first_three_code = phone.slice(6, 9) || "___"
  const second_two_code = phone.slice(9, 11) || "__"
  const fourth_two_code = phone.slice(11, 13) || "__"

  return `${country_code} ${company_code} ${first_three_code} ${second_two_code} ${fourth_two_code}`
}