import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <div className="max-w-xl mt-20">
      <h2 className="flex items-center text-4xl font-extrabold text-rose-500 sm:text-5xl sm:tracking-tight lg:text-6xl">
        HTML
        <ArrowRightIcon className="w-4 sm:w-6 mx-2 sm:mx-4 inline-block" />
        Markdown
      </h2>
      <p className="mt-5 text-xl text-gray-400">
        Free online converter from HTML to plain Markdown.
      </p>
    </div>
  );
}
