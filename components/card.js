import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const card = ({ card }) => {
    const [loved, setLoved] = useState(false)
    const { image, auction, nftId, love, price } = card;
    return (
        <div className="bg-[#0b2237] w-[350px] p-[25px] mx-auto my-[10px] rounded-xl">
            <div className="flex justify-between mb-[20px]">
                <div className="badge badge-outline text-[#6f708f]">Hot Deal</div>
                {auction
                    ?
                    <div className="bg-[#141a30] border-[1.5px] border-[#754917] rounded-3xl px-[13px] py-[1px] text-white text-[13px]">AUCTION</div>
                    :
                    <div className="bg-[#141a30] border-[1.5px] border-[#36498a]  rounded-3xl px-[13px] py-[1px] text-white text-[13px]">SALE</div>
                }
            </div>
            <img className="rounded-lg" src={image} alt="" />
            <div className='mt-[15px] flex justify-between'>
                <div>
                    <p className="text-[#ced1d6]">{nftId}</p>
                    <p className="text-[#4281be] text-[14px]">Enoch Citizen</p>
                </div>
                {loved ?
                    <p className='text-[#c5cacf] flex items-center'><FaHeart className='mr-[10px] text-[19px] text-[#ff0080]' onClick={() => setLoved(false)} /> {love + 1}</p>
                    :
                    <p className='text-[#7c8187] flex items-center' ><FaHeart className='mr-[10px] text-[19px]' onClick={() => setLoved(true)} /> {love}</p>
                }
            </div>
            <div>
                <button className="btn btn-outline rounded-none text-white">ADD TO CARD</button>
                <button className="btn bg-[#0075ff] rounded-none">BUY NOW</button>
            </div>
        </div >
    );
};

export default card;