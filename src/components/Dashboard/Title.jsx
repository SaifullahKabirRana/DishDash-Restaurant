
const Title = ({subHeading, heading}) => {
    return (
        <div>
            <div className="pt-2 md:pt-6 xl:pt-10 pb-6 md:pb-4 lg:pb-6 xl:pb-10">
            <div className="mx-auto w-6/10 md:w-4/10  lg:w-3/10 xl:w-3/10 2xl:w-2/10 text-center ">
                <p className="inter italic text-xs md:text-sm xl:text-base text-[#D99904] pb-1 md:pb-2 xl:mb-3">{subHeading}</p>
                <h2 className="inter text-[#151515] text-lg md:text-xl xl:text-2xl  border-y-2 border-[#E8E8E8] py-2 md:py-3 xl:py-4">{heading}</h2>
            </div>
        </div>
        </div>
    );
};

export default Title;