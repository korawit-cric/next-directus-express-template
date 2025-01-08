import { cn } from "@/libs/shadcn/utils";
import { SearchIcon } from "lucide-react";
import React from "react";
import type { InputProps } from "../shadcn/ui/input";

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

const Search = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-12 items-center rounded-md border border-input bg-white px-6 py-2 text-sm ring-offset-background",
          className,
        )}
      >
        <SearchIcon className="h-6 w-6 text-sub-text" />
        <input
          {...props}
          ref={ref}
          className="h-8 w-full p-2 placeholder:text-watermark focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          type="search"
        />
      </div>
    );
  },
);

Search.displayName = "Search";

export { Search };