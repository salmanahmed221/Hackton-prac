"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/swiper-bundle.min.css'
import { client } from './SanityClient';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import { Image as img, Reference, Slug } from 'sanity';
import Link from 'next/link';
import SwiperCore, { Autoplay } from 'swiper'
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source);
}

interface IProp {
    _id: string,
    title: string,
    slug: Slug,
    images: img,
    price: number,
    _createdAt: Date,
    category: string,
    description: string,
    genderCategory: Reference,
    _updatedAt: Date,
    _rev: string,
    _type: "products"
}
interface IData {
    data: IProp[];
}

const Home = async ({ data }: IData) => {
    SwiperCore.use([Autoplay]);


    return <div className=''>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 3000
            }}
        >

            {
                data && data.map((slide: IProp) => (
                    <SwiperSlide key={slide._id}>
                        <div className='lg:flex text-left hover:scale-110 hover:duration-200 mx-2'>
                            <Link href={`/addtocart/${slide.slug.current}`} >
                                <Image src={urlFor(slide.images[0]).url()} alt="" className='swiper-image' width={300} height={300} />
                                <h3 className="lg:text-2xl text-xl font-bold mt-1">{slide.title}</h3>
                                <p className="text-xl text-left font-semibold mt-1">${slide.price}</p>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))
            }

        </Swiper>
    </div>

}

export default Home;