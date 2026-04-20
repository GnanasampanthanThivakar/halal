import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const blogs = [
  {
    title: 'Healthy Fast is Food a Myth or Reality? Heres the Truth',
    date: 'Mar 18, 2025',
    image: '/images/blog-1.jpg',
  },
  {
    title: 'In Fast Food Really Getting Healthier? What You Need Know',
    date: 'Mar 18, 2025',
    image: '/images/blog-2.jpg',
  },
  {
    title: 'Is Fast Food Getting Healthier? Here\'s What We\'re Doing',
    date: 'Mar 18, 2025',
    image: '/images/blog-3.jpg',
  },
];

const BlogSection: React.FC = () => {
  const ref = useScrollReveal<HTMLDivElement>({ children: true, stagger: 0.15, y: 40 });

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-[40px] uppercase">
            <span className="text-text-primary">Our Latest News &amp; </span>
            <span className="text-accent-red">Blogs</span>
          </h2>
        </div>

        {/* Blog Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="group cursor-pointer"
            >
              <div className="rounded-xl overflow-hidden mb-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-1">
                <div className="flex items-center gap-2 text-text-muted text-xs mb-2">
                  <Calendar size={12} />
                  <span>{blog.date}</span>
                </div>
                <h3 className="font-inter font-semibold text-lg text-text-primary mb-3 line-clamp-2 group-hover:text-primary-green transition-colors">
                  {blog.title}
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-accent-red font-medium text-sm group/link"
                >
                  Read More
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
