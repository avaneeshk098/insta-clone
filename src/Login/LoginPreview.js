import './LoginPreview.css'
import React, {useState} from 'react';
import image1 from './login-preview-1.jpg'
import image2 from './login-preview-2.jpg'
import image3 from './login-preview-3.jpg'
import image4 from './login-preview-4.jpg'
import image5 from './login-preview-5.jpg'

const LoginPreview = () => {
    const [images, setImages] = useState([image1, image2, image3, image4, image5]);
    const [index, setIndex] = useState(0);

    if(index+1 === 5){
        setTimeout(() => {
            setIndex(0);
        }, 2500);        
    }
    else{
        setTimeout(() => {
            setIndex(index+1);
        }, 2500);
    }
    return (
            <div id="carousel-inner">
                <img src={images[index]} alt="Platform Preview" />
            </div>
    );
}

export default LoginPreview;