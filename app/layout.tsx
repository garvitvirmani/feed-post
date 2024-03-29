import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Logout from "./logout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={"flex justify-center width-full" + inter.className}>
        <div className="flex flex-col gap-11">
          <nav>
            {!!session && <Logout />}
            {!session && <Link href="/login">Login</Link>}
          </nav>

          {children}
        </div>
      </body>
    </html>
  );
}
