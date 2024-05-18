import Image from "next/image";
import Head from "./head";
import Main from "./Main";
import {Footer} from "@/app/footer";

export default function Home() {
  return (
      <div>

          <Head/>
          <Main/>
          <Footer/>
      </div>
);
}
