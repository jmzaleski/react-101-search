import React from 'react';

const GifItem = (image) => {
    return (
        <li>
            <img src={image.gif.url} alt={'foo'} />
        </li>
    )
};

export default GifItem;