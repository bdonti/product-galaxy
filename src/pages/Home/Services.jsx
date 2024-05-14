import { FaCodeCompare } from "react-icons/fa6";
import { MdOutlinePreview } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";

const Services = () => {
  return (
    <div>
      <h1 className="font-bold text-center text-3xl my-4">Services</h1>
      <section className="m-4 md:m-8 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-4">
            <FaCodeCompare className="w-8 h-8 text-violet-400 dark:text-violet-600" />
            <h3 className="my-3 text-3xl font-semibold">Comparison</h3>
            <div className="space-y-1 leading-tight">
              <p className="w-[300px] mx-auto text-center">
                You can compare products recommended by our user.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <MdOutlinePreview className="w-8 h-8 text-violet-400 dark:text-violet-600" />
            <h3 className="my-3 text-3xl font-semibold">Review</h3>
            <div className="space-y-1 leading-tight">
              <p className="w-[300px] mx-auto text-center">
                Different user can review your chosen product and brand in turn
                you can decide at will.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <GrUserExpert className="w-8 h-8 text-violet-400 dark:text-violet-600" />
            <h3 className="my-3 text-3xl font-semibold">Experts</h3>
            <div className="space-y-1 leading-tight">
              <p className="w-[300px] mx-auto text-center">
                You can also get recommendation from various people who are old
                users. They can give you best suggestions for choosing alternate
                product.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
