import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center dark:bg-slate-800 bg-[#1f1818] text-slate-300 ">
        <div className="p-10 flex flex-col dark:bg-slate-800 bg-[#1f1818] text-slate-300 space-y-4">
          <h1 className="text-5xl font-bold">
            Welcome to DropBox.
            <br />
            <br />
            Storing everything for you and your buisness needs.All in one place
          </h1>
          <p className="pb-20">
            Enhance your persona with Dropbox – offering a simple and efficient
            way to upload, organize, and access files from anywhere. Securely
            store important documents and emails, and experience the convenience
            of easy file management and sharing in one centralized solution.
          </p>
          <Link href={"/dashboard"} className="flex bg-blue-600 hover:bg-blue-800 p-5 w-fit max-w-lg rounded-sm hover:bg-blue">Try it for free!
            <ArrowRight className="ml-3"/>
          </Link>
        </div>
        <div className="dark:bg-slate-800 bg-[#1f1818] h-full p-5">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-centre font-light p-2 ">
        This site is an educational project and a Dropbox-inspired clone. It is
        created for learning purposes only and is not affiliated with Dropbox or
        its subsidiaries. The term "clone" denotes a replica for educational
        use. Users are advised to utilize the official Dropbox service for
        practical needs. The creator disclaims responsibility for any misuse
        outside the educational context.
      </p>
    </main>
  );
}
