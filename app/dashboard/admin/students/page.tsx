'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function AdminStudentsPage() {
  return (
    <RoleProtectedRoute allowedRoles={['admin']}>
      <DashboardRoutePlaceholder
        title="Manage Students"
        description="Monitor student engagement and support needs across the platform."
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/admin' }, { label: 'Manage Students' }]}
        actionItems={[
          { label: 'Review student reports', description: 'See learning and attendance information.' },
          { label: 'Assign advisors', description: 'Connect students to support staff.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
