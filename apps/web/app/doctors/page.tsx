import Link from 'next/link';
import { Search, Stethoscope, Star, MapPin } from 'lucide-react';

export default function DoctorsPage() {
  const doctors = [
    { id: '1', name: 'Dr. Sarah Smith', specialty: 'General Practitioner', rating: 4.9, address: 'Central Clinic, NY', experience: '12 years' },
    { id: '2', name: 'Dr. Michael Chen', specialty: 'Cardiologist', rating: 4.8, address: 'Heart Institute, NY', experience: '15 years' },
    { id: '3', name: 'Dr. Emily Blunt', specialty: 'Pediatrician', rating: 5.0, address: 'Kids Care, NY', experience: '8 years' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Stethoscope className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-slate-900 text-lg">HealthCare</span>
        </Link>
        <div className="relative w-full max-w-md hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by specialty or name..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-primary-500 transition-all"
          />
        </div>
        <div className="w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">JD</div>
      </nav>

      <main className="max-w-6xl mx-auto p-6 mt-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Find a Medical Professional</h1>
          <p className="text-slate-600 mt-2">Book an appointment with top-rated specialists in your area.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map(doctor => (
            <div key={doctor.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                  <User className="w-8 h-8" />
                </div>
                <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2 py-1 rounded-lg text-xs font-bold">
                  <Star className="w-3 h-3 fill-current" /> {doctor.rating}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900">{doctor.name}</h3>
              <p className="text-primary-600 text-sm font-medium mb-4">{doctor.specialty}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="w-4 h-4" /> {doctor.address}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Activity className="w-4 h-4" /> {doctor.experience} experience
                </div>
              </div>

              <Link href={`/appointments/new?doctor=${doctor.id}`} className="block w-full py-2 text-center bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-colors">
                Book Appointment
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function User({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  )
}

function Activity({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  )
}
