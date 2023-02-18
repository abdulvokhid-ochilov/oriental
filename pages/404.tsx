import Link from "next/link";

export default function Custom404() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-white">
      <h1 className="text-9xl font-extrabold text-midnight tracking-widest">
        404
      </h1>
      <div className="bg-primary px-2 text-sm rounded rotate-12 absolute text-white">
        Oops, there is an error or Page Not Found!
      </div>
      <button className="mt-5">
        <Link
          href="/"
          className="relative inline-block text-sm font-medium text-midnight group active:text-primary-400 focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-primary group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-white border border-current">
            Go Home
          </span>
        </Link>
      </button>
    </div>
  );
}
