"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { UsersProvider } from "@/providers/UsersProvider/UsersProvider";
import { PostsProvider } from "@/providers/PostsProvider/PostsProvider";
import { TimezoneProvider } from "@/providers/TimezoneProvider/TimezoneProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UsersProvider>
          <PostsProvider>
            <TimezoneProvider>{children}</TimezoneProvider>
          </PostsProvider>
        </UsersProvider>
      </body>
    </html>
  );
}
