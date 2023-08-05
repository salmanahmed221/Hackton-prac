import AuthenticVintage from "@/components/ui/AuthenticVintage";
import HeroSection from "@/components/ui/HeroSection";
import Products from "@/components/ui/Products";
import Promotion from "@/components/ui/Promotion";
import SearchInput from "@/components/ui/SearchInput";
import React from 'react';

function Home() {
  return <div>
    <HeroSection />
    <Promotion />
    {/*@ts-ignore*/}
    <Products />
    <AuthenticVintage />
    <SearchInput />
  </div>;
}

export default Home;
