import TestimonialMarquee from "../components/TestimonialMarquee"; 

const Professionals = () => {
  const testimonials = [
    {
      image: "/J-2.png",
      text: "Jonathan's training session on cybersecurity was transformative for our team. He has a unique ability to break down complex concepts into actionable steps, leaving us more confident in protecting our systems and data. His passion for digital literacy is truly inspiring.",
      name: "Abdul",
      role: "",
    },
    {
      image: "/J-2.png",
      text: "Jonathan provided exceptional guidance during our cybersecurity assessment. His detailed recommendations not only improved our security posture but also boosted our clients’ trust in our services. He’s a trusted partner",
      name: "Ugbem J., CTO",
      role: "CTO",
    },
    {
      image: "/J-2.png",
      text: "Jonathan’s Chevening coaching program is a must for anyone aiming for the scholarship. His deep understanding of the application process, coupled with his tailored feedback, made my application stand out. I owe my success to his support.",
      name: "Oluwatoyin I.",
      role: " Chevening Scholar",
    },
    {
      image: "/J-2.png",
      text: "Jonathan’s session on cybersecurity awareness was eye-opening for our team. He communicated complex topics with clarity and provided actionable steps that immediately improved our practices.",
      name: "Jennifer A.",
      role: "",
    },
    {
      image: "/J-2.png",
      text: "Jonathan was instrumental in designing and deploying our cloud security infrastructure. His attention to detail and ability to customize solutions for our business needs was outstanding. We feel much more secure thanks to his expertise.",
      name: "A.A",
      role: "",
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