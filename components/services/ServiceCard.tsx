import Image from "next/image";
import Heading from "../common/heading/Heading";
import Link from "next/link";

interface ServiceCardProps {
    title: string,
    description: string,
    icon: string,
    link?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
    return (
        <div className="bg-[#F5E3E9] px-3 md:px-6 py-3 md:py-5 h-[280px] flex items-center gap-5 border border-[#CFC9D4]">
            <div className="w-[20%]">
                <div className="w-16 md:w-24 h-16 md:h-24 p-4 md:p-7 rounded-full bg-white flex justify-center items-center">
                    <Image
                        src={`${icon}`}
                        alt={title}
                        width={30}
                        height={30}
                        
                    />
                </div>
            </div>

            <div className="w-[80%] flex flex-col gap-4 items-baseline">
                <Heading
                    title={title}
                    custom='uppercase text-[15px] md:text-[18px] lg:text-[24px] font-semibold leading-tight'
                />
                <p className="text-sm md:text-[16px]">
                    {description}
                </p>
                <Link href={`${link}`}>
                    <button className="uppercase px-8 py-2 bg-[#420FB0] text-sm md:text-[16px] text-white font-semibold"> Learn more </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;