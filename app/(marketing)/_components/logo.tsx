// image in nextjs to optimize it 
import Image from "next/image";
// special font
import { Poppins } from "next/font/google";
// merge classes of tailwind
import { cn } from "@/lib/utils";
const font = Poppins({
    subsets: ['latin'],
    weight: ['400','600']
})
export const Logo = () => {
    return (
      <div className="hidden md:flex items-center gap-x-2">
        <Image src={"/logo.svg"} className="dark:hidden" height={40} width={40} alt="logo" />
        <Image src={"/logo-dark.svg"} className="hidden dark:block" height={40} width={40} alt="logo" />
        <p className={cn("font-semibold", font.className)}>Jotion</p>
      </div>
    );
}

