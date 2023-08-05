import { BiShoppingBag } from 'react-icons/bi';

function Cart() {
    return <div>
        <h2 className="font-bold text-2xl md:mt-20 mt-16 md:ml-40 ml-20">Shopping Cart</h2>
        <div className='flex flex-col justify-center items-center mt-10 mb-32'>
            <BiShoppingBag className='text-9xl' />
            <h1 className='text-4xl font-bold px-10 md:px-0 ml-6 md:ml-0'>Your shopping bag is empty</h1>
        </div>
    </div>;
}

export default Cart;
