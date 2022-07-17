import  React, {useEffect} from 'react'

const RotateImages = ({images, imgInfo, anime}) =>{
    
    const [image, setImage] = React.useState('')
    const [imageInfo, setImgInfo] = React.useState('')
    const [classFade, setClassFade] = React.useState('fade-in')
    const [classSlide, setClassSlide] = React.useState('slide-in')

    useEffect(() => {

        let i = 0;
        let j = 0;
        let t;
        let speed;

        const  rotateImages = () => {
            const newImg = images[i]
            const info = imgInfo[i]
            setImage(newImg)
            setImgInfo(info)

            j++
            
            if(j === 2){ 
                setClassFade('fading')
                setClassSlide('sliding')
                speed = 3300
            }else if(j===3) {
                setClassFade('fade-out')
                setClassSlide('slide-out')
                j = 0
                i++
                speed = 1500;
            }else{
                setClassFade('fade-in')
                setClassSlide('slide-in')
                speed = 200;
            }

            if(i === images.length) i = 0
            
            t = setTimeout(() => rotateImages()
            , speed)
            return () => clearTimeout(t)
          }
          
      rotateImages()
       
    return () => clearTimeout(t)

    }, [images, imgInfo])

    return(
        <div className="fade-img-container">
           <div className="fade-img">
                <img src={image} alt='' className={anime === 'fade' ? classFade : classSlide}/>
                <div className={anime === 'fade' ? classSlide : classFade }>{imageInfo}</div>
            </div>
        </div>
    )
}

export default RotateImages