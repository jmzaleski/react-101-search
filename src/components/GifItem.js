import React from 'react';

const GifItem = (image) => {
    return (
        <li>
            <img src={image.gif.images.downsized.url} alt={"foo"}/>
        </li>
    )
};

export default GifItem;