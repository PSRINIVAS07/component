import React from "react";


export default function Section({ children }) {
  return (
    <div className="section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8">
      {children}
    </div>
  );
}
