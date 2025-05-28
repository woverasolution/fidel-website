import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="w-full py-10 bg-gradient-to-r from-green-50 mb-10 via-green-100 to-emerald-50 max-w-7xl mx-auto rounded-lg">
      <div className="container px-8 md:px-12 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-center">
        <div className="flex flex-col gap-4 items-start justify-center text-left"> 
          <h2 className="text-3xl md:text-4xl font-semibold text-green-900  tracking-tight">
            Ready to simplify your school management?
          </h2>
          <p className="text-green-700 font-light max-w-xl">
            Start your journey with Fidel and experience seamless administration
            for Ethiopian schools.
          </p>
        </div>
        <Link
          href="/demo"
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "rounded-full"
          )}
        >
          Request a Demo
        </Link>
      </div>
    </section>
  );
}
