import Link from 'next/link';
import { Activity } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="flex flex-col items-center space-y-6 text-center max-w-2xl">
        <div className="p-4 bg-primary-100 rounded-full">
          <Activity className="w-12 h-12 text-primary-600" />
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-slate-900">
          Your Health, <span className="text-primary-600">Simplified.</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Book appointments, manage your medical profile, and connect with top doctors from the comfort of your home.
        </p>
        <div className="flex gap-4 pt-4">
          <Link href="/login" className="px-8 py-3 text-white bg-primary-600 hover:bg-primary-700 rounded-full font-medium transition-colors">
            Login
          </Link>
          <Link href="/register" className="px-8 py-3 text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-full font-medium transition-colors border border-primary-200">
            Create Account
          </Link>
        </div>
      </div>
    </main>
  );
}
