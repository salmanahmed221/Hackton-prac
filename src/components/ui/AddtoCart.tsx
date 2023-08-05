"use client"
import { useDispatch } from 'react-redux'
import { CartAction } from '@/store/slice/CartSlice';
import toast from 'react-hot-toast';


function AddtoCart() {
    const dispatch = useDispatch();
    const addItems = () => {
        dispatch(CartAction.addToCart({ quantity: 1 }))
        toast.success("Product added to cart")
    }
    return <div>
        <button
            onClick={addItems}
            type="button"
            className="text-white bg-black text-sm px-4 py-3 inline-flex font-semibold">
            <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2 -ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            <div>Add to Cart</div>
        </button>
    </div>;
}

export default AddtoCart;
