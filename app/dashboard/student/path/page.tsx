'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function LearningPathPage() {
  return (
    <RoleProtectedRoute allowedRoles={['student']}>
      <DashboardRoutePlaceholder
        title="Learning Path"
        description="Review your tailored path for upcoming lessons and milestones."
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/student' }, { label: 'Learning Path' }]}
        actionItems={[
          { label: 'View next lesson', description: 'See the next module you should complete.' },
          { label: 'Check progress', description: 'Review your completion rate and goals.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
