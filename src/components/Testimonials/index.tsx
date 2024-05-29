import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Luke K.",
    designation: "Freelance Photographer",
    content:
      "Using this personalized software has significantly improved my workflow and efficiency. It's amazing how a tool tailored to my needs can make such a big difference. Plus, their team is always there when I need support—day or night!",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Marco G.",
    designation: "Marketing Director",
    content:
      "The quality of leads provided has been outstanding. We've seen a significant increase in conversion rates since we started using their services. The team really understands our target market and continuously delivers leads that are right on target.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Jose R.",
    designation: "Real Estate Agent",
    content:
      "Their lead generation service has filled my pipeline with high-quality prospects, saving me time and allowing me to focus on closing deals. Their support team is always accessible and ready to assist with any questions I have.",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Clients Say"
          paragraph="Words of appreciation from our trusted clients."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap gap-y-8 lg:mt-20">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
