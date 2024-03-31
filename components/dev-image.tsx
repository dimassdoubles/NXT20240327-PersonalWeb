import Image from "next/image"

interface DevImageProps {
    containerStyles: string,
    imgSrc: string,
}

const DevImage = (props: DevImageProps) => {
    return <div className={props.containerStyles}>
        <Image src={props.imgSrc} alt="dev-image" fill priority/>
    </div>
}

export default DevImage
