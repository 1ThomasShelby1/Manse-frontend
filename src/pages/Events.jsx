import React from "react";
import { useGetAllEventsQuery } from "../redux/Events";

const Events = () => {
  const { data, isLoading, isError } = useGetAllEventsQuery();

  if (isLoading)
    return (
      <div className="flex justify-center py-10">
        <p className="text-lg text-orange-600 font-semibold animate-pulse">
          Loading events...
        </p>
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center py-10">
        <p className="text-lg text-red-500 font-semibold">
          Failed to load events ❌
        </p>
      </div>
    );

  return (
    <div className="bg-orange-50 min-h-screen p-6 md:p-10 space-y-14">

      {data?.events?.map((event) => (
        <div
          key={event._id}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300"
        >
          {/* LEFT SECTION — IMAGE */}
          <div>
            <img
              src={event.mainPhoto}
              alt="Main Event"
              className="w-full h-[450px] object-cover rounded-xl shadow-md"
            />
          </div>

          {/* RIGHT SECTION — DETAILS */}
          <div className="flex flex-col justify-center pr-4">

            {/* Title */}
            <h2 className="text-4xl font-bold text-orange-800 mb-3 leading-snug">
              {event.title}
            </h2>

            {/* Date + Location */}
            <div className="flex justify-between items-center mt-2 text-gray-700 text-[15px] font-medium">
              <p className="flex items-center gap-2">
                📅 <span className="font-semibold">{event.date}</span>
              </p>

              <p className="flex items-center gap-2">
                📍 <span className="font-semibold">{event.location}</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-700 mt-5 leading-relaxed text-[15px] line-clamp-4">
              {event.description}
            </p>

            {/* Gallery (Small preview of event photos) */}
            {event.eventPhotos?.length > 0 && (
              <div className="mt-6">
                <p className="text-sm text-gray-600 font-semibold mb-3">
                  📸 कार्यक्रमाचे क्षण :
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {event.eventPhotos.slice(0, 3).map((photo, idx) => (
                    <img
                      key={idx}
                      src={photo}
                      alt="Event"
                      className="h-28 w-full object-cover rounded-lg border shadow-sm"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Read More Button */}
            <div className="mt-6">
              <button className="px-6 py-2 bg-orange-700 text-white rounded-lg shadow hover:bg-orange-800 transition-all duration-200">
                Read More →
              </button>
            </div>

            {/* Created At */}
            <p className="text-xs text-gray-400 mt-4">
              Added on: {new Date(event.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
