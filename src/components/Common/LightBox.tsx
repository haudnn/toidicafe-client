import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import {useState} from "react"

interface Props {
  images: Array<any>, 
  length:number, 
  name:string, 
  handleOpenLighbox: any
}
const LightBox = ({images, length, name, handleOpenLighbox}: Props) => {
    const [photoIndex, setPhotoIndex] = useState(0);
    return (
        <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % length]}
        prevSrc={
            images[
            (photoIndex + length - 1) % length
          ]
        }
        onCloseRequest={handleOpenLighbox}
        onMovePrevRequest={() =>
          setPhotoIndex(
            (photoIndex + length - 1) % length
          )
        }
        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % length)}
        imageTitle={`${photoIndex + 1} / ${length}`}
        imageCaption={name}
      />
    )
}
export default LightBox