import Image from "next/image";

export default function Head() {
  return (
      <header className="bg-white text-zinc-900">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center h-20">
          <div>
            <div className="select-none flex items-center">
              <div className="mr-2">
                <img alt="Tailsc Logo" loading="lazy" width="30" height="30" decoding="async" data-nimg="1"
                     // style="color:transparent" src="/logo.svg"
                />
                </div>
              <div className="text-xl __className_3ac6c1">Tailsc</div>
            </div>
          </div>
          <ul className="hidden md:flex flex-1 min-w-0 justify-center items-center gap-4">
            {/*<li><a className="text-zinc-500 font-normal data-[active=true]:text-blue-500 hover:text-blue-500" href="#" data-active="false">Home</a></li>*/}
          </ul>
          <div className="grow md:hidden"></div>
          <div className="flex items-center gap-2"><button className="text-center px-2 h-8 text-sm text-zinc-900 hover:text-blue-500 active:scale-95 transition-all">Sign in</button><button className="text-center px-6 h-8 rounded-md bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white text-sm active:scale-95 transition-all">Sign up</button></div>
        </div>
      </header>
  );
}
