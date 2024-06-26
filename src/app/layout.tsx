import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Layout/Header";
import LeftSidebar from "@/components/Layout/LeftSidebar";
import RightSideBar from "@/components/Layout/RightSideBar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "토큰롤",
    description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang={"ko"}>
        <body className={"bg-white dark:bg-slate-700"}>
            {/* 헤더 */}
            <Header/>

            <div className={"container flex z-50 min-h-screen"}>
                {/* 좌측 */}
                <LeftSidebar/>
                {/* 컨텐츠 */}
                <main className={"flex-auto px-8 py-20"}>
                    {children}
                </main>
                {/* 우측 */}
                <RightSideBar/>
            </div>
        </body>
        </html>
    );
}

{/*<html lang="ko">
    <body className={inter.className}>{children}</body>
</html>*/
}