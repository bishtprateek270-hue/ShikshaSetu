'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function AdminCoursesPage() {
  return (
    <RoleProtectedRoute allowedRoles={['admin']}>
      <DashboardRoutePlaceholder
        title="Manage Courses"
        description="Oversee course catalog management and publishing workflows." 
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/admin' }, { label: 'Manage Courses' }]}
        actionItems={[
          { label: 'Add course', description: 'Create a new course offering.' },
          { label: 'Review catalog', description: 'See all published learning tracks.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
