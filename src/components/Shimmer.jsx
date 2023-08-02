

const BlankCard = ()=>{
    return <div className="p-2 m-2 h-48 w-80 bg-gray-100"></div>
}

const Shimmmer = ()=>{
    
    return (
        <div className="flex flex-wrap justify-between md:px-10 p-2 pt-20 ">
            {Array(12).fill(<BlankCard/>).map((e, index)=>e)}
            
        </div>
    );
}

export default Shimmmer;