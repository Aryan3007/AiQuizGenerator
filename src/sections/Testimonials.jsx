/* eslint-disable react/no-unescaped-entities */


const Testimonials = () => {
  return (
  <div>
  <div className="">
    <section className="max-w-8xl mx-auto w-full lg:px-32 px-10 py-10">
      <div className="flex items-center justify-center flex-col gap-y-2 py-5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md mx-auto text-center text-black">Here's what our
          <span className="text-[#415ec9]"> customers</span> have to say
        </h2>
        <p className="text-lg font-medium text-slate-500">Discover how our service can benefit you</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
        <div className="border p-7 rounded-xl drop-shadow-md  col-span-2 flex flex-col gap-y-10 justify-between">
          <div className="flex flex-col gap-y-3.5">
            <p className="font-bold text-xl text-purple-400">Efficient customer support</p>
            <p className="font-medium text-black">The customer support team at our service is incredibly responsive and
              helpful. They went above and beyond to assist me with my issue.</p>
          </div>
          <div className="flex flex-col"><img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Emily Smith" className="h-10 w-10" />
            <p className="pt-2 text-sm font-semibold text-black">Emily Smith</p>
            <p className="text-sm font-medium text-slate-800">Marketing Manager at ABC Company</p>
          </div>
        </div>
        <div className="border p-7 rounded-xl drop-shadow-md  col-span-3 flex flex-col gap-y-10 justify-between">
          <div className="flex flex-col gap-y-3.5">
            <p className="font-bold text-xl text-orange-400">Excellent product features</p>
            <p className="font-medium text-black">The features offered by our service are outstanding. They have greatly
              improved our workflow and efficiency.</p>
          </div>
          <div className="flex flex-col"><img src="https://randomuser.me/api/portraits/men/34.jpg" alt="Michael Johnson" className="h-10 w-10" />
            <p className="pt-2 text-sm font-semibold text-black">Michael Johnson</p>
            <p className="text-sm font-medium text-slate-800">CEO at XYZ Corporation</p>
          </div>
        </div>
        <div className="border p-7 rounded-xl drop-shadow-md  col-span-3 flex flex-col gap-y-10 justify-between">
          <div className="flex flex-col gap-y-3.5">
            <p className="font-bold text-xl text-green-400">Seamless integration process</p>
            <p className="font-medium text-black">Integrating our systems with our service was smooth and hassle-free. The
              support team guided us through every step of the process.</p>
          </div>
          <div className="flex flex-col"><img src="https://randomuser.me/api/portraits/women/71.jpg" alt="Sarah Brown" className="h-10 w-10" />
            <p className="pt-2 text-sm font-semibold text-black">Sarah Brown</p>
            <p className="text-sm font-medium text-slate-800">CTO at XYZ Corporation</p>
          </div>
        </div>
        <div className="border p-7 rounded-xl drop-shadow-md  col-span-2 flex flex-col gap-y-10 justify-between">
          <div className="flex flex-col gap-y-3.5">
            <p className="font-bold text-xl text-pink-400">Reliable service uptime</p>
            <p className="font-medium text-black">Our service has consistently maintained high uptime, ensuring that our
              operations run smoothly without any disruptions.</p>
          </div>
          <div className="flex flex-col"><img src="https://randomuser.me/api/portraits/men/71.jpg" alt="James White" className="h-10 w-10" />
            <p className="pt-2 text-sm font-semibold text-black">James White</p>
            <p className="text-sm font-medium text-slate-800">COO at XYZ Corporation</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

  )
}

export default Testimonials
