
import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-slate-50">
        <Outlet />
      </main>
      <footer className="py-4 border-t bg-white">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} ThousandEyes Explorer | All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Layout;
