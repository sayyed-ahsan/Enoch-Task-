
const card = ({ card }) => {
    const { image, auction, nftId, love, price } = card;
    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default card;