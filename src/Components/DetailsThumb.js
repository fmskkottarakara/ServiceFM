import React, { Component } from 'react'

export class DetailsThumb extends Component {
    render() {
        const { images, handleImgChange, myRef } = this.props; // Updated prop names
        return (
            <div className="thumb" ref={myRef}>
                {images.map((img, index) => (
                    <img
                        src={img}
                        alt=""
                        key={index}
                        onClick={() => handleImgChange(index)}  // Use the handleImgChange prop here
                    />
                ))}
            </div>
        );
    }
}

export default DetailsThumb;
