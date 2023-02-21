const SideBar = () => {
    return (
        <nav className="fixed inset-0 bg-[rgba(0,0,0,0.3)] backdrop-blue-sm z-10">
            <div className="w-[311px] bg-white absolute left-0 h-screen">
                <div className="p-[24px] flex justify-between items-center">
                    <div
                        className="w-[32px] h-[32px] rounded-full flex justify-center items-center cursor-pointer transition duration-[0.33s] hover:bg-[#f5f5f5]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </div>
                </div>
                <ul className="py-[6px] px-[32px] text-[#393ch1]">
                    <li>
                        <a href="#" className="inline-block w-full mb-[12px] py-[6px] px-[8px] text-[1rem] font-medium tracking-wider
                            rounded-xl transition duration-[0.3s] hover:bg-[#f5f5f5]"><span
                            className="mx-[4px]">Dashboard</span></a>
                    </li>
                    <li>
                        <a href="#" className="inline-block w-full mb-[12px] py-[6px] px-[8px] text-[1rem] font-medium tracking-wider
                            rounded-xl transition duration-[0.3s] hover:bg-[#f5f5f5]"><span
                            className="mx-[4px]">Analysis</span></a>
                    </li>
                    <li>
                        <a href="#" className="inline-block w-full mb-[12px] py-[6px] px-[8px] text-[1rem] font-medium tracking-wider
                            rounded-xl transition duration-[0.3s] hover:bg-[#f5f5f5]"><span
                            className="mx-[4px]">Documents</span></a>
                    </li>
                    <li>
                        <a href="#" className="inline-block w-full mb-[12px] py-[6px] px-[8px] text-[1rem] font-medium tracking-wider
                            rounded-xl transition duration-[0.3s] hover:bg-[#f5f5f5]"><span
                            className="mx-[4px]">Inbox</span></a>
                    </li>
                    <li>
                        <a href="#" className="inline-block w-full mb-[12px] py-[6px] px-[8px] text-[1rem] font-medium tracking-wider
                            rounded-xl transition duration-[0.3s] hover:bg-[#f5f5f5]"><span
                            className="mx-[4px]">History</span></a>
                    </li>
                    <li>
                        <a href="#" className="inline-block w-full mb-[12px] py-[6px] px-[8px] hover: text-[1rem] font-medium tracking-wider
                            rounded-xl transition duration-[0.3s] hover:bg-[#f5f5f5]"><span
                            className="mx-[4px]">Settings</span></a>
                    </li>
                    <li>
                        <a href="#" className="inline-block w-full mb-[8px] py-[8px] px-[12px] text-[1rem] font-medium tracking-wider
                            rounded-xl transition duration-[0.3s] hover:bg-[#f5f5f5] flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
                            </svg>
                            <span className="ml-[12px] flex flex-col">
                                <span>Israel</span>
                                <span className="transition text-[#5c5d61] hover:text-[#181b21] hover:shadow-border text-[12px] leading-[20px]">English</span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default SideBar;