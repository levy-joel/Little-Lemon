const SpecialsCard = ({title, description, price, image}) => {
    return (
        <div className='special-card'>
            <div className='image_text'>
                <div className='image'>
                    <img src={image} alt={title}></img>
                </div>
                <div className='title_price'>
                    <h4>{title}</h4>
                    <h5>{price}</h5>
                </div>
                <p className='description'>{description}</p>
            </div>
            <div>
                <a className='order-delivery' href='#order'>
                    <p>Order a delivery</p>
                    <img src='delivery.svg' alt='Delivery'></img>
                </a>
            </div>
        </div>
    );
};

export default SpecialsCard;