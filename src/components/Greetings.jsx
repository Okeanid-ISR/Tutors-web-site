const Greetings = () => {
    return (
        <div className="h-[300px] flex justify-between bg-[#FDFEFF] shadow-md p-[10px] mt-[30px] bg-white py-2 border-[1.8px] rounded-xl">
            <span>
                <h2 className="text-[1.8rem]">Welcome back, John!</h2>
                <p className="text-[1.2rem]">Your students completed <span className="text-[orange]">80%</span> of the tasks.
                    <span className="text-[orange]">Progress is very good!</span></p>
            </span>
            <img className=" h-[100%]"
                 src="https://img.freepik.com/free-vector/hand-drawn-flat-teachers-day-background_23-2149070824.jpg?w=1380&t=st=1677194831~exp=1677195431~hmac=d16fbe1df20a2d7bf57cf16c19dca308cbb71a17da56ef018195853c58d83b0e"/>
        </div>
    )
}

export default Greetings;