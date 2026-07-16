'use client';

import { useMemo, useState, useEffect } from 'react';
import { Award, BookOpen, Flame, Sparkles, Lightbulb } from 'lucide-react';
import type { Enrollment } from '../../lib/lms/types';
import { courses } from '../../lib/lms/data/courses';
import ProgressBar from './ProgressBar';
import { getAiRecommendations } from '../../lib/ai/client';

type AiInsightsPanelProps = {
  enrollments: Enrollment[];
};

export default function AiInsightsPanel({ enrollments }: AiInsightsPanelProps) {
  const [recommendations, setRecommendations] = useState<{
    focusRecommendation: string;
    recommendedCourseIds: string[];
  } | null>(null);
  const [loadingRecs, setLoadingRecs] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const fetchRecommendations = async () => {
      setLoadingRecs(true);
      try {
        const enrollmentsData = enrollments.map(e => ({ courseId: e.courseId, progress: e.progress }));
        const availableCoursesData = courses.map(c => ({
          id: c.id,
          title: c.title,
          category: c.category,
          level: c.level,
          tags: c.tags
        }));
        const data = await getAiRecommendations(enrollmentsData, availableCoursesData);
        if (!cancelled) {
          setRecommendations(data);
        }
      } catch (err) {
        console.error('Failed to load AI recommendations:', err);
      } finally {
        if (!cancelled) {
          setLoadingRecs(false);
        }
      }
    };

    fetchRecommendations();

    return () => {
      cancelled = true;
    };
  }, [enrollments]);

  // Mock study metrics
  const stats = useMemo(() => {
    const total = enrollments.length;
    const completed = enrollments.filter((e) => e.progress >= 100).length;
    const active = total - completed;
    const currentStreak = 4; // Mock active streak
    
    // Find the course with the lowest progress that is still active
    const activeEnrollments = enrollments.filter((e) => e.progress > 0 && e.progress < 100);
    const primaryFocusEnrollment = activeEnrollments.sort((a, b) => a.progress - b.progress)[0] ?? null;
    const focusCourse = primaryFocusEnrollment 
      ? courses.find((c) => c.id === primaryFocusEnrollment.courseId) 
      : null;

    return {
      total,
      completed,
      active,
      currentStreak,
      focusCourse,
      focusEnrollment: primaryFocusEnrollment,
    };
  }, [enrollments]);

  const recommendedCourses = useMemo(() => {
    if (!recommendations?.recommendedCourseIds || recommendations.recommendedCourseIds.length === 0) {
      return courses.slice(0, 2);
    }
    return recommendations.recommendedCourseIds
      .map(id => courses.find(c => c.id === id))
      .filter((c): c is typeof courses[0] => !!c);
  }, [recommendations]);

  return (
    <div className="space-y-6">
      {/* Overview Analytics row */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Streak card */}
        <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-5 flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
            <Flame className="h-6 w-6 text-amber-400 fill-amber-400/20" />
          </div>
          <div>
            <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Active Study Streak</p>
            <p className="text-xl font-bold text-white mt-0.5">{stats.currentStreak} Days</p>
            <span className="text-[9px] text-slate-450 mt-1 block">Keep it up to unlock reward badges!</span>
          </div>
        </div>

        {/* Finished certifications */}
        <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-5 flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
            <Award className="h-6 w-6 text-emerald-400" />
          </div>
          <div>
            <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Certificates Earned</p>
            <p className="text-xl font-bold text-white mt-0.5">{stats.completed} Verified</p>
            <span className="text-[9px] text-slate-450 mt-1 block">Inspect on your progress tab.</span>
          </div>
        </div>

        {/* Ongoing learning paths */}
        <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-5 flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
            <BookOpen className="h-6 w-6 text-violet-400" />
          </div>
          <div>
            <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Ongoing Courses</p>
            <p className="text-xl font-bold text-white mt-0.5">{stats.active} Classes</p>
            <span className="text-[9px] text-slate-450 mt-1 block">Syllabus modules in execution.</span>
          </div>
        </div>
      </div>

      {/* Focus & Recommendations Split */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Core Study focus recommendation */}
        <section className="rounded-[1.75rem] border border-slate-800/80 bg-slate-950/90 p-6 space-y-4">
          <div className="flex items-center gap-1.5 border-b border-slate-900 pb-2">
            <Lightbulb className="h-4.5 w-4.5 text-amber-400" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">AI Study Recommendation</span>
          </div>

          {loadingRecs ? (
            <div className="flex flex-col items-center justify-center py-10 text-center text-slate-500">
              <div className="h-6 w-6 rounded-full border-2 border-violet-500 border-t-transparent animate-spin mb-2" />
              <p className="text-xs">Analyzing study focus recommendations...</p>
            </div>
          ) : recommendations?.focusRecommendation ? (
            <div className="space-y-4 text-xs">
              <p className="text-slate-350 leading-relaxed leading-normal">
                {recommendations.focusRecommendation}
              </p>

              {stats.focusCourse && stats.focusEnrollment && (
                <div className="rounded-2xl border border-slate-900 bg-slate-900/30 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">{stats.focusCourse.title}</span>
                    <span className="text-slate-500 font-bold">{stats.focusEnrollment.progress}% done</span>
                  </div>
                  <ProgressBar value={stats.focusEnrollment.progress} size="sm" showLabel={false} />
                </div>
              )}

              {stats.focusCourse && (
                <div className="pt-2 flex justify-end">
                  <a
                    href={`/learn/${stats.focusCourse.id}`}
                    className="rounded-full bg-violet-500 px-4 py-2 font-semibold text-white hover:bg-violet-400 transition"
                  >
                    Resume Course
                  </a>
                </div>
              )}
            </div>
          ) : (
            <p className="text-xs text-slate-500 py-6">
              You are caught up on all active study materials! Browse the catalog to start a new learning track.
            </p>
          )}
        </section>

        {/* Content Suggestions */}
        <section className="rounded-[1.75rem] border border-slate-800/80 bg-slate-950/90 p-6 space-y-4">
          <div className="flex items-center gap-1.5 border-b border-slate-900 pb-2">
            <Sparkles className="h-4.5 w-4.5 text-violet-400" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Recommended Courses</span>
          </div>

          <p className="text-xs text-slate-400 leading-normal">
            Based on your dynamic interest profile, we recommend adding these courses to your library:
          </p>

          {loadingRecs ? (
            <div className="flex flex-col items-center justify-center py-10 text-center text-slate-500">
              <div className="h-6 w-6 rounded-full border-2 border-violet-500 border-t-transparent animate-spin mb-2" />
              <p className="text-xs">Curating catalog recommendations...</p>
            </div>
          ) : (
            <div className="space-y-3">
              {recommendedCourses.map((course) => (
                <div
                  key={course.id}
                  className="rounded-2xl border border-slate-900 bg-slate-900/30 p-3 flex justify-between items-center text-xs"
                >
                  <div>
                    <h4 className="font-semibold text-white truncate max-w-[200px]">{course.title}</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">{course.category} • {course.level}</p>
                  </div>
                  <a
                    href={`/courses/${course.slug}`}
                    className="text-violet-400 hover:text-violet-300 font-bold font-semibold shrink-0"
                  >
                    Details →
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

