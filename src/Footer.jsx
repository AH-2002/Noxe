import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer text-center py-4 mt-auto">
      <p>&copy; {currentYear} Your Company. All rights reserved.</p>
    </footer>
  );
}
