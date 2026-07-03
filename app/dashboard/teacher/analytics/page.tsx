'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function TeacherAnalyticsPage() {
  return (
    <RoleProtectedRoute allowedRoles={['teacher', 'admin']}>
      <DashboardRoutePlaceholder
        title="Analytics"
        description="Review student engagement and classroom performance trends."
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/teacher' }, { label: 'Analytics' }]}
        actionItems={[
          { label: 'View engagement report', description: 'See how students are performing overall.' },
          { label: 'Track participation', description: 'Review weekly engagement metrics.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
