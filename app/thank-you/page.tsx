import { Suspense } from "react";
import { ThankYouPage } from "@/components/pages/thank-you-page";
export const metadata = {
  title: "Thank You - Alexis Corporal",
  description: "Thank you for your message! I'll get back to you soon.",
};

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <ThankYouPage />
    </Suspense>
  );
}
