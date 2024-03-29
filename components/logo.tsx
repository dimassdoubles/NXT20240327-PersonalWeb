import Link from "next/link"
import Image from "next/image"

const Logo = () => {
    return <Link href="/">
        <Image src="/public/logo.svg" width={54} height={54} priority alt="logo"></Image>
    </Link>
}

export default Logo
