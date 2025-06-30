import {FaChevronDown
} from 'react-icons/fa';
import {useState} from 'react';
const TitleBoxnoImg = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const drawers = [
    {
      label: 'COMPUTERS',
      content:
        '₹100 - 1 Hour\n₹250 - 3 Hours\n₹450 - 6 Hours\n\nDay Pass: ₹700\n\n*Note: Day Pass time does not stay on the user’s account past the end of the day. All other hourly options stay on the user’s account for future use.',
    },
    {
      label: 'CONSOLES',
      content:
        '₹100 - 1-2 Guests\n₹150 - 3-4 Guests\n₹200 - 5+ Guests\n\nWe offer PS5 & PS4 setups.',
    },
  ];

  return (
    <section className="w-[80%] mx-auto">
      <div className="flex flex-col md:grid md:grid-cols-4 md:grid-rows-6 gap-4 px-4 md:px-6 py-6 md:py-8 w-full">
        {/* Blue Background Box */}
        <div className="relative md:col-start-1 md:col-span-4 md:row-start-2 row-span-2 flex justify-center">
          <div className="bg-blue-700 bg-opacity-25 w-full max-w-[100%] h-[140px] rounded-md border-8 border-white" />
        </div>

        {/* Black Foreground Box - Row 3 */}
        <div className="relative md:col-start-1 md:col-span-4 md:row-start-3 flex justify-center z-10 
                md:-translate-y-24 sm:-translate-y-12 -translate-y-6">
          <div className="bg-black text-white w-full max-w-[80%] h-[160px] flex md:justify-start items-center justify-center rounded-md p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl md:text-5xl font-extrabold font-poppins uppercase">
              THE RATES
            </h2>
          </div>
        </div>

        {/* Text & Dropdown Boxes */}
        <div className="order-3 md:order-none md:col-start-1 md:col-span-4 md:row-start-4 md:row-span-2 flex flex-col md:flex-row gap-6 px-1 md:px-8">
          {/* Left Box */}
          <div className="flex-1 bg-black/20 text-white rounded-md p-6">
            <p className="text-base sm:text-lg md:text-xl font-montserrat font-semibold leading-relaxed whitespace-pre-line">
              Our PCs save the hours you purchase on your personal account, so
              you can

              Just login and play!
              Consoles and Racing Sims are perfect for friends and family as
              you purchase game time by the hour per group!

              We offer a number of hourly rates to fit you and your friends –
              Check them out!
            </p>
          </div>

          {/* Right Box */}
          <div className="flex-1 bg-black/20 text-white rounded-md p-6 space-y-6">
            <div className="mt-4 md:mt-8 w-full">
              <div className="border-t-2 border-white divide-y-2 divide-white">
                {drawers.map((d, i) => (
                  <div key={i}>
                    <button
                      className="w-full h-12 flex items-center justify-between text-white font-poppins font-semibold px-4"
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    >
                      <span>{d.label}</span>
                      <FaChevronDown
                        className={`transform transition-transform ${
                          openIndex === i ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openIndex === i && (
                      <div className="py-4 text-white font-montserrat font-medium px-4 md:px-8 whitespace-pre-line">
                        <p>{d.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TitleBoxnoImg 