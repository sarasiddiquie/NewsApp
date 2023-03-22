import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Jagmeet Singh",
            "title": "OpenAI's ChatGPT Plus subscription launches in India",
            "description": "ChatGPT Plus, the subscription service to access OpenAI's text-generating AI, is now available in India.",
            "url": "https://techcrunch.com/2023/03/16/chatgpt-plus-india/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/chatgpt-getty.jpg?resize=1200,800",
            "publishedAt": "2023-03-17T06:34:33Z",
            "content": "ChatGPT Plus, the subscription service to access OpenAI’s text-generating AI, is now available in India. ChatGPT Plus features GPT-4, the refined AI model that OpenAI launched earlier this week.\r\nThe… [+1391 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Manish Singh",
            "title": "Walmart invests $200 million in Indian mobile payments giant PhonePe",
            "description": "Walmart-backed PhonePe said it plans to deploy the funds to build and scale its insurance, stockbroking, and ONDC-based shopping businesses.",
            "url": "https://techcrunch.com/2023/03/16/walmart-invests-200-million-in-indian-mobile-payments-giant-phonepe/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1247348528.jpg?resize=1200,800",
            "publishedAt": "2023-03-17T05:09:23Z",
            "content": "PhonePe has raised another $200 million as part of an ongoing round, a deliberation that has now helped it pull $650 million in recent weeks despite the market slump, as the Indian fintech giant bulk… [+3327 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Taylor Hatmaker",
            "title": "The US government ramps up its pressure campaign against TikTok",
            "description": "The Biden administration's public concerns around TikTok have ratcheted up considerably in recent days, revisiting an old tension.",
            "url": "https://techcrunch.com/2023/03/16/the-us-government-ramps-up-its-pressure-campaign-against-tiktok/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/04/GettyImages-1231203702.jpeg?resize=1200,800",
            "publishedAt": "2023-03-16T22:55:06Z",
            "content": "The Biden administration is escalating its pressure campaign against TikTok, threatening a U.S. ban against the world’s most popular app if the company doesn’t split with its Chinese ownership.\r\nThe … [+4972 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Aria Alamalhodaei",
            "title": "At Virgin Orbit, it never should've come to a staff furlough",
            "description": "Virgin Orbit's staff furlough reveals the seriousness of the company's shaky financials, and the uncertainty of its future.",
            "url": "https://techcrunch.com/2023/03/16/virgin-orbit-staff-furlough/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/11/Virgin-Orbit-88.jpg?resize=1200,671",
            "publishedAt": "2023-03-16T22:02:41Z",
            "content": "Last night, CNBC broke the bombshell news that Virgin Orbit was pausing operations for at least a week while it looked for funding to support the business. As part of that pause, company executives r… [+2538 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Amanda Silberling",
            "title": "Pornhub owner MindGeek sold to private equity firm",
            "description": "MindGeek — owner of several adult entertainment sites including Pornhub, Brazzerz and Redtube — was acquired by a Canadian private equity firm, Ethical Capital Partners (ECP). ECP, which was formed last year, did not disclose the terms of the deal. “In MindGe…",
            "url": "https://techcrunch.com/2023/03/16/pornhub-owner-mindgeek-sold-to-private-equity-firm/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/02/pornhub-banner.jpg?resize=1200,837",
            "publishedAt": "2023-03-16T21:39:10Z",
            "content": "MindGeek — owner of several adult entertainment sites including Pornhub, Brazzerz and Redtube — was acquired by a Canadian private equity firm, Ethical Capital Partners (ECP).\r\nECP, which was formed … [+1708 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Devin Coldewey",
            "title": "FCC proposes satellite-to-phone rules to eliminate 'no signal' once and for all",
            "description": "The FCC has officially proposed a framework under which satellites can communicate directly with smartphones in a structured and useful way.",
            "url": "https://techcrunch.com/2023/03/16/fcc-proposes-satellite-to-phone-rules-to-eliminate-no-signal-once-and-for-all/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-1304791604.jpg?resize=1200,800",
            "publishedAt": "2023-03-16T21:35:02Z",
            "content": "The FCC has officially proposed, and voted unanimously to move forward with, a framework under which satellites can communicate directly with smartphones in a structured and useful way.\r\nThe Notice o… [+4231 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Zack Whittaker",
            "title": "Google warns users to take action to protect against remotely exploitable flaws in popular Android phones",
            "description": "The four vulnerabilities found in Samsung chips can be exploited to compromise Android devices \"silently and remotely\" over the cell network.",
            "url": "https://techcrunch.com/2023/03/16/google-warning-samsung-chips-flaws-android/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/03/GettyImages-1126324973-samsung.jpg?resize=1200,800",
            "publishedAt": "2023-03-16T21:26:26Z",
            "content": "Googles security research unit is sounding the alarm on a set of vulnerabilities it found in certain Samsung chips included in dozens of Android models, wearables and vehicles, fearing the flaws coul… [+2419 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Amanda Silberling",
            "title": "Finance YouTubers sued over promotion of FTX",
            "description": "A new class action lawsuit alleges that several well-known finance YouTubers, including Graham Stephan, Andrei Jikh, Jaspreet Singh and others, should be held responsible for promoting now-disgraced cryptocurrency exchange FTX. The lawsuit’s plaintiff is Edwi…",
            "url": "https://techcrunch.com/2023/03/16/finance-youtubers-sued-over-promotion-of-ftx/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/ftx-broken-on-fire.jpg?resize=1200,645",
            "publishedAt": "2023-03-16T20:52:09Z",
            "content": "A new class action lawsuit alleges that several well-known finance YouTubers, including Graham Stephan, Andrei Jikh, Jaspreet Singh and others, should be held responsible for promoting now-disgraced … [+2523 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Christine Hall",
            "title": "Daily Crunch: Microsoft waives its waitlist and opens up its AI-powered Bing chatbot to all",
            "description": "Hello, friends, and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.",
            "url": "https://techcrunch.com/2023/03/16/daily-crunch-microsoft-waives-its-waitlist-and-opens-up-its-ai-powered-bing-chatbot-to-all/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/03/GettyImages-1087962190.jpg?resize=1200,800",
            "publishedAt": "2023-03-16T20:41:18Z",
            "content": "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PDT, subscribe here.\r\nHappy Thursday, Crunchers!\r\nAn agreement among a group of the nati… [+4298 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Brian Heater",
            "title": "Goodbye Google Glass, we knew you well",
            "description": "The world still wasn’t ready for Glass, even after a product makeover and shift in focus. Google confirmed plans to once again end support.",
            "url": "https://techcrunch.com/2023/03/16/goodbye-google-glass-we-knew-you-well/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2013/06/google-glass-girl-model-hd-wallpaper.jpg?resize=1200,811",
            "publishedAt": "2023-03-16T20:29:08Z",
            "content": "I know at least one TC staffer who is gutted by the inevitable second death of Google Glass. I wont call them out by name, but will say that I empathize with seeing a tech giant reverse the truck to … [+2605 chars]"
        }
    ]
    constructor() {
        super()
        this.state = {
            articles: this.articles,
            page: 1

        }

    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=19deffd14b4d48dd88ad1ebc39c0890e&page=1";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });
    }

    PrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=19deffd14b4d48dd88ad1ebc39c0890e&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    NextClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=19deffd14b4d48dd88ad1ebc39c0890e&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }

    render() {

        return (
            <div className='container my-3'>
                <h2>NewsApp - promising the first news</h2>
                <div className='row my-4'>
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 " key={element.url}> <NewsItem title={element.title} description={element.description}
                            imageUrl={element.urlToImage} newsUrl={element.url} /></div>
                    })}


                </div>

                <div>
                    <div className="container d-flex justify-content-between">
                        <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.PrevClick}>Previous</button>
                        <button type="button" className="btn btn-dark" onClick={this.NextClick}>Next</button>

                    </div>
                </div>


            </div>
        )
    }
}

export default News