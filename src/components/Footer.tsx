import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bottom-0 py-3">
      <p className="text-gray-400">Keep {currentYear}</p>
    </footer>
  );
}
