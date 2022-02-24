import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
export const getServerSideProps = async () => {
  const resp = await axios.get("https://api.adviceslip.com/advice");
  return { props: { advice: resp.data } };
};

export default function Home({ advice }) {
  const [able, setAble] = useState(true);
  const [randomAdvice, setRandomAdvice] = useState({
    id: advice.slip.id,
    advice: advice.slip.advice,
  });

  const updateAdvice = async () => {
    const resp = await axios.get("https://api.adviceslip.com/advice");
    const { slip } = resp.data;
    setRandomAdvice({ id: slip.id, advice: slip.advice });
    setAble(false);
    setTimeout(() => {
      setAble(true);
    }, 2000);
  };
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
            advice #{randomAdvice.id}
          </h4>
          <div className="text-2xl text-white font-bold py-7  border-b-2 mb-10 relative">
            <h2>{`"${randomAdvice.advice}"`}</h2>
          </div>
          <div
            className={
              "rounded-full bg-neonGreen flex justify-center cursor-pointer items-center absolute left-1/2 shadow-white bright -translate-x-1/2 h-14 w-14 "
            }
            onClick={updateAdvice}
          >
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
