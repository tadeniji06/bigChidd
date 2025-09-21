import React from "react";

const Lazy: React.FC = () => {
  return (
    <div className="bg-zinc-900 rounded-2xl border border-green-600 p-4 flex flex-col gap-4 animate-pulse">
      {/* top : country/league */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-zinc-700" />
          <div className="w-28 h-4 rounded-md bg-zinc-700" />
        </div>
        <div className="w-16 h-3 rounded-md bg-zinc-700" />
      </div>

      {/* teams */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-10 h-10 rounded-full bg-zinc-700" />
          <div className="w-20 h-3 rounded-md bg-zinc-700" />
        </div>

        <div className="px-2">
          <div className="w-8 h-3 rounded-md bg-zinc-700" />
        </div>

        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-10 h-10 rounded-full bg-zinc-700" />
          <div className="w-20 h-3 rounded-md bg-zinc-700" />
        </div>
      </div>

      {/* time */}
      <div className="w-full flex justify-center">
        <div className="w-24 h-3 rounded-md bg-zinc-700" />
      </div>
    </div>
  );
};

export default Lazy;
