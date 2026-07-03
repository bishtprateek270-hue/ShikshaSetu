'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function TeacherCoursesPage() {
  return (
    <RoleProtectedRoute allowedRoles={['teacher', 'admin']}>
      <DashboardRoutePlaceholder
        title="My Courses"
        description="Manage the classes and learning paths you are currently teaching."
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/teacher' }, { label: 'My Courses' }]}
        actionItems={[
          { label: 'Add new course', description: 'Create a new course for your students.' },
          { label: 'Review course content', description: 'Update lesson materials and topics.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
