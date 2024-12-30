import Image from "next/image";
// Icons
import { BiDonateHeart } from "react-icons/bi";
import { PiHeartThin } from "react-icons/pi";
import { MdBlockFlipped } from "react-icons/md";

export default function Section() {
  return (
    <section className="flex flex-col gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 xl:px-20 2xl:px-40">
      {/* Block 1 */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left side with text and icons */}
        <div className="flex flex-col w-full lg:w-2/3 gap-4">
          <h6 className="text-base font-bold">Assessments</h6>
          <p className="text-sm text-gray-950 leading-relaxed">
            Our companions provide socialization and companionship, light
            household tasks, trips around town, accompany on errands and events,
            and pet care.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl text-red-500">
                <PiHeartThin />
              </span>
              <div>
                <p className="text-sm font-semibold underline text-gray-950">
                  Health-Related Social Needs
                </p>
                <p className="text-sm text-gray-950 leading-relaxed">
                  Our companions provide socialization and companionship, light
                  household tasks, trips around town, accompany on errands and
                  events, and pet care.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl text-green-500">
                <BiDonateHeart />
              </span>
              <p className="text-sm underline text-gray-950">SDHO Needs</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl text-blue-500">
                <MdBlockFlipped />
              </span>
              <p className="text-sm underline text-gray-950">Routine Needs</p>
            </div>
          </div>
        </div>

        {/* Right side with image */}
        <div className="flex justify-center items-center w-full lg:w-1/3 min-h-[267px]">
          <Image
            src="/wise10.jpeg"
            alt="Assessment visual"
            width={380}
            height={267}
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Repeat Blocks 2 and 3 */}
      {[{
        title: "Follow Up – Follow Along Program (CBO partnership & grant funded)",
        imgSrc: "/wise1.jpeg",
      }, {
        title: "Companion Care",
        imgSrc: "/wise11.jpeg",
      }].map(({ title, imgSrc }, index) => (
        <div key={index} className="flex flex-col lg:flex-row gap-6">
          {/* Left side with text */}
          <div className="flex flex-col w-full lg:w-2/3 gap-4">
            <h6 className="text-base font-bold">{title}</h6>
            <p className="text-sm text-gray-950 leading-relaxed">
              Our companions provide socialization and companionship, light
              household tasks, trips around town, accompany on errands and events,
              and pet care.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl text-red-500">
                  <PiHeartThin />
                </span>
                <p className="text-sm text-gray-950">Our Companions provide socialization</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl text-green-500">
                  <BiDonateHeart />
                </span>
                <p className="text-sm text-gray-950">Our Companions provide socialization</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl text-blue-500">
                  <MdBlockFlipped />
                </span>
                <p className="text-sm text-gray-950">Our Companions provide socialization</p>
              </div>
            </div>
          </div>

          {/* Right side with image */}
          <div className="flex justify-center items-center w-full lg:w-1/3 min-h-[267px]">
            <Image
              src={imgSrc}
              alt={title}
              width={380}
              height={267}
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
