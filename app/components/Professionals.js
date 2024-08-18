import TestimonialMarquee from "../components/TestimonialMarquee"; 

const Professionals = () => {
  const testimonials = [
    {
      image: "/jon-profile.jpg",
      text: "This is an amazing service!",
      name: "Mimi Okon",
      role: "CEO of Company A",
    },
    {
      image: "/jon-profile.jpg",
      text: "Highly recommended!",
      name: "Mich Buchi",
      role: "CTO of Company B",
    },
  ];

  return (
    <div className=" pt-72 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-32 text-white">Testimonials</h1>
      <TestimonialMarquee testimonials={testimonials} />
    </div>
  );
};

export default Professionals;
