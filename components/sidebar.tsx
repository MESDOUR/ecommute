import { Map, House } from 'lucide-react';

const Sidebar = () => {
	return (
		<div className='w-full md:w-[380px] lg:w-[480px] h-full bg-white border-l border-slate-200 flex flex-col shadow-xl z-10 relative'>
			<div className='p-6 border-b border-slate-200 bg-slate-50/50'>
				<div className='flex items-center justify-between gap-3 mb-3'>
					<div className='flex items-center gap-3 min-w-0'>
						<div className='p-2.5 bg-slate-900 text-white rounded-xl shadow-sm shrink-0'>
							<Map className='w-5 h-5' />
						</div>
						<div className='min-w-0'>
							<h1 className='text-lg font-bold text-slate-9000 leading-tight'>
								eCommute
							</h1>
						</div>
					</div>
					<button className='p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded-lg transition-colors shrink-0'>
						<House className='w-5 h-5' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
