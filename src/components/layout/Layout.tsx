import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-border mt-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-muted-foreground">
            © 2025 Jeet Jani. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;