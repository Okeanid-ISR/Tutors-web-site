const SideBar = () => {
    return (
        <nav className="w-1/7 inset-0 backdrop-blue-sm z-10">
            <div className="bg-regal-blue left-0 h-screen">
                <div className="p-[24px] mb-[36px] flex justify-start items-center">
                    <img className="w-[80px] cursor-pointer"
                         src="https://cdn-icons-png.flaticon.com/512/2179/2179415.png"/>
                    {/*<span className="hover:text-2xl transition  ml-[12px] text-[1.4rem] font-medium tracking-wider cursor-pointer text-white">LearnLift</span>*/}
                </div>
                <ul className="py-[6px] px-[32px] text-[#393ch1]">
                    <li className="">
                        <a href="#" className="flex w-full mb-[12px] py-[6px] px-[8px] text-[1rem] font-medium tracking-wider
                            rounded-xl transition duration-[0.3s] hover:bg-[#f5f5f5] hover:text-[#181b21] text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"/>
                            </svg>
                            <span
                                className="mx-[12px]">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex w-full mb-[12px] py-[6px] px-[8px] text-[1rem] font-medium tracking-wider
                            rounded-xl transition duration-[0.3s] hover:bg-[#f5f5f5] hover:text-[#181b21] text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
                            </svg>

                            <span
                                className="mx-[12px]">Analysis</span></a>
                    </li>
                    <li>
                        <a href="#" className="flex w-full mb-[12px] py-[6px] px-[8px] text-[1rem] font-medium tracking-wider
                            rounded-xl transition duration-[0.3s] hover:bg-[#f5f5f5] hover:text-[#181b21] text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
                            </svg>

                            <span
                                className="mx-[12px]">Documents</span></a>
                    </li>
                    <li>
                        <a href="#" className="flex w-full mb-[12px] py-[6px] px-[8px] text-[1rem] font-medium tracking-wider
                            rounded-xl transition duration-[0.3s] hover:bg-[#f5f5f5] hover:text-[#181b21] text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"/>
                            </svg>

                            <span
                                className="mx-[12px]">Inbox</span></a>
                    </li>
                    <li>
                        <a href="#" className="flex w-full mb-[12px] py-[6px] px-[8px] text-[1rem] font-medium tracking-wider
                            rounded-xl transition duration-[0.3s] hover:bg-[#f5f5f5] hover:text-[#181b21] text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
                            </svg>

                            <span
                                className="mx-[12px]">History</span></a>
                    </li>
                    <li>
                        <a href="#" className="flex w-full mb-[12px] py-[6px] px-[8px] hover: text-[1rem] font-medium tracking-wider
                            rounded-xl transition duration-[0.3s] hover:bg-[#f5f5f5] hover:text-[#181b21] text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"/>
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>

                            <span
                                className="mx-[12px]">Settings</span></a>
                    </li>
                    <li>
                        <a href="#" className="flex w-full mb-[8px] py-[8px] px-[10px] text-[1rem] font-medium tracking-wider
                            rounded-xl transition duration-[0.3s] hover:bg-[#f5f5f5] flex hover:text-[#181b21] text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
                            </svg>
                            <span className="ml-[12px] flex flex-col">
                                <span>Israel</span>
                                <span
                                    className="transition text-[#5c5d61] hover:text-[#181b21] hover:shadow-border text-[12px] leading-[20px]">English</span>
                            </span>
                        </a>
                    </li>
                </ul>

            </div>
            <div className="fixed cursor-pointer bottom-[50px] left-[45px] flex tracking-wider
                            rounded-xl transition duration-[0.3s] hover:bg-[#f5f5f5] flex hover:text-[#181b21]
                             text-white py-[8px] px-[10px] border-[1.8px] border-[white] hover:border-[black]">
                <a href="#" className="font-medium flex items-center hover:text-[#000000]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/>
                    </svg>
                    <span className="text-[1.2rem] mx-[12px]">Logout</span>
                </a>
            </div>
        </nav>
    )
}

export default SideBar;