import video from '../../assets/video/woman-reading-book-under-the-tree.mp4'

const Hero = () => {
    return (
        <div className="hero-wrapper">
            <p className='hero-txt'>
                Where stories whisper through the ages, waiting for your discovery.
            </p>
            <video autoPlay muted loop id="hero-video">
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default Hero