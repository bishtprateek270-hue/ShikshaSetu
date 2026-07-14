'use client';

import Link from 'next/link';
import { Clock, Users } from 'lucide-react';
import StarRating from './StarRating';
import { formatDuration, getLevelColor } from '../../lib/lms/utils';
import type { Course } from '../../lib/lms/types';

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-800/80 bg-slate-950/90 shadow-[0_24px_80px_rgba(15,23,42,0.25)] transition-all duration-300 hover:border-violet-500/50 hover:shadow-[0_24px_80px_rgba(139,92,246,0.12)]"
    >
      {/* Thumbnail */}
      <div
        className="relative flex h-44 items-end p-5 transition-transform duration-500 group-hover:scale-[1.02]"
        style={{ background: course.thumbnail }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        <div className="relative flex w-full items-end justify-between">
          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] ${getLevelColor(course.level)}`}
          >
            {course.level}
          </span>
          {course.price === 0 ? (
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-300">
              FREE
            </span>
          ) : (
            <span className="rounded-full bg-slate-900/80 px-3 py-1 text-sm font-bold text-white">
              ₹{course.price}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{course.category}</p>
        <h3 className="mt-2 text-base font-semibold leading-snug text-white line-clamp-2 group-hover:text-violet-200 transition-colors">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-slate-400 line-clamp-2">{course.description}</p>

        <div className="mt-auto pt-4">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span className="font-medium text-slate-300">{course.instructor.name}</span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <StarRating rating={course.rating} size={14} />
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Users className="h-3.5 w-3.5" />
                {course.enrolledCount.toLocaleString()}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {formatDuration(course.duration)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
