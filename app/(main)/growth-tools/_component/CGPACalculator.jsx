'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2, Plus } from 'lucide-react';

export default function CGPACalculator() {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [credits, setCredits] = useState('');
  const [grade, setGrade] = useState('');

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

  const addCourse = () => {
    if (courseName.trim() && credits && grade) {
      setCourses([
        ...courses,
        {
          id: Date.now(),
          name: courseName,
          credits: parseFloat(credits),
          grade: grade,
          points: gradePoints[grade] || 0,
        },
      ]);
      setCourseName('');
      setCredits('');
      setGrade('');
    }
  };

  const removeCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const calculateCGPA = () => {
    if (courses.length === 0) return 0;
    const totalPoints = courses.reduce(
      (sum, course) => sum + course.points * course.credits,
      0
    );
    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    return (totalPoints / totalCredits).toFixed(2);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Add Course Section */}
      <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
          Add Course
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input
            placeholder="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="dark:bg-slate-700 dark:text-white"
          />
          <Input
            placeholder="Credits"
            type="number"
            step="0.5"
            min="0"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
            className="dark:bg-slate-700 dark:text-white"
          />
          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md dark:bg-slate-700 dark:text-white"
          >
            <option value="">Select Grade</option>
            {Object.keys(gradePoints).map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          <Button
            onClick={addCourse}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
      </div>

      {/* Courses Table */}
      <div className="mb-8">
        {courses.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-200 dark:bg-slate-700">
                  <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">
                    Course Name
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-slate-900 dark:text-white">
                    Credits
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-slate-900 dark:text-white">
                    Grade
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-slate-900 dark:text-white">
                    Points
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-slate-900 dark:text-white">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr
                    key={course.id}
                    className="border-b border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    <td className="px-4 py-3 text-slate-900 dark:text-white">
                      {course.name}
                    </td>
                    <td className="px-4 py-3 text-center text-slate-900 dark:text-white">
                      {course.credits}
                    </td>
                    <td className="px-4 py-3 text-center text-slate-900 dark:text-white">
                      <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {course.grade}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center text-slate-900 dark:text-white">
                      {course.points.toFixed(1)}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Button
                        onClick={() => removeCourse(course.id)}
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center py-8 text-slate-500 dark:text-slate-400">
            No courses added yet. Add a course to get started!
          </p>
        )}
      </div>

      {/* CGPA Display */}
      {courses.length > 0 && (
        <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white text-center">
          <p className="text-lg mb-2">Your CGPA</p>
          <p className="text-5xl font-bold">{calculateCGPA()}</p>
          <p className="text-sm mt-2 opacity-90">
            Based on {courses.length} course{courses.length !== 1 ? 's' : ''}
          </p>
        </div>
      )}
    </div>
  );
}
