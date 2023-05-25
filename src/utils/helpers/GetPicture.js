import React, {useRef, useEffect, useState} from 'react'
import { iconBack } from '../../assets'
import { Icon } from '../../components'
const GetPicture = ({getPhoto, openCamera}) => {
    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const [hasPhoto, setHasPhoto] = useState(false);

    const getVideo = () => {
        navigator.mediaDevices.
            getUserMedia({
                video : {width: 1920, height: 1080}
            })
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            }).catch(err => {
                console.error(err);
            })
    }

  
    const takePhoto = async () => {
        const width = 900;
        const height = width / (16/9);

        let video = videoRef.current;
        let photo = photoRef.current;
        

        photo.width = width;
        photo.height = height;
        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0,0, width, height);
        let url = photo.toDataURL('image/jpeg', 0.5);
 
        getPhoto(url);
    }

    useEffect(() => {
        getVideo();
    }, [videoRef])

    return (
        <div style={styles.container}>
            <button onClick={() => openCamera()} style={styles.backIcon}>
                <Icon icon={iconBack} width="20" height="20" color="#222" />
            </button>
            <div style={styles.preview}>
                <video ref={videoRef} style={{maxWidth: '100%'}} playsInline></video>
            </div>
       
            <div className="camera-control" style={styles.cameraControl} className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
                <canvas ref={photoRef} style={{display: 'none'}}></canvas>
                <button
                onClick={() => takePhoto()}
                style={styles.cameraButton}>
                <span style={{fontSize: 14}}> Ambil Foto </span>
                </button>
            </div>
      </div>
   
    )
}

const styles = {
    container: {
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        backgroundColor: 'tranparent',
      },
      backIcon: {
        width: 50,
        height: 50,
        paddingLeft: 20,
        paddingTop: 20,
        position: 'absolute',
        zIndex: 999,
      },
      preview: {
        marginTop: '25px',
        display: 'flex',
        // height: '85%',
        maxHeight: '100vh',
        maxWidth: '100vw',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      cameraControl: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: '80px',
        width: '100%',
      },
      cameraButton: {
        flex: .1,
        backgroundColor: 'var(--header-page)',
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: 5,
        padding: '15px 50px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      },
}

export default GetPicture
