'use client';

import Link from 'next/link';
import CGPACalculator from '../_component/CGPACalculator';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default function CGPAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with Back Button */}
        <div className="mb-8">
          <Link href="/growth-tools">
            <Button variant="outline" size="sm" className="mb-4">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Growth Tools
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
            📊 CGPA Calculator
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Track your grades and calculate your CGPA in real-time
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-8">
          <CGPACalculator />
        </div>
      </div>
    </div>
  );
}
