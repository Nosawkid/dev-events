import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";

const events = [
  {
    image: "/images/event1.png",
    title: "Event 1",
    slug: "event-1",
    location: "location 1",
    date: "date 1",
    time: "time 1",
  },
  {
    image: "/images/event2.png",
    title: "Event 2",
    slug: "event-2",
    location: "location 2",
    date: "date 2",
    time: "time 2",
  },
  {
    image: "/images/event3.png",
    title: "Event 3",
    slug: "event-3",
    location: "location 3",
    date: "date 3",
    time: "time 3",
  },
  {
    image: "/images/event4.png",
    title: "Event 4",
    slug: "event-4",
    location: "location 4",
    date: "date 4",
    time: "time 4",
  },
  {
    image: "/images/event5.png",
    title: "Event 5",
    slug: "event-5",
    location: "location 5",
    date: "date 5",
    time: "time 5",
  },
  {
    image: "/images/event6.png",
    title: "Event 6",
    slug: "event-6",
    location: "location 6",
    date: "date 6",
    time: "time 6",
  },
];

const Home = () => {
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event you can't Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups and Conferences, All in One Place
      </p>
      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured</h3>

        <ul className="events">
          {events.map((el, idx) => (
            <li key={el.title} style={{ listStyle: "none" }}>
              <EventCard {...el} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
