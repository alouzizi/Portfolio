

export default function Title({ text, sx }: { text: string, sx?: string }) {
	return (
		<div className={sx}>
			<div>
				<h1 className="text-3xl font-bold group-hover:text-green-400">{text}</h1>
				<div className="w-40 h-2 bg-green-500 rounded-full"></div>
				<div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
			</div>
		</div>

	)
}