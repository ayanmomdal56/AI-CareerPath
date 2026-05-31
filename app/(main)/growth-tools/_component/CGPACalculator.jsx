'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Trash2, Plus } from 'lucide-react';

export default function CGPACalculator() {
  const [subjects, setSubjects] = useState([
    { id: 1, name: '', credits: 3, grade: 'A' }
  ]);
  const [nextId, setNextId] = useState(2);

  const gradePoints = {
    'A+': 4.0,
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'C-': 1.7,
    'D+': 1.3,
    'D': 1.0,
    'F': 0.0,
  };

  const addSubject = () => {
    setSubjects([...subjects, { id: nextId, name: '', credits: 3, grade: 'A' }]);
    setNextId(nextId + 1);
  };

  const removeSubject = (id) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter(s => s.id !== id));
    }
  };

  const updateSubject = (id, field, value) => {
    setSubjects(subjects.map(s =>
      s.id === id ? { ...s, [field]: value } : s
    ));
  };

  const calculateCGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    subjects.forEach(subject => {
      if (subject.name && subject.credits) {
        const points = gradePoints[subject.grade] || 0;
        const credits = parseFloat(subject.credits) || 0;
        totalPoints += points * credits;
        totalCredits += credits;
      }
    });

    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
  };

  const cgpa = calculateCGPA();

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">Your Current CGPA</p>
          <p className="text-5xl font-bold text-blue-600 dark:text-blue-400">{cgpa}</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {subjects.map((subject) => (
          <div key={subject.id} className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Subject Name
              </label>
              <input
                type="text"
                value={subject.name}
                onChange={(e) => updateSubject(subject.id, 'name', e.target.value)}
                placeholder="e.g., Mathematics"
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
              />
            </div>

            <div className="w-24">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Credits
              </label>
              <input
                type="number"
                value={subject.credits}
                onChange={(e) => updateSubject(subject.id, 'credits', parseFloat(e.target.value) || 0)}
                min="0"
                step="0.5"
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div className="w-28">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Grade
              </label>
              <select
                value={subject.grade}
                onChange={(e) => updateSubject(subject.id, 'grade', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                {Object.keys(gradePoints).map(grade => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>

            <button
              onClick={() => removeSubject(subject.id)}
              disabled={subjects.length === 1}
              className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="Remove subject"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <Button
        onClick={addSubject}
        variant="outline"
        className="w-full"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Subject
      </Button>

      <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Grade Point Scale</h3>
        <div className="grid grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-400">
          <div>A+: 4.0</div>
          <div>B+: 3.3</div>
          <div>A: 4.0</div>
          <div>B: 3.0</div>
          <div>A-: 3.7</div>
          <div>B-: 2.7</div>
          <div>C+: 2.3</div>
          <div>D+: 1.3</div>
          <div>C: 2.0</div>
          <div>D: 1.0</div>
          <div>C-: 1.7</div>
          <div>F: 0.0</div>
        </div>
      </div>
    </div>
  );
}
