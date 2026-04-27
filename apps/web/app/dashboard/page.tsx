import Link from 'next/link';
import { Calendar, User, Activity, Search, Pill } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Activity className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-slate-900 text-lg">HealthCare</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-600">John Doe</span>
          <div className="w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">
            JD
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Link href="/doctors" className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:border-primary-200 hover:shadow-md transition-all group">
              <div className="p-3 bg-primary-50 rounded-xl text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Find Doctors</h3>
                <p className="text-xs text-slate-500">Book new visit</p>
              </div>
            </Link>
            <Link href="/prescriptions" className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:border-primary-200 hover:shadow-md transition-all group">
              <div className="p-3 bg-primary-50 rounded-xl text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all">
                <Pill className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Medications</h3>
                <p className="text-xs text-slate-500">View prescriptions</p>
              </div>
            </Link>
          </div>

          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-900">Upcoming Appointments</h2>
              <Link href="/doctors" className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium hover:bg-primary-100 transition-colors">
                Book New
              </Link>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 border border-slate-100 rounded-xl hover:border-primary-200 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Dr. Sarah Smith</h3>
                    <p className="text-sm text-slate-500">General Checkup • Tomorrow, 10:00 AM</p>
                  </div>
                  <div className="ml-auto">
                    <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">Pending</span>
                  </div>
                </div>
                <div className="flex gap-2 pt-2 border-t border-slate-50">
                  <button className="flex-1 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                    Reschedule
                  </button>
                  <button className="flex-1 py-2 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-slate-400" /> Profile Summary
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Patient ID</span>
                <span className="font-medium text-slate-900">#PT-8821</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">DOB</span>
                <span className="font-medium text-slate-900">12 May 1990</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Blood Type</span>
                <span className="font-medium text-slate-900">O+</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
