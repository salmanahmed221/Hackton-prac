import { client } from "@/lib/SanityClient";
import imageUrlBuilder from '@sanity/image-url';
import React from 'react';
import CarouselGallery from "../../lib/CarouselGallery"

async function GetData() {
    const res = await client.fetch('*[_type == "products"]');
    return res;
}
async function Products() {
    const data = await GetData();
    return <div>
        <div>
            <h4 className="text-center mt-20 font-semibold text-[#0062f5]">
                PRODUCTS
            </h4>
            <h1 className="text-center lg:text-4xl md:text-3xl text-xl mt-3 font-bold">
                Check What We Have
            </h1>
            <div className="md:mx-[490px] lg:mx-[490px] mx-[40px] md:mt-16 lg:mt-16 mt-6">
                {/*@ts-ignore*/}
                <CarouselGallery data={data} />
            </div>
        </div>
    </div>
}

export default Products;