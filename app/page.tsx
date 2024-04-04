import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello Next</h1>
      <Link href="/user">Users</Link>
    </main>
  );
}
