import MapView from '@/components/mapView';
import Sidebar from '@/components/sidebar';

const StudyDashboard = () => {
	return (
		<>
			<main className='flex-1 h-[50vh] md:h-full order-2 md:order-1'>
				<MapView />
			</main>
			<aside className='h-[50vh] md:h-full order-1 md:order-2'>
				<Sidebar />
			</aside>
		</>
	);
};

export default StudyDashboard;
