export const scrollById = (id: string): void => {
	const element = document.getElementById(id);
	element?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
}