
import Link from "next/link";
import Title from "./Title";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { SiNestjs, SiNextdotjs, SiPostgresql, SiSupabase, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Projets() {

	const projects = [
		{
			title: "Saas landing page",
			tech: [SiNextdotjs, SiTailwindcss, SiTypescript],
			link: "",
			cover: "/projects/project-1.png",
			bBackground: "bg-gradient-to-r from-gray-800 to-black",
		},
		{
			title: "Customer relationship management",
			tech: [SiNextdotjs, SiTailwindcss, SiTypescript, SiSupabase],
			link: "",
			cover: "/projects/project-3.webp",
			bBackground: "bg-gradient-to-r from-black to-green-400",
		},
		{
			title: "FT Trancendence: Ping Pong Game",
			tech: [SiNextdotjs, SiTailwindcss, SiTypescript, SiNestjs, SiPostgresql],
			link: "",
			cover: "/projects/project-4.png",
			bBackground: "bg-gradient-to-r from-indigo-400 to-black",
		},
		{
			title: "Portfolio",
			tech: [SiNextdotjs, SiTailwindcss, SiTypescript],
			link: "https://myportfolio-alouzizis-projects.vercel.app/",
			cover: "/projects/project-2.png",
			bBackground: "bg-gradient-to-r from-black to-gray-800",
		}
	];

	return (
		<div className="py-10 p-5 sm:p-0">

			<Title
				text="Projects 🎨"
				sx="flex flex-col items-center justify-center rotate-6"
			/>
			<div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
				{
					projects.map((project, index) => {
						return <div key={index}>{project.link ? (

							<Link href={project.link} target="_blank">
								<div className={cn("p-1 rounded-md", project.bBackground)}>
									<DirectionAwareHover
										imageUrl={project.cover}
										className="w-full h-80 space-y-5 cursor-pointer"
									>
										<div className="space-y-5">
											<h1 className="text-2xl font-bold">{project.title}</h1>
											<div className="flex items-center gap-5">
												{project.tech.map((Icon, i) => (
													<Icon className="w-8 h-8" key={i} />
												))}
											</div>
										</div>
									</DirectionAwareHover>
								</div>
							</Link>
						) : (
							<div className={cn("p-1 rounded-md", project.bBackground)}>
								<DirectionAwareHover
									imageUrl={project.cover}
									className="w-full h-80 space-y-5"
								>
									<div className="space-y-5">
										<h1 className="text-2xl font-bold">{project.title}</h1>
										<div className="flex items-center gap-5">
											{project.tech.map((Icon, i) => (
												<Icon className="w-8 h-8" key={i} />
											))}
										</div>
									</div>
								</DirectionAwareHover>
							</div>
						)}

						</div>
					})
				}
			</div>
		</div>
	)
}