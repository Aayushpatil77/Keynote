import React from "react";
import { SongProps } from "./Song";

interface Props extends SongProps {}

/**
 * @param {Props} props
 * @return {JSX.Element}
 */
export default function PlayerControls(props: Props): JSX.Element {
    return (
        <>
            <div className="h-[60px] px-20 flex justify-between bg-slate-200 fixed right-0 left-0 bottom-0 p-2">
                <div className="flex items-center ml-8">
                    <img
                        src={props.ImageSrc}
                        className="w-[45px] h-[45px] rounded-lg"
                    />
                    <div className="ml-4 flex flex-col">
                        <h3 className="text-base font-bold leading-none">
                            {props.SongTitle}
                        </h3>
                        <p className="text-sm">{props.Singer}</p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img
                        src="/backward-step-solid.svg"
                        alt=""
                        className="w-[30px] hover:bg-blue-300 px-2 rounded-lg h-[30px]"
                    />
                    <img
                        src="/pause-solid.svg"
                        alt=""
                        className="w-[40px] hover:bg-blue-300 px-2 rounded-lg h-[40px] mx-3"
                    />
                    <img
                        src="/forward-step-solid.svg"
                        alt=""
                        className="w-[30px] hover:bg-blue-300 px-2 rounded-lg h-[30px]"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <img
                        src="/shuffle-solid.svg"
                        alt=""
                        className="w-[30px] hover:bg-blue-300 px-2 rounded-lg h-[30px]"
                    />
                    <img
                        src="/repeat-solid.svg"
                        alt=""
                        className="w-[30px] mx-1 hover:bg-blue-300 px-2 rounded-lg h-[30px]"
                    />
                    <img
                        src="/volume-high-solid.svg"
                        alt=""
                        className="w-[30px] hover:bg-blue-300 px-2 rounded-lg h-[30px] mr-1"
                    />
                    <div className="w-[84px] h-[5.5px] relative rounded-full select-none block bg-gray-700 hover:bg-red-700">
                        <div className="relative w-full h-full ">
                            <div className="absolute"></div>
                            <div className="transform-gpu translate-x-[-65%] left-full translate-y-[-30%]  absolute cursor-pointer w-[15px] h-[15px] bg-white rounded-full shadow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
