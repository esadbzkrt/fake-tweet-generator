import React, {useState} from "react";
import "./style.scss";
import {ReplyIcon, LikeIcon, RetweetIcon, ShareIcon, VerifiedIcon} from "./icons";
import PpLoader from "./loader";

const tweetFormat = (tweet) => {
    tweet = tweet
        .replace(/@(\w+)/, '<span>@$1</span>')
        .replace(/#([\wsçöğüıİ]+)/gi, '<span>#$1</span>')
        .replace(/(https?:\/\/[\w.\/]+)/, '<span>$1</span>');
    return tweet;
}

const formatNumber = (number) => {
    if(!number){
        number=0;
    }

    if(number<1000)
        return number;
    else if (number>= 1000 && number< 1000000) {
        number/=1000;
        number= String(number).split('.');

       return (number[0] + (number[1] > 100 ?  ',' + number[1].slice(0,1) + ' B' : ' B'));
    }
    else{
        number/= 1000000;
        number=String(number).split('.');
        return number[0] + (number[1]>100000 ? ',' + number[1].slice(0,2) + ' M' : ' M' );

    }


}

export default function App() {
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [isVerified, setIsVerified] = useState(false);
    const [tweet, setTweet] = useState();
    const [pp, setPp] = useState();
    const [retweets, setRetweets] = useState(12345);
    const [quoteTweets, setQuoteTweets] = useState(98742);
    const [likes, setLikes] = useState(123458);

    function ppHandle(e) {
        const file= e.target.files[0];
        const reader = new FileReader()
        reader.addEventListener('load',function (){
            setPp(this.result);
        });
        reader.readAsDataURL(file)
    }

    return (
        <>
            <div className="tweet-settings">
                <h3>Tweet Ayarları</h3>
                <ul>
                    <li>
                        <input type="text" className="input" placeholder="Ad Soyad" value={name}
                               onChange={e => setName(e.target.value)}/>
                    </li>
                    <li>
                        <input type="text" className="input" placeholder="Kullanıcı Adı" value={username}
                               onChange={e => setUsername(e.target.value)}/>
                    </li>
                    <li>
                        <textarea className="textarea" maxLength="140" placeholder="Tweet" value={tweet}
                                  onChange={e => setTweet(e.target.value)}/>
                    </li>
                    <li>
                        <input type="file" className="input" placeholder="Ad Soyad"
                               onChange={ppHandle}/>
                    </li>
                    <li>
                        <input type="tel" className="input" maxLength="9" placeholder="Retweet Sayısı" value={retweets}
                               onChange={e => setRetweets(e.target.value)}/>
                    </li>
                    <li>
                        <input type="tel" className="input" maxLength="9" placeholder="Alıntı Tweet Sayısı" value={quoteTweets}
                               onChange={e => setQuoteTweets(e.target.value)}/>
                    </li>
                    <li>
                        <input type="tel" className="input" maxLength="9" placeholder="Beğeni Sayısı" value={likes}
                               onChange={e => setLikes(e.target.value)}/>
                    </li>
                    <button>Oluştur</button>
                </ul>
            </div>
            <div className="tweet-container">
                <div className="tweet">
                    <div className="tweet-author">
                        {pp && <img src={pp} alt="pp"/> || <PpLoader/>}
                        <div>
                            <div className="name">{name || 'Ad'} {isVerified && <VerifiedIcon/>} </div>
                            <div className="username">@{username || 'kullaniciadi'}</div>
                        </div>
                    </div>
                    <div className="tweet-content">
                        <p dangerouslySetInnerHTML={{__html: (tweet && tweetFormat(tweet)) || "Örnek Metin"}}></p>
                    </div>
                    <div className="tweet-stats">
                <span>
                    <b>{formatNumber(retweets)}</b> Retweets
                </span>
                        <span>
                    <b>{formatNumber(quoteTweets)}</b> Alıntı Tweetler
                </span>
                        <span>
                    <b>{formatNumber(likes)}</b> Beğeniler
                </span>
                    </div>
                    <div className="tweet-actions">
                        <span><ReplyIcon/></span>
                        <span><RetweetIcon/></span>
                        <span><LikeIcon/></span>
                        <span><ShareIcon/></span>
                    </div>
                </div>
            </div>

        </>

    );
}
