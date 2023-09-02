import logo from "/ChatApp.png"
const Header = () => {
    return (
        <header className="bg-[#244254] h-[5rem] text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center">
                <a className=" cursor-pointer flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
<img src={logo} className='w-[4rem]  h-[4rem]' alt="" />
                    <span className="logoText text-white ml-3 text-[1.6rem]">Chat App</span>
                    
                </a>
            </div>
        </header>
    )
}

export default Header

