const Pricing = () => {
  return (
    <div id="pricing" className=" lg:py-24 p-4 lg:px-48 text-black">
      <h1 className="text-5xl py-3 font-bold text-center">Pricing</h1>
      <p className="text-lg text-center">
        Use it for free for yourself, upgrade when your team needs advanced
        control.
      </p>
      <div className="">
        <div className="container text-white px-6 py-8 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
            <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-gradient-to-br  from-violet-500 to-indigo-500   rounded-2xl lg:mx-4 ">
              <div className="flex-shrink-0">
                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight  uppercase rounded-lg ">
                  Casual
                </h2>
              </div>
              <div className="flex-shrink-0">
                <span className="pt-2 text-3xl font-bold uppercase ">Free</span>
              </div>
              <hr />
              <ul className="flex-1 space-y-4">
                <li className="">Up to 5 projects</li>
                <li className="">Up to 10 collaborators</li>
                <li className="">2Gb of storage</li>
              </ul>
              <button className="inline-flex items-center justify-center px-4 py-2 font-medium text-black uppercase transition-colors bg-white rounded-lg hover:scale-95 duration-500 focus:outline-none">
                Start free trial
              </button>
            </div>
            <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-gradient-to-br from-green-500 to-emerald-500  -gray-500 rounded-2xl lg:mx-4 ">
              <div className="flex-shrink-0">
                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight  uppercase rounded-lg  ">
                  Professional
                </h2>
              </div>
              <div className="flex-shrink-0">
                <span className="pt-2 text-3xl font-bold uppercase ">
                  $24.90
                </span>
                <span className="">/month</span>
              </div>
              <hr />
              <ul className="flex-1 space-y-4">
                <li className="">Up to 10 projects</li>
                <li className="">Up to 20 collaborators</li>
                <li className="">10Gb of storage</li>
                <li className="">Real-time collaborations</li>
              </ul>
              <button className="inline-flex items-center justify-center px-4 py-2 font-medium text-black uppercase transition-colors bg-white rounded-lg hover:scale-95 duration-500 focus:outline-none">
                Start free trial
              </button>
            </div>
            <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-gradient-to-br from-amber-500 to-orange-500  -gray-500 rounded-2xl lg:mx-4  ">
              <div className="flex-shrink-0">
                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight  uppercase rounded-lg ">
                  Expert
                </h2>
              </div>
              <div className="flex-shrink-0">
                <span className="pt-2 text-3xl font-bold uppercase">
                  $49.90
                </span>
                <span className="">/month</span>
              </div>
              <hr />
              <ul className="flex-1 space-y-4">
                <li className="">Unlimited projects</li>
                <li className="">Unlimited collaborators</li>
                <li className="">Unlimited storage</li>
                <li className="">Real-time collaborations</li>
                <li className="">24x7 Support</li>
              </ul>
              <button className="inline-flex items-center justify-center px-4 py-2 font-medium text-black uppercase transition-colors bg-white rounded-lg hover:scale-95 duration-500 focus:outline-none">
                Start free trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
