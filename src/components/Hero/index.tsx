import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="background-section relative z-10 overflow-hidden  bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="relative -mx-4 flex flex-wrap justify-center ">
            <div className="absolute z-0 h-full w-2/3 rounded-lg opacity-40 bg-red-50 p-4 px-4"></div>
            <div className="w-2/3 rounded-lg p-4 px-4 z-10">
              <div className="mx-auto max-w-[800px] text-center z-2">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-4xl md:leading-tight">
                  SE PROCURA UMA ATIVIDADE RENTÁVEL <br />
                  Get Your Biz
                  <br /> Encontra o negócio ideal para ti!
                </h1>
                <h2 className="mb-12 text-base !leading-relaxed text-black dark:text-body-color-dark sm:text-lg md:text-xl">
                  Pretende ter um rendimento extra sem ivestimento?
                  <br />
                  Pretende ter o proprio negocio?
                  <br />
                  Pretende ter independecia financeira?
                </h2>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Mais informaçoes
                  </Link>
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="inline-block rounded-full bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Começar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100"></div>
      </section>
    </>
  );
};

export default Hero;
