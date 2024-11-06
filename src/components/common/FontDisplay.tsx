import { useState } from "react";

import { cn } from "@/lib/utils";

const FontDisplay = ({ typography }: { typography: string[] }) => {
  const [selectedFont, setSelectedFont] = useState(0);

  return (
    <div className="flex flex-1 gap-4">
      <div className="w-fit">
        {typography.map((font, i) => (
          <button
            className={cn(
              selectedFont === i
                ? "border-y border-black text-black"
                : "border-none text-[#999999]",
              "flex w-full justify-center text-nowrap py-1 hover:border-y hover:border-black",
            )}
            key={font}
            onClick={() => setSelectedFont(i)}
          >
            {font}
          </button>
        ))}
      </div>
      <p className="p-0 text-center text-2xl font-medium sm:px-[80px] sm:py-[25px]">
        “Hello, Welcome to Future Tracking!”
      </p>
    </div>
  );
};

export default FontDisplay;
