import { SignUp } from '@clerk/clerk-react';

const Register = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <SignUp signInUrl="/user/login" />
    </div>
  );
};

export default Register;
