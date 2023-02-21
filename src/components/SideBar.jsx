const SideBar = () => {
    return (
        <nav className="sideBar-main container mx-auto flex justify-start flex-col lg:flex-column w-1/5 w-full space-y-4 ">
            <div className="sideBar-logo flex justify-center w-24 basis-1/6 items-center w-100">
                <img className="sideBar-logo__image h-24 cursor-pointer"
                     src='https://cdn-icons-png.flaticon.com/512/1048/1048949.png'/>
            </div>
            <div className="w-100">
                <a href="#" className="mb-10">Dashboard</a>
            </div>
        </nav>
    )
}

export default SideBar;