import Image from "next/image";
import logo from './Logo.png'

export default function Navbar() {
    return (
        <div className="navbar flex w-full h-20 bg-tertiary justify-between items-center text-secondary ">
            <div className="logo mx-6 my-2">
                <Image
                    src={logo}
                    width={80}
                    height={45}
                    alt="Picture of the author"
                />
            </div>
            <div className="navbar-links flex gap-10 mr-6 text-base font-semibold items-center">
                <p>Home</p>
                <p>Team</p>
                <p>GATE Portal</p>
                <p>Gallery</p>
                <p>About us</p>
                <p>Contact</p>
                <p className="bg-secondary text-tertiary rounded-xl px-6 py-1 hover:cursor-pointer duration-500 ease-in-out hover:bg-primary hover:text-secondary">Sign in</p>
            </div>
        </div>
    );
}