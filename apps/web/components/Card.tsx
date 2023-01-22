import Image from "next/image";
import Link from "next/link";
import React from "react";
import urlFor from "../lib/urlFor";
import CategoryBadge from "./CategoryBadge";
import ClientSideRoute from "./ClientSideRoute";

interface CardProps {
  categories: Category[];
  mainImage: Image;
  url: string;
  title: string;
  description: string;
}
const Card = ({
  title,
  description,
  url,
  mainImage,
  categories,
}: CardProps) => {
  return (
    <ClientSideRoute href={url || "/404"}>
      <div className="flex flex-col">
        <div className="relative bg-gray-300 h-64">
          <Image
            className="object-cover objectleft lg:object-center"
            src={urlFor(mainImage).url()}
            alt={title}
            fill
          />
          {categories.map((c) => (
            <CategoryBadge className="absolute top-4 right-4 shadow-xl">
              {c.title}
            </CategoryBadge>
          ))}
        </div>
        {/* Body */}
        <div className="py-2">
          <h3>{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </ClientSideRoute>
  );
};

export default Card;
