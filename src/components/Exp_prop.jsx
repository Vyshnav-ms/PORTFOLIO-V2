const Exp_prop = (props) => {
  return (
    <>
      <div
        className="rounded-3xl bg-white dark:bg-transparent w-full max-w-4xl 
        h-auto max-sm:h-auto p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 
        shadow-[0_0_15px_3px_rgba(59,130,246,0.6)] dark:shadow-[0_0_15px_3px_rgba(14,165,233,0.8)]
        hover:bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C]
        transition-shadow duration-300 ease-in-out"
      >
        {/* Image container */}
        <div className="flex-shrink-0 w-24 sm:w-28 md:w-32">
          <img src={props.img} alt="" className="w-full h-auto object-contain" />
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-center w-full max-w-full">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-2xl sm:text-3xl font-semibold tracking-wide">
            {props.title}
          </h1>
          <p className="text-[#00040f] dark:text-white text-base sm:text-lg mt-1">
            {props.subtitle}
          </p>
          <p className="italic text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1">
            {props.date}
          </p>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mt-4 leading-6 sm:leading-7">
            {props.para}
          </p>
        </div>
      </div>
    </>
  );
};

export default Exp_prop;
