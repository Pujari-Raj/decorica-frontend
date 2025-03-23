import { ArrowRightIcon } from "../../Icons/Icons";

export const BlogCard = ({ title, description, image }) => (
    <article className="flex flex-col shadow my-4 rounded-md">
      <a href="#" className="hover:opacity-75">
        <img className="w-full" src={image} alt={title} />
      </a>
      <div className="bg-white flex flex-col justify-start p-6">
        <p className="text-xl font-semibold pb-4 font-MontMedium">{title}</p>
        <p className="pb-6 font-MontMedium">{description}</p>
        <a
          href="#"
          className="group flex items-center justify-center gap-1 bg-[#755b5c] text-white font-medium 
                   text-sm uppercase font-MontMedium rounded focus:outline-none border-2 border-transparent
                   hover:bg-transparent hover:border-[#4d4747] hover:text-[#4d4747] transition-all duration-500 
                   cursor-pointer px-2 py-3 mt-4"
        >
          Continue Reading
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRightIcon />
          </span>
        </a>
      </div>
    </article>
  );
  