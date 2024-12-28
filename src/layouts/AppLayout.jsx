import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
const AppLayout = () => {
  return (
    <div className="relative">
      <div className="grid-background"></div>
      <main className="px-4 sm:px-8 md:px-12 lg:px-16 pt-4 pb-16 min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        © Vineet Srivastava
      </div>
    </div>
  );
};
export default AppLayout;
