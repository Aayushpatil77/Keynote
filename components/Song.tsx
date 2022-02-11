import React from "react";

export interface SongProps {
    ImageSrc: string;
    SongTitle: string;
    Singer: string;
    AlbumName: string;
    Duration: number; // Duration of the song in seconds
    isPlaying: boolean;
}

/**
 *
 * @param {number} SECONDS
 * @return {string}
 */
const converSeondsTOHHMMSS = (SECONDS: number): string => {
    return new Date(SECONDS * 1000).toISOString().substring(14, 19);
};

/**
 *
 * @param {SongProps} props
 * @return {JSX.Element}
 */
export default function Song(props: SongProps): JSX.Element {
    return (
        <>
            <div
                className={`w-3/4 rounded-lg h-[64px] ${
                    props.isPlaying ? "bg-red-400" : "bg-red-100"
                } hover:bg-red-400 mb-5 flex justify-between items-center font-barlow`}
            >
                <div className="flex items-center ml-8">
                    <img
                        src={props.ImageSrc}
                        className="w-[48px] h-[48px] rounded-lg"
                    />
                    <div className="ml-4 flex flex-col">
                        <h3 className="text-lg font-bold leading-none">
                            {props.SongTitle}
                        </h3>
                        <p className="text-sm">{props.Singer}</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg leading-none">{props.AlbumName}</h3>
                </div>
                <div className="pr-8">
                    {converSeondsTOHHMMSS(props.Duration)}
                </div>
            </div>
        </>
    );
}
