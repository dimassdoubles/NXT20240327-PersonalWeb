import Link from "next/link"
import Image from "next/image"

const Logo = () => {
    return <Link href="/">
        <Image className="dark:hidden" src="/logo-light.svg" width={54} height={54} priority alt="logo"></Image>
        <Image className="hidden dark:block" src="/logo-dark.svg" width={54} height={54} priority alt="logo"></Image>
    </Link>
}

export default Logo
