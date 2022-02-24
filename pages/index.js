import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Advice Generator App</title>
        <meta name="description" content="Advice Generator app using next js" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>

      <main>
        <div className="bg-grayishBlue relative text-center rounded-xl md:w-[500px] w-[95%] h-auto p-7 mt-40 mx-auto">
          <h4 className="uppercase text-neonGreen tracking-widest font-bold">
            advice #117
          </h4>
          <div className="text-2xl text-white font-bold py-7 mb-10 relative">
            <h2>"it is better to do the shit you want to do"</h2>
            <svg
              width="444"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#fff" fill-rule="evenodd">
                <path fill="#4E5D73" d="M0 8h196v1H0zM248 8h196v1H248z" />
                <g transform="translate(212)" fill="#CEE3E9">
                  <rect width="6" height="16" rx="3" />
                  <rect x="14" width="6" height="16" rx="3" />
                </g>
              </g>
            </svg>
          </div>
          <div className="rounded-full bg-neonGreen flex justify-center items-center absolute left-1/2 shadow-white bright -translate-x-1/2 h-14 w-14">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                fill="#202733"
              />
            </svg>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
