import MapView from '@/components/mapView';
import Sidebar from '@/components/sidebar';

const StudyDashboard = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-slate-100 overflow-hidden font-sans">
      <main className="flex-1 h-[50vh] md:h-full relative order-2 md:order-1">
        <MapView
        />

      </main>
      <aside className="h-[50vh] md:h-full order-1 md:order-2 z-20">
        <Sidebar />

      </aside>
    </div>)


};

export default StudyDashboard;
