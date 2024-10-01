import Link from "next/link";

export default function AboutLayout({ children }) {
  return (
    <div className="mt-6 ">
      <nav>
        <ul>
        <li>
          {" "}
          <Link href="/mission">Mission</Link>
        </li>
    </ul>
      </nav>
      {children}
    </div>
  );
}
