
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mt-8 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-20 pb-6 md:pb-8 lg:pb-10 xl:pb-14">
            <div className="mx-auto w-6/10 md:w-4/10  lg:w-3/10 xl:w-3/10 2xl:w-2/10 text-center ">
                <p className="font-inter italic text-sm md:text-base xl:text-xl text-[#D99904] pb-1 md:pb-2 xl:mb-3">{subHeading}</p>
                <h2 className="font-inter text-[#151515] text-xl md:text-2xl xl:text-3xl border-y-2 border-[#E8E8E8] py-2 md:py-3 xl:py-4">{heading}</h2>
            </div>
        </div>
    );
};

export default SectionTitle;