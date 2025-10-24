import React from "react";
import { BookOpen } from "lucide-react";


export default function Card({ title, description }) {
  return (
    <div className="card bg-white p-6 shadow-xl rounded-xl transition duration-300 hover:shadow-2xl hover:scale-[1.02] transform cursor-pointer border border-gray-100">
      <div className="flex items-center space-x-3 mb-2">
        <BookOpen className="w-5 h-5 text-indigo-500" />
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
}
