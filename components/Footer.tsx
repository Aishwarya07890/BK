import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black-100 text-white text-center border-t border-black-400 py-8 px-4">
      {/* Icons Section */}
      <div className="flex justify-center gap-x-6 mb-4">
        {/* LeetCode Logo */}
        <Link
          href="https://github.com/Aishwarya07890"
          target="_blank"
          aria-label="LeetCode Profile"
        >
          <Image
            src="/leetcode.svg"
            width={30}
            height={30}
            alt="LeetCode Logo"
          />
        </Link>

        {/* GitHub Logo */}
        <Link
          href="https://github.com/Aishwarya07890"
          target="_blank"
          aria-label="GitHub Profile"
        >
          <Image
            src="/github.svg"
            width={30}
            height={30}
            alt="GitHub Logo"
          />
        </Link>

        {/* CSS Runner Logo */}
        <Link
          href="https://codepen.io/Reddy-Aishwarya-V-21BCE3182"
          target="_blank"
          aria-label="CSS Runner Profile"
        >
          <Image
            src="/codepen.svg"
            width={30}
            height={30}
            alt="CSS Runner Logo"
          />
        </Link>

        {/* LinkedIn Logo */}
        <Link
          href="https://www.linkedin.com/in/aishwarya-v-reddy-7b5168254/"
          target="_blank"
          aria-label="LinkedIn Profile"
        >
          <Image
            src="/linkden.svg"
            width={30}
            height={30}
            alt="LinkedIn Logo"
          />
        </Link>

        {/* Gmail Logo */}
        <Link
          href="mailto:vaishwarya058@gmail.com"
          target="_blank"
          aria-label="Gmail"
        >
          <Image
            src="/gmail.svg"
            width={30}
            height={30}
            alt="Gmail Logo"
          />
        </Link>
      </div>

      {/* Terms & Privacy Section */}
      <div className="mb-4">
        <Link href="/terms-of-use" className="mx-4 hover:underline">
          Terms & Conditions
        </Link>
        <Link href="/privacy-policy" className="mx-4 hover:underline">
          Privacy Policy
        </Link>
      </div>

      {/* Copyright Section */}
      <p>© 2024 Reddy Aishwarya | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
