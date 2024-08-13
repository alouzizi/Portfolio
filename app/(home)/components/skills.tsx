'use client';
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Title from "./Title";

import { SiNestjs, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiSupabase, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Skills() {
	const Skills = [
		{
			title: "Nextjs",
			icone: SiNextdotjs
		},
		{
			title: "React",
			icone: SiNextdotjs
		},
		{
			title: "Tailwindcss",
			icone: SiTailwindcss
		},
		{
			title: "Nodejs",
			icone: SiNodedotjs
		},
		{
			title: "Nestjs",
			icone: SiNestjs
		},
		{
			title: "TypeScript",
			icone: SiTypescript
		},
		{
			title: "Prisma",
			icone: SiPrisma
		},
		{
			title: "Postgres",
			icone: SiPostgresql
		},
		{
			title: "Supabase",
			icone: SiSupabase
		},
	]
	return (
		<div className="max-w-5xl mx-auto px-8">

			<Title
				text="Skills 🔪"
				sx="flex flex-col items-center justify-center -rotate-6"
			/>

			<HoverEffect items={Skills} />

		</div>
	)
}