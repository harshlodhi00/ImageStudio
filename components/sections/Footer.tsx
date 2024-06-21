import Github from "../icons/Github";
import Twitter from "../icons/Twitter";

export default function Footer() {
  return (
    <footer className="container mx-auto my-5 flex h-16 flex-row items-center justify-center space-y-3 border-t px-3 pt-4 text-center sm:h-20 sm:flex-row sm:pt-2 md:text-lg">
      <div>
        &copy; {new Date().getFullYear()} - Made with ❤️ by{" "}
        <a
          className=" dark:text-blue-300 leading-6 underline hover:text-blue-400 duration-100 text-blue-600 "
          target="_blank"
          href="https://harshlodhi.netlify.app/"
        >
          Harsh Lodhi
        </a>
      </div>
    </footer>
  );
}
