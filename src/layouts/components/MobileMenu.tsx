import { useState } from "react";
import { CloseIcon } from "../../components/Icons";
import { Link, useNavigate } from "react-router-dom";
import { scrollById } from "../../utils/scrollById";
import { useLanguages } from "../../hooks/useLanguages";

type NavType = {
	title: string;
	link: string;
	havePage?: boolean;
}[]

function MobileMenu({ nav_list, close_modal }: { nav_list: NavType; close_modal: any }) {
	const navigate = useNavigate()
	const [, changeLng] = useLanguages("main")
	const [currentLng, setCurrentLng] = useState(localStorage.getItem("lng") || "ru")

	const changeLngHandler = (lng: string) => {
		setCurrentLng(lng)
		changeLng(lng)
	}

	const scrollByIdHandler = (id: string) => {
		close_modal()
		scrollById(id)
		navigate(`/#${id}`)
	}

	// {
	//     item.havePage ?
	//       <Link to={item.link} className="hover:text-[var(--orange)] transition-all">
	//         {item.title}
	//       </Link>
	//       :
	//       <button onClick={() => scrollByIdHandler(item.link)} className="hover:text-[var(--orange)] transition-all">
	//         {item.title}
	//       </button>
	//   }
	return (
		<div className="fixed inset-0 z-40 lg:hidden">
			<div onClick={close_modal} className="fixed inset-0 bg-black/80 backdrop-blur-[5px]"></div>
			<div className="fixed inset-0 flex justify-center items-center text-xl font-semibold text-center">
				<button onClick={close_modal} className="absolute top-[70px] right-[25px]">
					<CloseIcon width="20" height="20" fill="#fff" />
				</button>
				<ul className="grid gap-y-[10px] relative">

					<li className="flex justify-center items-center gap-x-[6px] text-lg">
						<button onClick={() => changeLngHandler("uz")} className={`${currentLng === "uz" ? "" : "font-normal text-white/80"} w-[30px]`}>UZ</button>
						<span className="h-[20px] border"></span>
						<button onClick={() => changeLngHandler("ru")} className={`${currentLng === "ru" ? "" : "font-normal text-white/80"} w-[30px]`}>RU</button>
					</li>
					{nav_list.map((item, index) => (
						<li key={index}>
							{/* <button>{item.title}</button> */}
							{
								item.havePage ?
									<Link onClick={close_modal} to={item.link} className="hover:text-[var(--orange)] transition-all">
										{item.title}
									</Link>
									:
									<button onClick={() => scrollByIdHandler(item.link)} className="hover:text-[var(--orange)] transition-all">
										{item.title}
									</button>
							}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default MobileMenu