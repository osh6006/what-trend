import React from "react";
import { ShoppingGrid } from "../../components/shopping/ShoppingGrid";
import { ShoppingSearch } from "../../components/shopping/ShoppingSearch";
import useShopping from "../../hooks/useShopping";

export default function Shopping() {
  const test = useShopping();
  console.log(test);

  return (
    <main className='className="mt-0 xl:flex-row" ml-0 flex h-full w-full flex-col overflow-auto py-2 sm:ml-[250px] sm:pt-8 lg:ml-[344px] lg:h-screen'>
      <h1 className="text-center text-3xl font-bold">Shopping Trends</h1>
      {/* search bar */}
      <ShoppingSearch />
      <ShoppingGrid />
    </main>
  );
}
