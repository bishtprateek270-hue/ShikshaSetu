'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function MyCoursesPage() {
  return (
    <RoleProtectedRoute allowedRoles={['student']}>
      <DashboardRoutePlaceholder
        title="My Courses"
        description="Browse and continue the courses you are enrolled in."
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/student' }, { label: 'My Courses' }]}
        actionItems={[
          { label: 'Continue first course', description: 'Resume the first active course in your list.' },
          { label: 'View learning path', description: 'Open your current progress plan.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
