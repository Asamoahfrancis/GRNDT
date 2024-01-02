const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>auth side</p> {children}
    </div>
  );
};

export default AuthLayout;
