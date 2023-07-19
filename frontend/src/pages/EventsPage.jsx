import React from "react";
import { Helmet } from "react-helmet-async"; // Import Helmet
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Helmet>
            <title>Events Page</title>
            <meta
              name="description"
              content="This is the events page description."
            />
            {/* Add other meta tags as needed */}
          </Helmet>
          <Header activeHeading={4} />
          <EventCard active={true} data={allEvents && allEvents[0]} />
        </div>
      )}
    </>
  );
};

export default EventsPage;
