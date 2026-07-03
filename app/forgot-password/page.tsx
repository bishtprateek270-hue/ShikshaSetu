import AuthForm from '../../components/AuthForm';
import AuthPageShell from '../../components/AuthPageShell';

export default function ForgotPasswordPage() {
  return (
    <AuthPageShell accentTitle="Recover access" title="Reset your password" description="Enter your email and we will send you a secure link to get back into your account.">
      <AuthForm mode="forgot" />
    </AuthPageShell>
  );
}
