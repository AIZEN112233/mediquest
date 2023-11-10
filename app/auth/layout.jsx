"use client";
import AurthWrapper from "@/components/containers/AurthWrapper";
import PageWrapepr from "@/components/containers/PageWrapepr";
import { redirect } from "next/navigation";

export default function RootLayout({ children }) {
    // if (localStorage.getItem("token")) {
    //     return redirect("/");
    // }
    const width = window.innerWidth;
    return (
        <PageWrapepr
            dark={width > 500 ? false : true}
            image="/auth-bg.png">
            <AurthWrapper>{children}</AurthWrapper>
        </PageWrapepr>
    );
}
