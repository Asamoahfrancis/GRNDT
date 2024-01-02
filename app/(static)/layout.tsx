import CustomColor from "../context/MaterialUi/CustomColor";
const StaticLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-[1444px] mx-auto">
      <CustomColor>{children}</CustomColor>{" "}
    </main>
  );
};

export default StaticLayout;
