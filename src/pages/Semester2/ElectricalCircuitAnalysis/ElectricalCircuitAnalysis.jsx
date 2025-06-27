import React from "react";
import { Link } from "react-router-dom";

const ElectricalCircuitAnalysis = () => {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-[#FF007F]">🔌 Electrical Circuit Analysis</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <Link
          to="/semester2/electrical-circuit-analysis/syllabus"
          className="px-4 py-3 text-center rounded-lg bg-emerald-400 hover:bg-emerald-500 dark:bg-[#1e1e1e] dark:hover:bg-[#333] font-bold transition-all"
        >
          📖 Syllabus
        </Link>
        <Link
          to="/semester2/electrical-circuit-analysis/notes"
          className="px-4 py-3 text-center rounded-lg bg-emerald-400 hover:bg-emerald-500 dark:bg-[#1e1e1e] dark:hover:bg-[#333] font-bold transition-all"
        >
          📝 Notes
        </Link>
        <Link
          to="/semester2/electrical-circuit-analysis/pyqs"
          className="px-4 py-3 text-center rounded-lg bg-emerald-400 hover:bg-emerald-500 dark:bg-[#1e1e1e] dark:hover:bg-[#333] font-bold transition-all"
        >
          ❓ PYQs
        </Link>
        <Link
          to="/semester2/electrical-circuit-analysis/pyq-solutions"
          className="px-4 py-3 text-center rounded-lg bg-emerald-400 hover:bg-emerald-500 dark:bg-[#1e1e1e] dark:hover:bg-[#333] font-bold transition-all"
        >
          ✅ PYQ Solutions
        </Link>
        <Link
          to="/semester2/electrical-circuit-analysis/lab"
          className="px-4 py-3 text-center rounded-lg bg-emerald-400 hover:bg-emerald-500 dark:bg-[#1e1e1e] dark:hover:bg-[#333] font-bold transition-all"
        >
          🔬 Lab Content
        </Link>
      </div>
    </div>
  );
};

export default ElectricalCircuitAnalysis;
