import React from "react";

type CategoryBadgeProps = {
  children: React.ReactNode;
  className?: string;
};
const CategoryBadge = ({ className = "", children }: CategoryBadgeProps) => {
  return (
    <div
      className={`text-xs px-1.5 py-0.5 rounded-full bg-blue-600 text-white ${className}`}
    >
      {children}
    </div>
  );
};

export default CategoryBadge;
