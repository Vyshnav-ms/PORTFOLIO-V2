const Exp_prop = (props) => {
  return (
    <>
      <div
        className="rounded-3xl bg-white dark:bg-transparent w-full max-w-4xl h-[250px] max-sm:h-[220px] p-8 flex items-center gap-8
    shadow-[0_0_15px_3px_rgba(59,130,246,0.6)] dark:shadow-[0_0_15px_3px_rgba(14,165,233,0.8)]
    hover:bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C]
    transition-shadow duration-300 ease-in-out
  "
      >


        {/* Image container */}
        <div className="flex-shrink-0 max-w-[120px]">
          <img src={props.img} alt="" className="w-full h-auto object-contain" />
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-center max-w-[600px]">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-3xl tracking-wide font-semibold">
            {props.title}
          </h1>
          <p className="text-[#00040f] dark:text-white text-xl my-2">
            {props.subtitle}
          </p>
          <p className="italic text-sm text-slate-700 dark:text-slate-300">
            {props.date}
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 mt-4 leading-7 max-w-[600px]">
            {props.para}
          </p>
        </div>
      </div>
    </>
  );
};
export default Exp_prop;
