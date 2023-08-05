import { client } from '@/lib/SanityClient';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import CounterMenu from '@/components/ui/CounterMenu';
import AddtoCart from '@/components/ui/AddtoCart';

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
    return builder.image(source);
}

async function GetData(slug1: string) {
    const res = await client.fetch(
        `*[_type == "products" && slug.current == '${slug1}']`
    );
    return res;
}

async function AddToCart({ params }: { params: { slug: string } }) {
    const data = await GetData(params.slug);
    return (
        <div className="my-20">
            <div className="md:flex justify-center gap-4 mx-6 md:mx-0">
                {params.slug == "cameryn-sash-tie-dress" ?
                    <div>
                        <div className='flex md:gap-x-10 gap-x-4'>
                            <div className='md:space-y-5 space-y-2'>
                                <div>
                                    <Image
                                        src={urlFor(data[0].images[0]).url()}
                                        alt="img"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                <div>
                                    <Image
                                        src={urlFor(data[0].images[1]).url()}
                                        alt="img"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                <div>
                                    <Image
                                        src={urlFor(data[0].images[2]).url()}
                                        alt="img"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                <div>
                                    <Image
                                        src={urlFor(data[0].images[3]).url()}
                                        alt="img"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                            </div>
                            <div>
                                <Image
                                    src={urlFor(data[0].images[0]).url()}
                                    alt="img"
                                    width={550}
                                    height={550}
                                />
                            </div>
                        </div>
                    </div> :
                    <div className='flex md:gap-x-10 gap-x-4'>
                        <div>
                            <Image
                                src={urlFor(data[0].images[0]).url()}
                                alt="img"
                                width={120}
                                height={120}
                            />
                        </div>
                        <div>
                            <Image
                                src={urlFor(data[0].images[0]).url()}
                                alt="img"
                                width={550}
                                height={550}
                            />
                        </div>
                    </div>
                }
                <div className="mt-16">
                    <h2 className="text-3xl font-semibold">{data[0].title}</h2>
                    <p className="text-xl text-gray-300 font-bold">{data[0].category}</p>
                    <p className="mt-7 font-semibold">SELECT SIZE</p>
                    {/* Sizes */}
                    <div className="flex mt-3 ml-2 gap-8 font-semibold items-center">
                        <p className="hover:rounded-full px-2 py-1 hover:bg-gray-100">XS</p>
                        <p className="hover:rounded-full px-2 py-1 hover:bg-gray-100">S</p>
                        <p className="hover:rounded-full px-2 py-1 hover:bg-gray-100">M</p>
                        <p className="hover:rounded-full px-2 py-1 hover:bg-gray-100">L</p>
                        <p className="hover:rounded-full px-2 py-1 hover:bg-gray-100">XL</p>
                    </div>
                    {/* Quantity or Inc or dec button */}
                    <div className="flex mt-7 gap-8">
                        <p className="font-bold">Quantity:</p>
                        <div>
                            <CounterMenu />
                        </div>
                    </div>
                    <div>
                        {/* Button or Price */}
                        <div className="flex items-center mt-7 gap-8">
                            <AddtoCart />
                            <p className="text-3xl font-bold">$ {data[0].price}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div>
                    <h1 className="md:text-3xl text-2xl text-center md:text-left  font-bold md:ml-40 mt-32">
                        Product Information
                    </h1>
                </div>
                <div className="absolute md:-top-14 md:right-[550px] -top-5 right-14">
                    <p className="md:text-9xl text-6xl font-bold text-gray-200 md:ml-36 opacity-40">
                        Overview
                    </p>
                </div>
            </div>
            <hr className="bg-gray-300 h-[2px] md:mx-40 mx-16 md:mt-16 mt-5" />
            <div className='md:flex md:mx-52 mx-16 mt-10'>
                <div className='basis-[30%]'>
                    <h2 className='font-bold text-gray-700'>PRODUCT DETAILS</h2>
                </div>
                <div className='basis-[70%] text-justify mt-4 md:mt-0'>
                    {data[0].description}
                </div>
            </div>

            <div className='md:flex md:mx-52 mx-16 mt-10'>
                <div className='basis-[30%]'>
                    <h2 className='font-bold text-gray-700'>PRODUCT CARE</h2>
                </div>
                <div className='basis-[70%] text-justify mt-4 md:mt-0'>
                    <ul className='font-bold'>
                        <li>.    Lorem ipsum dolor sit amet</li>
                        <li>.    consectetur adipiscing elit</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AddToCart;
