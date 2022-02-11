import React from "react";
import Image from "next/image";

interface Props {
    src: string;
}

/**
 *
 * @param {Props} props
 * @return {JSX.Element}
 */
export default function ImageWithBoxShadow(props: Props): JSX.Element {
    return (
        <>
            <Image
                src={props.src}
                width="310px"
                height="310px"
                className="rounded-[20px] absolute shadow-[#00000040]"
            />
            <img
                src={props.src}
                width="310px"
                height="310px"
                className="rounded-[20px] absolute top-[20px] z-[-1] blur-[35px] select-none"
            />
        </>
    );
}
