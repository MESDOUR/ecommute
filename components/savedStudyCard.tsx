import { ClockIcon, CalendarIcon } from 'lucide-react';

interface SavedStudyCardProps {
	title?: string;
	description?: string;
	effectiveDate?: Date;
	expireDate?: Date;
}

const SavedStudyCard = ({
	title,
	description,
	effectiveDate,
	expireDate,
}: SavedStudyCardProps) => {
	return (
		<div className='w-full flex items-center gap-3 p-4 border rounded-xl transition-all group bg-white/[0.06] border-white/10 hover:bg-white/10 hover:bg-white/[0.1] hover:border-white/20'>
			<button className='flex-1 text-left'>
				<div className='flex items-center ga-2'>
					<h4 className='text-white font-semibold text-sm'>
						HQ Paris Relocalisation
					</h4>
				</div>
				<p className='text-xs text-slate-400  mr-1 line-clamp-1'>
					évaluer le déménagement d&apos;une entreprise de Paris
					centre vers la Défense
				</p>
				<div className='flex items-center gap-3 mt-1.5 text-xs text-slate-500'>
					<span className='flex items-center gap-1'>
						<ClockIcon className='w-3 h-3' />5 Mai 2026, 13:30
					</span>
					<span>35 employés</span>
					<span>8 POIs</span>
				</div>
				<div className='flex items-center gap-1 mt-1 text-xs text-slate-500 '>
					<CalendarIcon className=' w-3 h-3 ' />
					Expire le 3 juillet 2026
				</div>
			</button>
		</div>
	);
};

export default SavedStudyCard;
