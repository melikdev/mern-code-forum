import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <SignIn signUpUrl="/user/register" />
    </div>
  );
};

export default Login;
