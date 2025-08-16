import { createContext } from "react";
import { videoData } from "../videosData";

export let MyStore = createContext()

export let  VideosContextProvider = ({children})=>{

    let VideoDets = videoData


    

    return <MyStore.Provider value={videoData} >{children}</MyStore.Provider>
}

