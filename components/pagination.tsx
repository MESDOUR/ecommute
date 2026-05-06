import { PAGE_SIZE } from '@/utils/constants';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const Pagination = () => {
	return (
		<div className='flex items-center justify-between pt-4 mt-2 border-t border-white/10'>
			<span className='text-xs text-slate-500'>1 - 5 de 10</span>
			<div className='flex items-center gap-1'>
				<button
					className='p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-md transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not'
					aria-label='previous'>
					<ChevronLeftIcon className='w-4 h-4 rotate-100' />
				</button>

				{Array.from({ length: 3 }, (_, i) => i + 1).map((pageNum) => (
					<button
						key={pageNum}
						className='min-x-[28px] h-7 px-2 text-xs font-medium rounded-md transition-colors text-slate-400  hover:text-white hover:bg-white/10 '>
						{pageNum}
					</button>
				))}

				<button
					className='p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-md transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not'
					aria-label='previous'>
					<ChevronRightIcon className='w-4 h-4 rotate-100' />
				</button>
			</div>
		</div>
	);
};

export default Pagination;
