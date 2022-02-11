import React from "react";
import ImageWithBoxShadow from "../components/ImageWithBoxShadow";
import PlayerControls from "../components/PlayerControls";
import Song from "../components/Song";
/**
 *
 * @return {JSX.Element} Home page
 */
export default function Home(): JSX.Element {
    return (
        <>
            <PlayerControls
                ImageSrc="/song1.jfif"
                Singer="Dualizm"
                SongTitle="The Red Line"
                AlbumName="The Red Line"
                Duration={158}
                isPlaying={true}
            />
            <div className="mt-10 ml-40 flex font-barlow">
                <div className="relative">
                    <ImageWithBoxShadow src="/album-image.jfif" />
                </div>
                <div className="ml-14 flex flex-col h-[310px] justify-between">
                    <div className="">
                        <h1 className="text-7xl font-bold">Lofi Beats</h1>
                        <p className="mt-2 text-xl font-bold text-[#474747]">
                            A new year ahead with beats to chill,relax,study,
                            and focus...
                        </p>
                        <p className="mt-1 text-xl font-bold text-[#474747]">
                            Updated at Oct 10, 2022
                        </p>
                    </div>
                    <div>
                        <button className="font-bold outline text-xl bg-red-100 w-[100px] h-[35px] rounded-md flex justify-center items-center">
                            <img
                                src="/play-solid.svg"
                                height="14px"
                                width="14px"
                                className="mr-1"
                            />{" "}
                            Play
                        </button>
                        <p className="mt-2 text-xl font-bold text-[#474747]">
                            Keynote • 4, 498, 190 likes • 812 songs, over 24hr
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-[50px] pl-40 w-[100%]">
                <Song
                    ImageSrc="/song1.jfif"
                    Singer="Dualizm"
                    SongTitle="The Red Line"
                    AlbumName="The Red Line"
                    Duration={158}
                    isPlaying={true}
                />
                <Song
                    ImageSrc="/song1.jfif"
                    Singer="Dualizm"
                    SongTitle="The Red Line"
                    AlbumName="The Red Line"
                    Duration={158}
                    isPlaying={false}
                />
                <Song
                    ImageSrc="/song1.jfif"
                    Singer="Dualizm"
                    SongTitle="The Red Line"
                    AlbumName="The Red Line"
                    Duration={158}
                    isPlaying={false}
                />
                <Song
                    ImageSrc="/song1.jfif"
                    Singer="Dualizm"
                    SongTitle="The Red Line"
                    AlbumName="The Red Line"
                    Duration={158}
                    isPlaying={false}
                />
                <Song
                    ImageSrc="/song1.jfif"
                    Singer="Dualizm"
                    SongTitle="The Red Line"
                    AlbumName="The Red Line"
                    Duration={158}
                    isPlaying={false}
                />
            </div>
        </>
    );
}
