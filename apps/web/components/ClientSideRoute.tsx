"use client";

import Link from "next/link";
import React from "react";

type ClientSideRouteProps = {
  children: React.ReactNode;
  href: string;
};
const ClientSideRoute = ({ children, href }: ClientSideRouteProps) => {
  return <Link href={href}>{children}</Link>;
};

export default ClientSideRoute;
