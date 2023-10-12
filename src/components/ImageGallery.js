import React, { useEffect, useState } from 'react';


function ImageGallery() {
    const [images, setImages] = useState([]); 

    useEffect(()=>{
        fetch('https://picsum.photos/v2/list').then((res) =>
            res.json()).then((data) => {
                setImages(data);
            }).catch((error) => {
                console.error('Error on getiing image', error)
            });
    },[])
    return (
        <div>
           <h1>Image Gallery</h1>
           <div className='image-grid'>
                {images.map((image) => (
                    <div key={image.id} className='image-item'>
                        <img src={image.download_url} alt={image.author}  />
                    </div>
                ))}
           </div>
        </div>
    );
}

export default ImageGallery;