import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello Next</h1>
      <Link href="/user">Users</Link>
      <ProductCard />
    </main>
  );
}
