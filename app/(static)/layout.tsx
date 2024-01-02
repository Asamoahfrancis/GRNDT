import CustomColor from "../context/MaterialUi/CustomColor";
import NavBar from "../components/ReuserbleComponents/NavBar";
import Footer from "../components/ReuserbleComponents/Footer";
const StaticLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-[1444px] mx-auto">
      <CustomColor>
        <NavBar />
        {children}
      </CustomColor>
      <Footer />
    </main>
  );
};

export default StaticLayout;
