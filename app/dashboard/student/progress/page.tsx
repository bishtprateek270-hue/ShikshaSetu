'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function ProgressPage() {
  return (
    <RoleProtectedRoute allowedRoles={['student']}>
      <DashboardRoutePlaceholder
        title="Progress"
        description="Track your learning achievements and completed milestones." 
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/student' }, { label: 'Progress' }]}
        actionItems={[
          { label: 'Review completed work', description: 'See the lessons and quizzes you finished.' },
          { label: 'Set a study goal', description: 'Plan your next progress target.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
