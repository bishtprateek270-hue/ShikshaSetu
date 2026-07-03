'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function AdminTeachersPage() {
  return (
    <RoleProtectedRoute allowedRoles={['admin']}>
      <DashboardRoutePlaceholder
        title="Manage Teachers"
        description="Review instructor accounts and manage academic staff access." 
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/admin' }, { label: 'Manage Teachers' }]}
        actionItems={[
          { label: 'Review credentials', description: 'Verify teacher qualifications and roles.' },
          { label: 'Manage assignments', description: 'Assign instructors to new courses.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
