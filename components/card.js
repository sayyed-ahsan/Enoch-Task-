import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const card = ({ card }) => {
    const [loved, setLoved] = useState(false)
    const { image, auction, nftId, love, price, offerPercentage } = card;
    return (
        <div className="bg-[#0b2237] w-[290px] p-[25px] mx-auto my-[10px] rounded-xl">
            {/* card top  */}
            <div className="flex justify-between mb-[15px]">
                <div className="badge badge-outline text-[#6f708f]">Hot Deal</div>
                {auction
                    ?
                    <div className="bg-[#141a30] border-[1.5px] border-[#754917] rounded-3xl px-[13px] py-[1px] text-white text-[11px]">AUCTION</div>
                    :
                    <div className="bg-[#141a30] border-[1.5px] border-[#36498a]  rounded-3xl px-[13px] py-[1px] text-white text-[12px]">SALE</div>
                }
            </div>
            {/* card img  */}
            <img className="rounded-lg" src={image} alt="" />
            {/* card info  */}
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
            {/* card bid and price  */}
            {auction ? <div className='flex justify-between my-[20px]'>
                <div className='border-[1px] border-[#36488a] py-[5px] px-[6px]'>
                    <p className='text-[#00b604] text-[13px] font-semibold'>HIGHEST BID</p>
                    <p className='text-[#f8f9f9]'>${price}</p>
                </div>
                <div className='border-[1px] border-[#60341e] py-[5px] px-[6px]'>
                    <p className='text-[#80a9d0] text-[13px] font-semibold'>AUCTION ENDS IN</p>
                    <span className="countdown font-mono text-[16px] text-[#f8f9f9]">
                        <span style={{ "--value": 10 }}></span>:
                        <span style={{ "--value": 24 }}></span>:
                        <span style={{ "--value": 54 }}></span>:
                        <span style={{ "--value": 34 }}></span>s
                    </span>
                </div>
            </div> :
                <div className='flex justify-between my-[20px]'>
                    <div className='border-[1px] border-[#36488a] py-[6px] px-[6px] w-[80px] relative'>
                        <p className='text-white text-[12px] bg-[#00b306] rounded-2xl text-center absolute px-[7px] right-1 top-[-13px]'>{offerPercentage}% OFF</p>
                        <p className='text-red-500 line-through decoration-orange-100 text-[13px] font-semibold'>$300</p>
                        <p className='text-[#f8f9f9]'>${price}</p>
                    </div>
                    <div className='border-[1px] border-[#60341e] py-[5px] px-[6px]'>
                        <p className='text-[#80a9d0] text-[13px] font-semibold'>FLASH DEAL ENDS IN</p>
                        <span className="countdown font-mono text-[17px] text-[#f8f9f9]">
                            <span style={{ "--value": 10 }}></span>:
                            <span style={{ "--value": 24 }}></span>:
                            <span style={{ "--value": 54 }}></span>:
                            <span style={{ "--value": 34 }}></span>s
                        </span>
                    </div>
                </div>}

            {/* card buttons  */}
            {
                auction ? <button className="btn bg-[#0075ff] rounded-none w-full">BUY NOW</button> : <div className='flex justify-between'>
                    <button className="btn btn-outline rounded-none text-white">ADD TO CARD</button>
                    <button className="btn bg-[#0075ff] rounded-none px-[16px] border-[#0076ff] h-full">BUY NOW</button>
                </div>
            }
        </div >
    );
};

export default card;