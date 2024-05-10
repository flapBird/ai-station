import Image from "next/image";
import head from "./head"
import Head from "./head";

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <section className="py-16 md:py-24 overflow-x-clip bg-white">
          <div className="max-w-screen-xl w-full mx-auto px-6 lg:px-16">
            <div className="w-full">
              <div>
                <h1 className="text-4xl md:text-5xl font-medium mb-4 text-zinc-900">
                  It's a best AI Tools
                </h1>
                <h2 className="text-4xl md:text-5xl font-medium mb-4 text-zinc-900">
                  Discover the top AI tools of 2024 with the Woy.ai AI Directory!
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 md:mb-20">
              <div
                  className="p-4 bg-zinc-100 flex md:flex-col rounded-xl gap-4 hover:bg-zinc-200 items-center md:items-start">
                <div className="w-32 md:w-full aspect-square relative"><img alt="Open-source Advantage" loading="lazy"
                                                                            decoding="async" data-nimg="fill"
                                                                            className="object-cover object-center rounded-lg"
                                                                            style= {{ position:"absolute", height: "100%", width:"100%", left:0,top:0,right:0,bottom:0,color:"transparent" }}
                                                                            sizes="100vw"
                                                                            srcSet="/fixrelationship.png"
                                                                            src="/fixrelationship.png"/>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl leading-none mb-2 font-bold text-zinc-800 whitespace-break-spaces line-clamp-1">Fix-Rel</h3>
                  <p className="text-base text-zinc-500 line-clamp-2">AI-crafted advice for resolving relationship conflicts, providing tailored responses to elevate your interactions and foster a harmonious life .</p>
                  <div className="mt-4">
                    <a className="text-base font-medium text-blue-500" target="_blank" href="https://fixrelationship.online/">Learn more</a>
                  </div>
                </div>
              </div>

              <div
                  className="p-4 bg-zinc-100 flex md:flex-col rounded-xl gap-4 hover:bg-zinc-200 items-center md:items-start">
                <div className="w-32 md:w-full aspect-square relative"><img alt="Responsive Design" loading="lazy"
                                                                            decoding="async" data-nimg="fill"
                                                                            className="object-cover object-center rounded-lg"
                                                                            style= {{ position:"absolute", height:100, width:100, left:0,top:0,right:0,bottom:0,color:"transparent" }}
                                                                            sizes="100vw"
                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.aa65b0d3.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.aa65b0d3.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.aa65b0d3.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.aa65b0d3.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.aa65b0d3.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.aa65b0d3.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.aa65b0d3.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.aa65b0d3.jpg&amp;w=3840&amp;q=75 3840w"
                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.aa65b0d3.jpg&amp;w=3840&amp;q=75"/>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl leading-none mb-2 font-bold text-zinc-800 whitespace-break-spaces line-clamp-1">Responsive
                    Design</h3>
                  <p className="text-base text-zinc-500 line-clamp-2">Templates meticulously designed to ensure optimal
                    display on any device.</p>
                  <div className="mt-4"><a className="text-base font-medium text-blue-500" href="https://fixrelationship.online/">Learn more</a></div>
                </div>
              </div>
              <div
                  className="p-4 bg-zinc-100 flex md:flex-col rounded-xl gap-4 hover:bg-zinc-200 items-center md:items-start">
                <div className="w-32 md:w-full aspect-square relative"><img alt="SEO Optimized" loading="lazy"
                                                                            decoding="async" data-nimg="fill"
                                                                            className="object-cover object-center rounded-lg"
                                                                            style= {{ position:"absolute", height:100, width:100, left:0,top:0,right:0,bottom:0,color:"transparent" }}
                                                                            sizes="100vw"
                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.9e92e6d7.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.9e92e6d7.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.9e92e6d7.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.9e92e6d7.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.9e92e6d7.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.9e92e6d7.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.9e92e6d7.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.9e92e6d7.jpg&amp;w=3840&amp;q=75 3840w"
                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.9e92e6d7.jpg&amp;w=3840&amp;q=75"/>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl leading-none mb-2 font-bold text-zinc-800 whitespace-break-spaces line-clamp-1">SEO
                    Optimized</h3>
                  <p className="text-base text-zinc-500 line-clamp-2">Templates built with search engine optimization in
                    mind to enhance your website's discoverability.</p>
                  <div className="mt-4"><a className="text-base font-medium text-blue-500" href="#">Learn more</a></div>
                </div>
              </div>
              <div
                  className="p-4 bg-zinc-100 flex md:flex-col rounded-xl gap-4 hover:bg-zinc-200 items-center md:items-start">
                <div className="w-32 md:w-full aspect-square relative"><img alt="SEO Optimized" loading="lazy"
                                                                            decoding="async" data-nimg="fill"
                                                                            className="object-cover object-center rounded-lg"
                                                                            style= {{ position:"absolute", height:100, width:100, left:0,top:0,right:0,bottom:0,color:"transparent" }}
                                                                            sizes="100vw"
                                                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.9e92e6d7.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.9e92e6d7.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.9e92e6d7.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.9e92e6d7.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.9e92e6d7.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.9e92e6d7.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.9e92e6d7.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.9e92e6d7.jpg&amp;w=3840&amp;q=75 3840w"
                                                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.9e92e6d7.jpg&amp;w=3840&amp;q=75"/>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl leading-none mb-2 font-bold text-zinc-800 whitespace-break-spaces line-clamp-1">SEO
                    Optimized</h3>
                  <p className="text-base text-zinc-500 line-clamp-2">Templates built with search engine optimization in
                    mind to enhance your website's discoverability.</p>
                  <div className="mt-4"><a className="text-base font-medium text-blue-500" href="#">Learn more</a></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </main>
  );
}
