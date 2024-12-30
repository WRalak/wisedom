import { HiMiniComputerDesktop } from "react-icons/hi2";
import { PiUserFocusFill, PiUsersThreeDuotone } from "react-icons/pi";
import { MdConnectedTv, MdArrowOutward } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { BiCamera } from "react-icons/bi";

export default function Resources() {
  const features = [
    {
      Icon: HiMiniComputerDesktop,
      bgColor: "bg-blue-300",
      title: "User-Friendly Interface",
      description:
        "With WISE Companion's user-friendly interface, you can effortlessly create and manage your trainer profile and training content. Our intuitive layout ensures you can showcase your expertise, qualifications, and achievements in just a few clicks. Make a lasting impression on potential corporate clients and shine in the competitive training market!",
    },
    {
      Icon: PiUserFocusFill,
      bgColor: "bg-blue-300",
      title: "Profile Showcasing",
      description:
        "Put your best foot forward and attract more corporate clients with WISE Companion's profile showcasing feature. Highlight your skills, experience, and certifications, and let your unique personality shine through. With a captivating profile, you'll stand out to corporate clients seeking top-notch trainers for their needs.",
      link: "View Trainers",
    },
    {
      Icon: MdConnectedTv,
      bgColor: "bg-orange-300",
      title: "Promotional Support",
      description:
        "WISE Companion actively promotes your trainer profile and training programs to a vast audience of potential corporate clients. Gain increased visibility as we feature top trainers and their courses on our homepage and targeted email campaigns. Partner with us to expand your reach and connect with more clients.",
    },
    {
      Icon: PiUsersThreeDuotone,
      bgColor: "bg-green-300",
      title: "Networking and Collaboration",
      description:
        "Join a thriving community of trainers on WISE Companion and unlock endless opportunities for networking and collaboration. Connect with industry experts, share insights, and even collaborate on joint projects. Together, we can make a profound impact on corporate learning.",
    },
    {
      Icon: CiGrid41,
      bgColor: "bg-red-300",
      title: "Customizable Training Modules",
      description:
        "WISE Companion offers a diverse library of customizable training modules to cater to corporate clients' unique needs. Tailor your content to meet specific industry requirements and elevate your training sessions to meet the highest standards.",
    },
    {
      Icon: BiCamera,
      bgColor: "bg-red-300",
      title: "Marketing and Branding Assistance",
      description:
        "Take advantage of WISE Companion's marketing resources to elevate your branding and online presence. Access professionally designed templates for flyers, social media posts, and newsletters. With our support, you'll attract more corporate clients to your courses.",
      link: "Show More",
    },
  ];

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-8 lg:ml-[330px]">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-xl sm:text-3xl font-bold text-gray-800">
          Why Choose WISE Companion
        </h2>
        <p className="text-gray-950 text-sm sm:text-base mt-4">
          WISE Companion offers a wide range of powerful features to help you
          excel and reach new heights in the world of corporate training.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {features.map(({ Icon, bgColor, title, description, link }, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-lg rounded-lg p-4"
          >
            <div
              className={`p-3 rounded-full flex justify-center items-center ${bgColor}`}
            >
              <Icon className="text-2xl text-white" />
            </div>
            <h4 className="font-bold text-gray-800 text-sm mt-4">{title}</h4>
            <p className="text-gray-950 text-sm mt-2 leading-relaxed">
              {description}
            </p>
            {link && (
              <a
                href="#"
                className="text-blue-700 text-sm mt-4 underline hover:text-blue-500"
              >
                {link}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="flex flex-col items-start space-y-4">
        <p className="text-sm sm:text-base text-gray-950 leading-relaxed">
          Join WISE Companion today and unlock your full potential as a
          corporate trainer. Elevate your training experience, connect with
          like-minded experts, and reach new heights in the world of corporate
          training. Together, we'll make a profound impact on professional
          growth and learning. Join us now and embark on an empowering journey
          with WISE Companion!
        </p>
        <button className="flex items-center bg-blue-500 text-white rounded py-2 px-4 mt-2 text-sm hover:bg-blue-600">
          Get Started
          <MdArrowOutward size={18} className="ml-2" />
        </button>
      </div>
    </section>
  );
}
