import Link from 'next/link';
import { Pill, ArrowLeft, Clock, Info, Download } from 'lucide-react';

export default function PrescriptionsPage() {
  const prescriptions = [
    { id: '1', medication: 'Amoxicillin', dosage: '500mg', instructions: 'Take 3 times daily with food for 7 days', doctor: 'Dr. Sarah Smith', date: 'Oct 12, 2023', status: 'Active' },
    { id: '2', medication: 'Ibuprofen', dosage: '400mg', instructions: 'Take as needed for pain, max 3 times daily', doctor: 'Dr. Michael Chen', date: 'Sep 25, 2023', status: 'Completed' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex items-center gap-4">
        <Link href="/dashboard" className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5 text-slate-600" />
        </Link>
        <h1 className="text-xl font-bold text-slate-900">My Prescriptions</h1>
      </nav>

      <main className="max-w-4xl mx-auto p-6 mt-8">
        <div className="grid gap-6">
          {prescriptions.map(item => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary-50 rounded-xl text-primary-600">
                      <Pill className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{item.medication}</h3>
                      <p className="text-primary-600 font-medium">{item.dosage}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <Info className="w-5 h-5 text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-700">Instructions</p>
                      <p className="text-sm text-slate-600 mt-1">{item.instructions}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-6 pt-2">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="w-4 h-4" /> Prescribed on {item.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <User className="w-4 h-4" /> {item.doctor}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex justify-end">
                <button className="flex items-center gap-2 text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors">
                  <Download className="w-4 h-4" /> Download PDF
                </button>
              </div>
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
