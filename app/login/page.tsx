console.log("TEST ENV:", process.env.NEXT_PUBLIC_TEST);
import AuthForm from '../../components/AuthForm';
import AuthPageShell from '../../components/AuthPageShell';

export default function LoginPage() {
  return (
    <AuthPageShell accentTitle="Quick access" title="Welcome back" description="Sign in to continue your learning journey with a calm, simple experience.">
      <AuthForm mode="login" />
    </AuthPageShell>
  );
}
