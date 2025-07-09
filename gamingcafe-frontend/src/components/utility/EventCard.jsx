const EventCard = ({ event }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 event-card">
      <div
        className="relative h-56 sm:h-64 md:h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      <div className="p-4 flex flex-col flex-grow font-montserrat">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
          {event.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-300 mb-1 font-semibold">
          {event.subtitle}
        </p>
        <p className="text-sm text-gray-400 mb-3 flex-grow">
          {event.description}
        </p>

        <ul className="text-sm text-gray-200 mb-4 space-y-1">
          <li><span className="font-semibold">Prize:</span> {event.prize}</li>
          <li><span className="font-semibold">Entry:</span> {event.entry}</li>
          <li><span className="font-semibold">Pool:</span> {event.pool}</li>
          <li><span className="font-semibold">Cap:</span> {event.cap}</li>
        </ul>

        <a
          href={event.link}
          className="inline-block text-blue-400 hover:text-blue-300 font-bold text-sm transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          For more information and team registration click HERE!
        </a>
      </div>
    </div>
  );
};

export default EventCard;