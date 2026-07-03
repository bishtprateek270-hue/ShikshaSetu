'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function AdminAnalyticsPage() {
  return (
    <RoleProtectedRoute allowedRoles={['admin']}>
      <DashboardRoutePlaceholder
        title="Platform Analytics"
        description="Track overall platform performance and user behavior." 
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/admin' }, { label: 'Platform Analytics' }]}
        actionItems={[
          { label: 'View usage trends', description: 'Understand how learners are engaging.' },
          { label: 'Analyze growth', description: 'Review key platform metrics.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
