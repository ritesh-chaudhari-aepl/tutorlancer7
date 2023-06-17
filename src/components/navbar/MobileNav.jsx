import { nav } from "../../data/nav";

function MobileNav() {
  return (
    <div className="w-full h-full bg-violet-light">
      <ul className="h-full flex flex-col justify-center no-underline items-center gap-y-8">
        {nav.map((item) => {
          // destructure item
          const { href, name } = item;
          return (
            <li className="no-underline" key={name}>
              <a className="link text-white-white text-xl" href={href}>
                {name}
              </a>
            </li>
          );
        })}
        <div className="item-center justify-center gap-8 flex flex-col lg:hidden">
          <a
            href="#"
            className="inline-block rounded-lg bg-transparent px-8 py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
          >
            Sign In
          </a>
          <a
            href="#"
            className="inline-block rounded-lg bg-gradient-to-r from-yellow-home7 from-10% via-orange-home7 via-50% to-orange-home7 to-100% px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
          >
            Sign Up
          </a>
        </div>
      </ul>
    </div>
  );
}

export default MobileNav;
