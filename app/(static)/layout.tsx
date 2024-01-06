import CustomColor from "../context/MaterialUi/CustomColor";
import NavBar from "../components/ReuserbleComponents/NavBar";
import Footer from "../components/ReuserbleComponents/Footer";
import SnackbarProvider from "../context/SnackbarContext/Snackbar";
import TestimoniesContextProvider from "../context/TestimoniesContext/TestimoniesContext";
const StaticLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <TestimoniesContextProvider>
        <SnackbarProvider>
          <CustomColor>
            <NavBar />
            {children}
          </CustomColor>
          <Footer />
        </SnackbarProvider>
      </TestimoniesContextProvider>
    </main>
  );
};

export default StaticLayout;
