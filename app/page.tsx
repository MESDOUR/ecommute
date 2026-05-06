'use client';

import { colors } from '@/tokens';
import {
	MapIcon,
	PlusCircle,
	ChevronRightIcon,
	ChevronLeftIcon,
	PlusCircleIcon,
	FileTextIcon,
	CalendarIcon,
	FolderOpenIcon,
	FileUpIcon,
	DatabaseIcon,
	SearchIcon,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import SavedStudyCard from '@/components/savedStudyCard';
import Pagination from '@/components/pagination';

import { useState } from 'react';

const home = () => {
	const [mode, setMode] = useState<
		'main' | 'new-analysis' | 'browse' | 'saved'
	>('saved');

	return (
		<div className='w-full h-screen flex items-center justify-center rerlative overflow-hidden bg-primary-0'>
			{/* Background Dot pattern*/}
			<div className='dot'></div>
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-2xl'></div>

			<AnimatePresence mode='wait'>
				{mode == 'main' && (
					<motion.div
						key='main'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}>
						<div className='relative z-10 flex flex-col items-center px-6 max-w-lg w-full'>
							<div className='mb-10 flex flex-col items-center'>
								{/* logo eCommute*/}
								<div className='w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-5 border border-white/10'>
									<MapIcon
										size={32}
										color={colors.primary[50]}
									/>
								</div>

								<h1 className='text-3xl font-bold text-white tracking-tight'>
									eCommute
								</h1>
								<p className='text-slate-400 mt-2 text-center text-sm leading-relaxed max-w-xs'>
									Outil d'&apos;analyse cartographique
								</p>
							</div>
							<div className='w-full space-y-3'>
								<button
									onClick={() => setMode('new-analysis')}
									className='w-full group flex items-center text-slate-400 gap-4 p-5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 rounded-xl transition-all text-left'>
									<PlusCircle
										size={32}
										color={colors.primary[50]}
									/>
									<div className='flex-1'>
										<h1 className='text-white font-semibold text-base'>
											Nouvelle Analyse
										</h1>
										<p className='text-slate-400 text-sm mt-0.5'>
											Démarrer une nouvelle analyse
										</p>
									</div>

									<ChevronRightIcon size={32} />
								</button>
								<div className='w-full bg-white[0.06] border bg-white/[0.06] border-white/10 rounded-xl overflow-hidden'>
									<div className='p-5 pb-3'>
										<div className='flex items-center gap-3 mb-1'>
											<div className='p-3 bg-success/50 rounded-xl'>
												<FolderOpenIcon className='w-6 h-6 text-success' />
											</div>
											<div>
												<h3 className='text-white font-semibold text-base'>
													Charger une analyse
												</h3>
												<p className='text-slate-400 text-sm mt-0.5'>
													Reprendre une analyse
													précédente
												</p>
											</div>
										</div>
										<div className='px-5 py-4 space-y-2'>
											<button
												onClick={() =>
													setMode('browse')
												}
												className='w-full flex items-center gap-3 px-4 py-3 bg-white/[0.04] hover:bg-white/[0.08] rounded-lg transition-colors text-left group'>
												<FileUpIcon className='w-4 h-6 text-slate-400' />
												<span className='text-sm text-slate-300 font-medium'>
													Parcourir les fichiers
												</span>
												<span className='text-xs text-slate-500 font-medium ml-auto'>
													.Json
												</span>
											</button>

											<button
												onClick={() => setMode('saved')}
												className='w-full flex items-center gap-3 px-4 py-3 bg-white/[0.04] hover:bg-white/[0.08] rounded-lg transition-colors text-left group'>
												<DatabaseIcon className='w-4 h-6 text-slate-400' />
												<span className='text-sm text-slate-300 font-medium'>
													Parcourir les sauvegardes
												</span>
												<span className='text-xs text-slate-500 font-medium ml-auto'>
													0 analyses
												</span>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				)}
				{/*-- NEW ANALYSIS FORM*/}
				{mode == 'new-analysis' && (
					<motion.div
						key='new-analysis'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{
							duration: 0.6,
							ease: 'easeOut',
						}}
						className='relative z-10 flex flex-col items-center px-6 max-w-lg w-full'>
						<button
							onClick={() => setMode('main')}
							className='self-start mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm'>
							<ChevronLeftIcon className='w-4 h-4 rotate-100' />
							Retour
						</button>
						<div className='h-16 w-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-5 border border-white/10'>
							<PlusCircleIcon className='w-8 h-8- text-blue-400' />
						</div>
						<h2 className='text-2xl font-bold text-white text-white mb-2'>
							Nouvelle Analyse
						</h2>
						<p className='text-slate-400 text-sm mb-8 text-center'>
							Renseigner les détails de votre nouvelle étude
						</p>
						<div className='w-full space-y-5'>
							{/* Study name*/}
							<div>
								<label className='flex items-center gap-2 text-sm font-medium text-slate-300 mb-2'>
									<FileTextIcon className='w-4 h-4 text-slate-400' />
									Nom de l&apos;étude{' '}
									<span className='text-rose-400'>*</span>
								</label>
								<input
									type='text'
									placeholder='e.g. Paris HQ Relocalisation 2026'
									className='w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-colors resize-none'
								/>
							</div>

							{/* Description*/}
							<div>
								<label className='flex items-center gap-2 text-sm font-medium text-slate-300 mb-2'>
									<FileTextIcon className='w-4 h-4 text-slate-400' />
									Description
									<span className='text-rose-400'>*</span>
								</label>
								<input
									type='text'
									placeholder='e.g. Paris HQ Relocalisation 2026'
									className='w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-colors resize-none'
								/>
							</div>

							{/* Expiry date */}
							<div>
								<label className='flex items-center gap-2 text-sm font-medium text-slate-300 mb-2'>
									<CalendarIcon className='w-4 h-4 text-slate-400' />
									Date d&apos;expiration{' '}
									<span className='text-rose-400'>*</span>
								</label>
								<input
									type='date'
									placeholder='e.g. Paris HQ Relocalisation 2026'
									className='w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-colors [color-scheme:dark]'
								/>
								<p className='text-xs text-slate-500 mt-2'>
									Cette date marque la suppression de
									l&apos;étude
								</p>
							</div>

							{/* Reminder Settings */}
							<div className='bg-white/[0.04] border border-white/10 rounded-xl p-4'>
								<label className='flex items-center gap-3 cursor-pointer'>
									<div className='relative'>
										<input
											type='checkbox'
											checked={true}
											className='sr-only peer'
										/>
										<div className='w-9 h-5 bg-white/10 rounded-full peer-checked:bg-primary-100 transition-colors' />
										<div className='absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform peer-checked:translate-x-4' />
									</div>
									<span className='text-sm font-medium text-slate-300'>
										Avertir avant suppression
									</span>
								</label>

								<div className='mt-4 flex items-center gap-3'>
									<span className='text-xs text-slate-400 shrink-0'>
										Me rappeler
									</span>
									<input
										type='number'
										min={1}
										className='w-20 px-3 py-2 bg-white/[0.06] border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-colors'
									/>
									<select className='px-3 py-2 bg-white/[0.06] border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-colors appearance-none cursor-pointer'>
										<option value='days'>Jours</option>
										<option value='hours'>Heures</option>
									</select>
								</div>
							</div>
							{/* submit */}
							<button className='w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors text-sm mt-2'>
								Céer l&apos;analyse
							</button>
						</div>
					</motion.div>
				)}
				{/* Browse files */}
				{mode == 'browse' && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.35 }}
						className='relative z-10 flex flex-col items-center px-6 max-w-lg w-full'>
						<button
							onClick={() => setMode('main')}
							className='self-start mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm'>
							<ChevronLeftIcon className='w-5 h-5 rotate-100' />
							Retour
						</button>
						<div className='w-16 h-16 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center mb-5 border border-white/10'>
							<FileUpIcon className='w-8 h-8 text-success' />
						</div>
						<h2 className='text-2xl font-bold text-white mb-2'>
							Parcourir les fichiers
						</h2>
						<p className='text-slate-400 text-sm mb-8 text-center'>
							Sélectionnez un fichier déjà exporté sous format
							.json
						</p>
						<div className='w-full border-2 border-dashed border-white/15 hover:border-white/30 rounded-xl p-10 text-center cursor-pointer transition-colors group'>
							<FileUpIcon className='w-10 h-10 text-slate-500 group-hover:text-slate-300 mx-auto mb-3 transition-colors' />
							<p className='text-slate-300 font-medium text-sm'>
								Cliquer ici pour sélectionner un fichier
							</p>
							<p className='text-slate-500 text-xs mt-1'>
								Format supporté .json
							</p>
						</div>
					</motion.div>
				)}

				{/* Saved analysis*/}

				{mode == 'saved' && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{
							duration: 0.35,
							ease: 'easeOut',
						}}
						className='relative z-10 flex flex-col items-center px-6 max-w-lg w-full'>
						<button
							onClick={() => setMode('main')}
							className='self-start mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors'>
							<ChevronLeftIcon className='w-5 h-5 rotate-100' />
							Retour
						</button>
						<div className='w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-5 border border-white/10'>
							<DatabaseIcon className='w-8 h-8 text-success' />
						</div>
						<h2 className='text-2xl font-bold text-white mb-2'>
							Analyses sauvegardées
						</h2>
						<p className='text-slate-400 text-sm mb-8 text-center'>
							Parcourir les analyses sauvegadrées
						</p>
						<div className='w-full'>
							<div className='relative mb-4'>
								<SearchIcon className='w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none' />
								<input
									placeholder='Recherche par nom ou description'
									className='w-full pl-10 pr-10 py-2.5 bg-white/[0.06] border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all'
								/>
							</div>
							<div className='w-full space-y-2'>
								<SavedStudyCard />
								<SavedStudyCard />
								<SavedStudyCard />

								<SavedStudyCard />
								<SavedStudyCard />
								<SavedStudyCard />
								<Pagination />
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default home;
