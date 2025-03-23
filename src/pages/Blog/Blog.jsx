import React from "react";
import { BlogCard } from "./BlogCard";

const blogPosts = [
  {
    id: 1,
    title: "Best balcony decoration ideas that will transform your outside space",
    description:
      "Do you feel like a boy in front of a candy store whenever you look at someone tending to their immaculate home garden full of hibiscus and petunias while the .....",
    image:
      "https://images.unsplash.com/photo-1621045081424-97aa08903f76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbGNvbnl8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 2,
    title: "Traditional Decor Ideas for your Living Room",
    description:
      "European styles and conventional notions of what a home looks like. Timeless and placeless, comfortable and put together without being stuffy, traditional living rooms.......",
    image:
      "https://images.unsplash.com/photo-1621045081424-97aa08903f76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbGNvbnl8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 3,
    title: "Best lighting solution for your home to light up your room decor",
    description:
      "To uplight a room, you can rely on the three types oflighting - ambient lighting, accent lighting and task lighting. Ambient lighting provides overall illumination.......",
    image:
      "https://images.unsplash.com/photo-1621045081424-97aa08903f76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbGNvbnl8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 4,
    title: "Best lighting solution for your home to light up your room decor",
    description:
      "To uplight a room, you can rely on the three types oflighting - ambient lighting, accent lighting and task lighting. Ambient lighting provides overall illumination.......",
    image:
      "https://images.unsplash.com/photo-1621045081424-97aa08903f76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbGNvbnl8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60",
  }
];

// const blogPosts = [
//   {
//     id: 1,
//     title: "Timeless Indian Traditional Decor for Your Home",
//     description:
//       "Explore the charm of Indian heritage with wooden furniture, brass artifacts, and handwoven textiles that bring a touch of nostalgia to your home.",
//     image:
//       "https://images.unsplash.com/photo-1624692373835-128ff7c3b44b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     id: 2,
//     title: "Royal Rajasthani Decor: Bring the Grandeur of Palaces Home",
//     description:
//       "Infuse your interiors with Rajasthani aesthetics using vibrant colors, mirror work, and carved wooden furniture inspired by the royal heritage.",
//     image:
//       "https://images.unsplash.com/photo-1556093525-c6c2df86a367?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     id: 3,
//     title: "South Indian Temple Decor: Embracing Spiritual Elegance",
//     description:
//       "Transform your space with brass lamps, Tanjore paintings, and intricately carved pillars for a serene, temple-inspired look.",
//     image:
//       "https://images.unsplash.com/photo-1600109866325-8a5fdb6b3869?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     id: 4,
//     title: "Mughal-Inspired Interiors: A Blend of Luxury and History",
//     description:
//       "Revamp your home with Mughal-style jharokhas, intricate jaali patterns, and rich Persian carpets for a majestic Indo-Islamic aesthetic.",
//     image:
//       "https://images.unsplash.com/photo-1530904861896-a6d440c36c8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     id: 5,
//     title: "The Art of Warli & Madhubani: Hand-Painted Walls for an Ethnic Touch",
//     description:
//       "Bring the beauty of Indian folk art into your home with Warli, Madhubani, and Pattachitra murals that tell timeless stories through intricate patterns.",
//     image:
//       "https://images.unsplash.com/photo-1542241647-25aa7d74dbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     id: 6,
//     title: "Vastu Shastra: Ancient Indian Design Principles for a Harmonious Home",
//     description:
//       "Discover how traditional Indian architectural wisdom, based on Vastu Shastra, can enhance positivity and balance in your home layout.",
//     image:
//       "https://images.unsplash.com/photo-1594656819995-1d8574d98159?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
//   }
// ];


const Blog = () => {
  return (
    <>
      <div className="flex flex-col items-center py-12">
        <p className="font-semibold text-gray-800 capitalize hover:text-gray-700 text-[2.65rem]">
          {/* Blog Posts */}
        </p>
        <p className="font-MontSemiBold font-semibold text-[2rem] text-gray-600">
          The Decorica Journal
        </p>
      </div>
      {/* container */}
      <div className="">
        <div className="m-8">
          {/* <section className="w-full md:w-2/3 flex flex-col items-center px-3"> */}
          <div className="grid grid-cols-2 mt-4 gap-6 w-[70%]">
            {blogPosts.map((key, index)=> (
              <BlogCard title={key?.title} description={key.description} image={key.image} key={index} />
            ))}
          </div>
          {/* </section> */}
        </div>
      </div>
    </>
  );
};

export default Blog;
