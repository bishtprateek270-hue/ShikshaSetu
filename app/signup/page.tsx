import AuthForm from '../../components/AuthForm';
import AuthPageShell from '../../components/AuthPageShell';

export default function SignupPage() {
  return (
    <AuthPageShell accentTitle="Start in minutes" title="Create your account" description="Join to access a clean learning space with helpful structure and quick guidance.">
      <AuthForm mode="signup" />
    </AuthPageShell>
  );
}
