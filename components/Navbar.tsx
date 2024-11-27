import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        {/* Left Section: Logo and Name */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image src="/vitlogo.svg" width={55} height={40} alt="VIT logo" />
          </Link>
          <span className="text-lg font-bold text-white">
            VIT UNIVERSITY
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <Image
          src="/hamburger-menu.svg"
          width={30}
          height={30}
          alt="Hamburger menu"
          className="block md:hidden"
        />

        {/* Navigation Links */}
        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          {/* Your Name */}
          <li className="text-3xl font-bold text-gradient_blue-purple">
            V. Reddy Aishwarya
          </li>
          {/* Resume Link */}
          <li className="body-text !font-normal">
            <Link
              href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:f4aa53f5-e46b-43c0-97f9-e3cfe95e9ace"
              target="_blank"
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
