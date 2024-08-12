import Link from "next/link";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Navbar() {

	const socials = [
		{
			Link: "https://github.com/alouzizi",
			Lable: "LinkedIn",
			Icon: SiLinkedin,
		},
		{
			Link: "https://github.com/alouzizi",
			Lable: "GitHub",
			Icon: SiGithub,
		},
		{
			Link: "https://github.com/alouzizi",
			Lable: "X",
			Icon: SiX,
		},
	];

	return (
		<nav className="py-10 flex justify-between items-center">
			<h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">Ali Louzizi 👨🏼‍💻</h1>
			<div className="flex items-center gap-5">
				{socials.map((social, index) => {
					const Icon = social.Icon;
					return (<Link href={social.Link} key={index} aria-label={social.Lable}>
						<Icon className="w-5 h-5 hover:scale-125  transition-all" />
					</Link>)
				})}
			</div>
		</nav>
	)
}