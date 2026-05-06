import React from 'react';

export default function DashboardLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className='flex flex-col md:flex-row w-full h-scrren bg-slate-100 overflow-hidden'>
			{children}
		</div>
	);
}
