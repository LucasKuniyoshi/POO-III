import Facebook from "./platforms/Facebook";
import IPlatform from "./platforms/IPlatform";
import Twitch from "./platforms/Twitch";
import Youtube from "./platforms/Youtube";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

function startLive(platform: IPlatform){
    console.log("Aguarde...");
    const live = new Live(platform);
    live.broadcasting();
    live.result();
}

function startAdvancedLive(platform: IPlatform){
    console.log("Aguarde...");
    const live = new AdvancedLive(platform);
    live.subtitles();
    live.comments();
}

startAdvancedLive(new Youtube());
console.log(" ");
startAdvancedLive(new Twitch());
console.log(" ");
startAdvancedLive(new Facebook());