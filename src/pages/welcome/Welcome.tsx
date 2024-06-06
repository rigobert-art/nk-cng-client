export default () => {
  return (
    <div className=" bg-green-600 mx-auto h-screen ">
      <header>
        <nav className="items-center pt-2 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
          <a href="javascript:void(0)">
            <img
              src={require("../../assets/logo.png")}
              width={120}
              height={50}
              alt="Float UI logo"
            />
          </a>
          
        </nav>
      </header>
      <section className="mt-12 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div className="flex-1 text-center mt-7 lg:mt-0 mb-8 lg:ml-3">
          <img src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png" className="w-full mx-auto sm:w-10/12  lg:w-full" />
        </div>
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="dark:text-white font-bold text-4xl xl:text-5xl">
            One page Template for
            <span className="text-green-400"> Digital agency</span>
          </h1>
          <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <a href="#" className="px-7 py-3 w-full dark:bg-white bg-green-600 text-white dark:text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
              Apply for a Loan
            </a>
            <a href="/login" className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto">
              Login to your account
            </a>
          </div>
        </div>
       
      </section>
    </div>
  )
}
