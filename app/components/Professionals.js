import TestimonialMarquee from "../components/TestimonialMarquee"; 
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "testimonial"] 
{
  name,
  "image": image.asset->url,
  text,
  role,
}
`
const data = await client.fetch(query);
return data;
}

export const revalidate = 60;

const Professionals = () => {
  // const testimonials = [
  //   {
  //     image: "/J-2.png",
  //     text: "When it comes to cybersecurity analysis and cyber testing, Jonathan truly knows his onions! I've known him for more than 6 years now and I can say he is the real deal.  His investment ideas and strategies are pragmatic and current. If you want get rich quick schemes, he is not your guy but if you want to build long lasting generational wealth, listen to him.",
  //     name: "Mimi Okon",
  //     role: "CEO of Company A",
  //   },
  //   {
  //     image: "/J-2.png",
  //     text: "When it comes to  cybersecurity analysis and cyber testing, Jonathan truly knows his onions! I've known him for more than 6 years now and I can say he is the real deal.  His investment ideas and strategies are pragmatic and current. If you want get rich quick schemes, he is not your guy but if you want to build long lasting generational wealth, listen to him.",
  //     name: "Mich Buchi",
  //     role: "CTO of Company B",
  //   },
  // ];

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await getData();
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  

  return (
    <div className="snap-start pt-72 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-32 text-white">Testimonials</h1>
      <TestimonialMarquee testimonials={testimonials} />
    </div>
  );
};

export default Professionals;
