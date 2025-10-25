import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-end text-[25px] p-3 gap-10 px-100 mb-10">
      <Link href={"/"}>
        <div>Home</div>
      </Link>
      <Link href={"/contact"}>
        <div>Contact</div>
      </Link>
      <Link href={"/about"}>
        <div>About</div>
      </Link>
    </div>
  );
}
