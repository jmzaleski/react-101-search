import React from 'react';

//const GifItem = (image) => {

const GifItem = ({gif, onGifSelect}) => {

    return (
        <div className="gif-item" onClick={() => onGifSelect(gif)}>
            <img src={gif.images.downsized.url} alt={'foo'} />
        </div>
    )
};

export default GifItem;