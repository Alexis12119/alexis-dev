import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <main className="flex-1">
      <Container>
        <div className="py-32 md:py-40 max-w-xl">
          <p className="text-sm font-medium text-[#6B7280] mb-6">404</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Page not found
          </h1>
          <p className="text-lg text-[#6B7280] mb-10 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-[#111111] hover:bg-[#333333] transition-colors"
          >
            Back to home
          </Link>
        </div>
      </Container>
    </main>
  );
}
