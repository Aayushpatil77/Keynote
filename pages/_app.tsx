import type { AppProps } from "next/app";
import React from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
/**
 *
 * @param {AppProps} Component, pageProps
 * @return {JSX.Element}
 */
export default function keyNoteApp({
    Component,
    pageProps,
}: AppProps): JSX.Element {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}
