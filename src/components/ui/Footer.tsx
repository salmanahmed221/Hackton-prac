import Image from "next/image";
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import Link from "next/link";


function Footer() {
    return <div>
        <div className="md:grid grid-cols-4 md:mx-20 mx-5 py-5 ml-10 md:ml-16">
            {/* 1 */}
            <div>
                <Image src="/Logo.webp" alt="Logo" width={150} height={150} />
                <p className="pt-5 pr-10 md:pr-0">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                <div className="flex gap-2 pt-5">
                    <AiOutlineTwitter className="bg-[#f1f1f1] p-4 text-5xl rounded-lg" />
                    <FaFacebookF className="bg-[#f1f1f1] p-4 text-5xl rounded-lg" />
                    <BsLinkedin className="bg-[#f1f1f1] p-4 text-5xl rounded-lg" />
                </div>
            </div>

            {/* 2 */}
            <div className="leading-8 mt-6 md:mt-0 md:ml-12">
                <h3 className="text-2xl font-bold text-black/40">Company</h3>
                <p className="mt-3">
                    <Link href="/">About</Link>
                </p>
                <p>
                    <Link href="/">Terms of Use</Link>
                </p>
                <p>
                    <Link href="/">Privacy Policy</Link>
                </p>
                <p>
                    <Link href="/">How it Works</Link>
                </p>
                <p>
                    <Link href="/">Contact Us</Link>
                </p>
            </div>

            {/* 3 */}
            <div className="leading-8 mt-6 md:mt-0">
                <h3 className="text-2xl font-bold text-black/40">Support</h3>
                <p className="mt-3">
                    <Link href="/">Support Carrer</Link>
                </p>
                <p>
                    <Link href="/">24h Service</Link>
                </p>
                <p>
                    <Link href="/">Quick Chat</Link>
                </p>
            </div>

            {/* 4 */}
            <div className=" leading-8 mt-6 md:mt-0">
                <h3 className="text-2xl font-bold text-black/40">Contact</h3>
                <p className="mt-3">
                    <Link href="/">Whatsapp</Link>
                </p>
                <p>
                    <Link href="/">Support 24h</Link>
                </p>
            </div>
        </div>;
        <hr className="md:mt-7 bg-gray-800 h-[2px]" />
        <div className="md:flex lg:flex text-center justify-around py-6">
            <div>
                <p>Copyright © 2022</p>
                <p>Dine Market</p>
            </div>
            <div className="mt-4 md:mt-0">
                <p>Design by.</p>
                <p className="font-bold">Weird Design Studio</p>
            </div>
            <div className="mt-4 md:mt-0">
                <p>Code by.</p>
                <p className="font-bold">Salman Ahmed</p>
            </div>
        </div>
    </div>

}

export default Footer;