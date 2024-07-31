import { Link } from "react-router-dom";

const Domains = () => {
  return (
    <div>
      <div className="grid pb-12 max-w-7xl mx-auto grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <Link to={"/generateQuiz"} className="rounded-xl border border-zinc-300 shadow-2xl flex justify-center items-center flex-col text-center gap-4 bg-slate-100  hover:scale-95 duration-300  h-80 p-4 ">
          <h1 className="text-4xl font-bold">AI Quiz Generator</h1>
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            perferendis consectetur, dignissimos corrupti aspernatur dolorem
            ratione quam sequi, necessitatibus doloremque rem labore, ipsa ex
            iure delectus reiciendis consequatur maxime fugiat?
          </p>
        </Link>
        <Link to={"/generateQuestion"} className="rounded-xl border border-zinc-300 shadow-2xl flex justify-center items-center flex-col text-center gap-4 bg-slate-100  hover:scale-95 duration-300  h-80 p-4 ">
          <h1 className="text-4xl font-bold">AI Question Paper Generator</h1>
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            perferendis consectetur, dignissimos corrupti aspernatur dolorem
            ratione quam sequi, necessitatibus doloremque rem labore, ipsa ex
            iure delectus reiciendis consequatur maxime fugiat?
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Domains;
