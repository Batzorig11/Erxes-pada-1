import Link from "next/link";

export default function Header() {
  return (
    <div className="flex-col gap-4 mr-10">
      <div>
        <Link href={"/"}>Home</Link>
      </div>
      <div>
        <Link href={"/about"}>About</Link>
      </div>
      <div>
        <Link href={"/work"}>Work</Link>
      </div>
      <div>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div>
        <Link href={"/resume"}>Resume</Link>
      </div>
    </div>
  );
}
