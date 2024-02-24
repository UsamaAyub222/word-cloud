import React from "react";

export default function Layout({ children }: any) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 p-4">
        <nav className="container mx-auto flex items-center justify-between">
          <h1 className="text-white text-2xl font-bold">Word Cloud App</h1>
          {/* Add navigation links if needed */}
        </nav>
      </header>
      <main className="container mx-auto p-8">{children}</main>
      <footer className="bg-gray-100 p-4 mt-auto">
        <p className="text-center">
          © {new Date().getFullYear()} Word Cloud App
        </p>
      </footer>
    </div>
  );
}
