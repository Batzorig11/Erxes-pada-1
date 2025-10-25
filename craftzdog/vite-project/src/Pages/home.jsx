import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="container">
      <div className="box">
        Hello, I'm an indie app developer based in Japan!
      </div>
      <div className="box1">
        <div>
          <span className="fullName">Takuya Matsuyama</span>
          <br />
          <span>Digital Craftsman ( Artist / Developer / Designer )</span>
        </div>
        <div>
          <img
            src="https://images-ext-1.discordapp.net/external/fhsmjxPMORZ4VPwf4eGR_Mz1AkQ6haQcC3tNPLn1Ne8/%3Furl%3D%252Fimages%252Ftakuya.jpg%26w%3D128%26q%3D75/https/www.craftz.dog/_next/image?format=webp&width=256&height=256"
            alt=""
          />
        </div>
      </div>
      <div>
        <h3>Work</h3>
        <p>
          <span className="indent">Takuya</span> is a freelance and a full-stack
          developer based in Osaka with a passion for building digital
          services/stuff he wants. He has a knack for all things launching
          products, from planning and designing all the way to solving real-life
          problems with code. When not online, he loves hanging out with his
          camera. Currently, he is living off of his own product called{" "}
          <a className="pink" href="">
            Inkdrop
          </a>
          . He publishes content for marketing his products and his YouTube
          channel called{" "}
          <a className="pink" href="">
            "Dev as Life"
          </a>{" "}
          has more than 100k subscribers.
        </p>
      </div>
      <div className="box2">
        <button className="pinkButton">
          My portfolio <span className="indent">{">"}</span>
        </button>
      </div>
      <div>
        <h3>Bio</h3>
        <div>
          <span className="bold">1984</span>
          <span className="indent">Born in Osaka (大阪), Japan.</span>
        </div>
        <div>
          <span className="bold">2010</span>
          <span className="indent">
            Completed the Master's Program in the Graduate School of Information
            Science at Nara Institute of Science and Technology
            (奈良先端科学技術大学院大学情報科学研究科修士課程)
          </span>
        </div>
        <div>
          <span className="bold">2010</span>
          <span className="indent">
            Worked at Yahoo! Japan (ヤフー株式会社入社)
          </span>
        </div>
        <div>
          <span className="bold">2012 to present</span>
          <span className="indent">Working as a freelancer</span>
        </div>
      </div>
      <div>
        <h3>I LOVE</h3>
        <span className="indent">Art</span>, Music,{" "}
        <a className="pink" href="">
          Drawing
        </a>
        , Playing Drums,{" "}
        <a className="pink" href="">
          Photography
        </a>
        , Leica, Machine Learning
      </div>
      <div>
        <h3>On the web</h3>
        <p className="link2box">
          <button className="link2" href="">
            <img src="" alt="" />
            @craftzdog
          </button>
          <button className="link2" href="">
            <img src="" alt="" />
            @inkdrop_app (English)
          </button>
          <button className="link2" href="">
            <img src="" alt="" />
            @craftzdog (Japanese)
          </button>
          <button className="link2" href="">
            <img src="" alt="" />
            @craftzdog
          </button>
        </p>
      </div>
      <div>
        <div>
          <p>Dev as Life</p>
          <p>My Youtube channel (200k subs)</p>
        </div>
        <div>
          <p>Inkdrop</p>
          <p>A Markdown note-taking app</p>
        </div>
      </div>
      <div>
        <h3>Newsletter</h3>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos.
        </p>
      </div>
      <div className="box2">
        <button className="pinkButton">
          <img src="" alt="" /> Sign up my newsletter here
        </button>
      </div>
      <div className="box2">
        <Footer />
      </div>
    </div>
  );
}
