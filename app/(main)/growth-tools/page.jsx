'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function GrowthToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Growth Tools
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Explore tools to enhance your career and academic growth
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col gap-3 mb-8">
          <Link href="/growth-tools/interview">
            <Button className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
              📝 Interview Prep
            </Button>
          </Link>
          <Link href="/growth-tools/cgpa">
            <Button className="w-full h-12 text-lg font-semibold bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800">
              📊 CGPA Calculator
            </Button>
          </Link>
        </div>

        {/* Welcome Message */}
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Welcome to Growth Tools
          </h2>
          <div className="space-y-3 text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📝</span>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Interview Prep</h3>
                <p>Practice common interview questions and get AI-powered feedback to improve your answers.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">CGPA Calculator</h3>
                <p>Calculate your CGPA, track your grades, and monitor your academic progress in real-time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
