'use client';
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';


function CounterMenu() {
    const [val, setVal] = useState(1);
    const Dec = () => {
        if (val == 1) {
            val;
        } else {
            setVal(val - 1);
        }
    };
    const Inc = () => {
        setVal(val + 1);
    };
    return (
        <div>
            <button
                className="bg-[#f1f1f1] rounded-full px-2 py-2 mr-2 border-2 border-black"
                onClick={Dec}>
                <AiOutlineMinus />
            </button>
            {val}
            <button
                className="bg-[#f1f1f1] rounded-full px-2 py-2 ml-2 border-2 border-black"
                onClick={Inc}>
                <AiOutlinePlus />
            </button>
        </div>
    );
}

export default CounterMenu;
