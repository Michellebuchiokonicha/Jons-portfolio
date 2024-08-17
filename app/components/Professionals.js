import TestimonialMarquee from "../components/TestimonialMarquee"; // Adjust the import path as necessary

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
    // Add more testimonials as needed
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Testimonials</h1>
      <TestimonialMarquee testimonials={testimonials} />
    </div>
  );
};

export default Professionals;
