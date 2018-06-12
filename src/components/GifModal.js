import React from 'react';
import Modal from 'react-modal';

//connect up the props in react-model with the ones we made in app. (this feels bogus)
const GifModal = (props) => {
    if (!props.selectedGif){
        console.log("GifModal: rendering to empty div because no selectedGif")
        return <div></div>
    }
    console.log('rendering GifModal');
    return (
        <Modal
            isOpen={ props.modalIsOpen }
            onRequestClose={ () => props.onRequestClose() }>
            <div className={"gif-modal"}>
                <img src={ props.selectedGif.images.original.url } alt={"foo"} />
                <p><strong>Source:</strong> <a href={ props.selectedGif.source }>{ props.selectedGif.source }</a></p>
                <p><strong>Rating:</strong> { props.selectedGif.rating }</p>
                <button onClick={() => props.onRequestClose()}>close</button>
            </div>
        </Modal>
    );
};

export default GifModal;