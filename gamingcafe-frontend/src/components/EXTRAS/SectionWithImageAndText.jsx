import heroImg from '../../assets/lounge3.jpg';
import TitleBox from './TitleBox';

const SectionWithImageAndText = () => {
  return (
    <section className="relative w-screen py-40 px-4 md:px-16">
      <div className="relative flex flex-col md:flex-row md:items-start md:justify-center md:gap-12">

        {/* 🔹 Left: Title + Text + Image Overlap Container */}
        <div className="relative z-10 w-full md:w-[60%]">

          {/* Title + overlapping image */}
          <div className="relative mb-12">
            <TitleBox title="THE SETUP" />

            {/* Overlapping Image (Desktop Only) */}
            <img
              src={heroImg}
              alt="Setup"
              className="hidden md:block absolute top-1/2 right-[-160px] translate-y-[-50%] h-[500px] w-[320px] object-cover rounded shadow-lg z-20"
            />
          </div>

          {/* Text under title box */}
          <div className="mt-8 text-black font-lato md:pl-16 max-w-xl">
            <p className="text-sm md:text-base leading-relaxed">
              Dive into a gaming experience like no other. Our setup is built for immersion and performance, combining comfort, lighting, and raw power to deliver a next-level competitive edge.
            </p>
          </div>
        </div>

        {/* Mobile Image View */}
        <div className="md:hidden w-full mt-8 flex justify-center">
          <img
            src={heroImg}
            alt="Setup"
            className="h-[400px] w-[300px] object-cover rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionWithImageAndText;


