import React from 'react';
import Link from 'next/link';
import BackgroundContainer from '@/components/common/background-container';

export default function Hero() {
	return (
		<BackgroundContainer>
			<div className="relative mb-4 h-[30vh] w-full ">
				<div className="flex items-center justify-center mb-12">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
						</span>
						<span className="text-sm text-blue-400 font-medium">Powered by AI</span>
					</div>
				</div>

				<h1 className="text-center text-7xl md:text-8xl font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.blue.500),theme(colors.indigo.400),theme(colors.purple.600),theme(colors.blue.400),theme(colors.violet.500),theme(colors.indigo.400),theme(colors.blue.500))] bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
					EdgeTalent AI
				</h1>
			</div>
			<p className="mb-4 text-center text-xl text-gray-400 max-w-2xl mx-auto">
				Revolutionizing Recruitment with AI-Driven Solutions
			</p>
			<p className="mb-12 text-center text-lg bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-600 bg-clip-text text-transparent md:text-xl max-w-3xl mx-auto">
				Intelligent candidate matching, skill gap analysis, and comprehensive assessment tools.
			</p>
			<Link
				href="/resume"
				className="group relative inline-flex h-12 overflow-hidden rounded-full p-[2px]"
			>
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#8B5CF6_50%,#3B82F6_100%)]" />
				<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-base font-semibold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900">
					Get Started
					<svg
						width="18"
						height="18"
						viewBox="0 0 0.3 0.3"
						fill="#FFF"
						xmlns="http://www.w3.org/2000/svg"
						className="ml-2 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
					>
						<path d="M.166.046a.02.02 0 0 1 .028 0l.09.09a.02.02 0 0 1 0 .028l-.09.09A.02.02 0 0 1 .166.226L.22.17H.03a.02.02 0 0 1 0-.04h.19L.166.074a.02.02 0 0 1 0-.028" />
					</svg>
				</span>
			</Link>
		</BackgroundContainer>
	);
}