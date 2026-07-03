'use client';

import RoleProtectedRoute from '../../../../components/RoleProtectedRoute';
import DashboardRoutePlaceholder from '../../../../components/DashboardRoutePlaceholder';

export default function StudyToolsPage() {
  return (
    <RoleProtectedRoute allowedRoles={['student']}>
      <DashboardRoutePlaceholder
        title="Study Tools"
        description="Open the tools that support your active learning sessions."
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard/student' }, { label: 'Study Tools' }]}
        actionItems={[
          { label: 'Open flashcards', description: 'Practice with quick recall tools.' },
          { label: 'Start a quiz', description: 'Test your understanding in minutes.' },
        ]}
      />
    </RoleProtectedRoute>
  );
}
