import React from "react";
import Header from "../components/navbar/Header";
import Sidebar from "../components/navbar/Sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full">
      <Header />
      <Sidebar />
      {children}
    </main>
  );
}

export default Layout;
