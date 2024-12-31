import Image from "next/image";
// Icons
import { BiDonateHeart } from "react-icons/bi";
import { PiHeartThin } from "react-icons/pi";
import { MdBlockFlipped } from "react-icons/md";

export default function AssessmentsSection() {
  return (
    <section className="flex flex-col text-xs gap-4 px-4 py-6">
      {/* Block 1 */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:ml-[370px] lg:mr-[280px] 2xl:ml-[900px] 2xl:mr-[680px] ">
        {/* Left side with text and icons */}
        <div className="flex flex-col w-full lg:w-2/3 gap-2">
          <h6 className="text-sm font-bold">Assessments</h6>
          <p className="text-xs text-gray-950">
            Our companions provide socialization and <br /> companionship, light household tasks, trips around <br /> town, accompany on errands and events, and pet <br /> care.
          </p>
          <p className="text-xs text-gray-950">
            Our companions provide socialization and <br /> companionship, light household tasks, trips around <br /> town, accompany on errands and events, and pet <br /> care.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl text-red-500">
                <PiHeartThin />
              </span>
              <div className="flex flex-col">
                <p className="text-xs font-bold underline text-gray-950">
                  Health-Related Social Needs
                </p>
                <p className="text-xs text-gray-950">
                  Our companions provide socialization and <br /> companionship, light household tasks, trips around <br /> town, accompany on errands and events, and pet <br /> care.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl text-green-500">
                <BiDonateHeart />
              </span>
              <p className="text-xs underline text-gray-950">SDHO Needs</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl text-blue-500">
                <MdBlockFlipped />
              </span>
              <p className="text-xs underline text-gray-950">Routine Needs</p>
            </div>
          </div>
        </div>

        {/* Right side with image */}
        <div className="flex justify-center items-center w-full lg:w-1/3 mt-[-10px] lg:mt-0">
          <Image
            src="/wise10.jpeg"
            alt="Assessment visual"
            layout="intrinsic"
            width={500}
            height={467}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Block 2 */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:ml-[370px] lg:mr-[280px] 2xl:ml-[900px] 2xl:mr-[680px]">
        {/* Left side with text */}
        <div className="flex flex-col w-full lg:w-2/3 gap-2">
          <h6 className="text-sm font-bold mt-2">
            Follow Up – Follow Along Program <br />
            (CBO partnership & grant funded)
          </h6>
          <p className="text-xs text-gray-950">
            Our companions provide socialization and <br /> companionship, light household tasks, trips around <br /> town, accompany on errands and events, and pet <br /> care.
          </p>
          <p className="text-xs text-gray-950">
            Our companions provide socialization and <br /> companionship, light household tasks, trips around <br /> town, accompany on errands and events, and pet <br /> care.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-3xl text-red-500">
                <PiHeartThin />
              </span>
              <p className="text-xs text-gray-950">
                Our Companions provide socialization
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl text-green-500">
                <BiDonateHeart />
              </span>
              <p className="text-xs text-gray-950">
                Our Companions provide socialization
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl text-blue-500">
                <MdBlockFlipped />
              </span>
              <p className="text-xs text-gray-950">
                Our Companions provide socialization
              </p>
            </div>
          </div>
        </div>

        {/* Right side with image */}
        <div className="flex justify-center items-center w-full lg:w-1/3 mt-[-10px] lg:mt-0">
          <Image
            src="/wise1.jpeg"
            alt="Follow Along visual"
            layout="intrinsic"
            width={500}
            height={467}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Block 3 */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:ml-[380px] lg:mr-[270px] 2xl:ml-[900px] 2xl:mr-[680px]">
        {/* Left side with text */}
        <div className="flex flex-col w-full lg:w-2/3 gap-2">
          <h6 className="text-sm font-bold mt-4">Companion Care</h6>
          <p className="text-xs text-gray-950">
            Our companions provide socialization and <br /> companionship, light household tasks, trips around <br /> town, accompany on errands and events, and pet <br /> care.
          </p>
          <p className="text-xs text-gray-950">
            Our companions provide socialization and <br /> companionship, light household tasks, trips around <br /> town, accompany on errands and events, and pet <br /> care.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl text-red-500">
                <PiHeartThin />
              </span>
              <p className="text-xs text-gray-950">
                Our Companions provide socialization
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl text-green-500">
                <BiDonateHeart />
              </span>
              <p className="text-xs text-gray-950">
                Our Companions provide socialization
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl text-blue-500">
                <MdBlockFlipped />
              </span>
              <p className="text-xs text-gray-950">
                Our Companions provide socialization
              </p>
            </div>
          </div>
        </div>

        {/* Right side with image */}
        <div className="flex justify-center items-center w-full lg:w-1/3 mt-[-10px] lg:mt-0">
          <Image
            src="/wise11.jpeg"
            alt="Companion Care visual"
            layout="intrinsic"
            width={500}
            height={467}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
