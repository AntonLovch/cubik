import React, { useState } from 'react';
import Button from './Button';

const images = [
    require('./img/pic1.png'),
    require('./img/pic2.png'),
    require('./img/pic3.png'),
    require('./img/pic4.png'),
    require('./img/pic5.png'),
    require('./img/pic6.png')
];

const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
};

const RandomImage = () => {
    const [image, setImage] = useState(null);

    const handleClick = () => {
        setImage(getRandomImage());
    };

    return (
        <div className='cube'>
            <Button onClick={handleClick} text="Бросить кубик" />
            {image && <img src={image} alt="Кубик" />}
        </div>
    );
};

export default RandomImage;