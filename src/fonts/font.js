import { DM_Sans, Kanit, Lora } from "next/font/google";

import localFont from "next/font/local";
export const lora = Lora({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-lora",
    style: ["normal"]
})
export const dmsans = DM_Sans({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
    style: ["normal"],
    variable: "--font-dmsans"
})
export const suseSans = localFont({
    src: './SUSE-VariableFont_wght.ttf',
    display: 'swap',
    variable: '--font-suse',
})