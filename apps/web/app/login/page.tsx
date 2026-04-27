import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-slate-900 mb-6">Welcome Back</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input type="password" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="••••••••" />
          </div>
          <button type="button" className="w-full py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors">
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-slate-600">
          Don't have an account? <Link href="/register" className="text-primary-600 hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  );
}
