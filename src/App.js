import React from "react";
import "./style.scss";
import{ReplyIcon,LikeIcon,RetweetIcon,ShareIcon} from "./icons";

export default function App() {
    return (
        <div className="tweet">
            <div className="tweet-author">
                <img src="https://pbs.twimg.com/profile_images/1294724663420039169/0kpRYLL4_normal.jpg" alt="pp"/>
                <div>
                    <div className="name">Esad Bozkurt</div>
                    <div className="username">@esadbzkrt</div>
                </div>
            </div>
            <div className="tweet-content">
                <p>Boş adam değiliz.</p>
            </div>
            <div className="tweet-stats">
                <span>
                    <b>24</b> Retweet
                </span>
                <span>
                    <b>45</b> Alıntı Tweetler
                </span>
                <span>
                    <b>102</b> Beğeni
                </span>
            </div>
            <div className="tweet-actions">
                <span><ReplyIcon/></span>
                <span><RetweetIcon/></span>
                <span><LikeIcon/></span>
                <span><ShareIcon/></span>
            </div>
        </div>
    );
}
