
import Link from "next/link";
import Title from "./Title";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Projets() {

	const projects = [
		{
			title: "Saas landing page",
			tech: [SiNextdotjs, SiTailwindcss, SiTypescript],
			link: "https://saas-landing-page-ui.vercel.app/",
			cover: "/projects/project-2.png",
			// bBackground: "bg-gradient-to-r from-green-400 to-green-600",
		},
		{
			title: "Portfolio",
			tech: [SiNextdotjs, SiTailwindcss, SiTypescript],
			link: "https://myportfolio-alouzizis-projects.vercel.app/",
			cover: "/projects/project-2.png",
			bBackground: "bg-gradient-to-r from-green-400 to-green-600",
		},
		{
			title: "Saas landing page",
			tech: [SiNextdotjs, SiTailwindcss, SiTypescript],
			link: "https://saas-landing-page-ui.vercel.app/",
			cover: "/projects/project-2.png",
			bBackground: "bg-gradient-to-r from-indigo-400 to-indigo-600",
		},
		{
			title: "Portfolio",
			tech: [SiNextdotjs, SiTailwindcss, SiTypescript],
			link: "https://myportfolio-alouzizis-projects.vercel.app/",
			cover: "/projects/project-2.png",
			// bBackground: "bg-gradient-to-r from-yellow-400 to-yellow-600",
		}
	];

	return (
		<div className="py-10 p-5 sm:p-0">

			<Title
				text="Projects"
				sx="flex flex-col items-center justify-center rotate-6"
			/>
			<div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
				{
					projects.map((project, index) => {
						return <Link key={index} href={project.link}>
							<div className={cn("p-5 rounded-md", project.bBackground)}>
								<DirectionAwareHover
									imageUrl={project.cover}
									className="w-full space-y-5 cursor-pointer"
								>
									<div className="space-y-5">

										<h1 className="text-2xl font-bold">{project.title}</h1>
										<div className="flex items-center gap-5">
											{project.tech.map((Icon, i) => {
												return <Icon className="w-8 h-8" key={i} />
											})}
										</div>

									</div>
								</DirectionAwareHover>
							</div>
						</Link>
					})
				}
			</div>
		</div>
	)
}