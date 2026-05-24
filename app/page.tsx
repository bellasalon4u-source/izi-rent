'use client';

import { useEffect, useState } from 'react';
import {
  Bell,
  Heart,
  Home,
  MapPin,
  MessageCircle,
  Search,
  SlidersHorizontal,
  User,
} from 'lucide-react';

const properties = [
  {
    city: 'London',
    price: 'от £750/мес',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900&auto=format&fit=crop',
  },
  {
    city: 'Manchester',
    price: 'от £520/мес',
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=900&auto=format&fit=crop',
  },
  {
    city: 'Birmingham',
    price: 'от £480/мес',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=900&auto=format&fit=crop',
  },
];

const languages = ['EN', 'ES', 'RU', 'UK', 'CS', 'PL', 'IT', 'DE', 'AR', 'HI'];

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="page">
      {showSplash && <SplashScreen />}
      <HomeScreen />
    </main>
  );
}

function SplashScreen() {
  return (
    <section className="splash">
      <div className="splashLogo">
        <svg className="squareSvg" viewBox="0 0 240 240">
          <path
            className="squarePath"
            d="M34 34 H206 Q216 34 216 44 V196 Q216 206 206 206 H34 Q24 206 24 196 V44 Q24 34 34 34"
          />
        </svg>

        <div className="splashLetters">
          <span className="drawLetter iOne">i</span>
          <span className="drawLetter zLetter">z</span>
          <span className="drawLetter iTwo">i</span>
        </div>

        <svg className="roofSvg" viewBox="0 0 180 80">
          <path className="roofDraw" d="M22 54 L90 18 L158 54" />
        </svg>
      </div>
    </section>
  );
}

function HomeScreen() {
  return (
    <section className="app">
      <header className="topBar">
        <div className="miniLogo">
          <span>izi</span>
          <svg viewBox="0 0 90 38">
            <path d="M7 28 L45 7 L83 28" />
          </svg>
        </div>

        <select className="languageSelect" defaultValue="RU">
          {languages.map((lang) => (
            <option value={lang} key={lang}>
              {lang}
            </option>
          ))}
        </select>

        <button className="iconBtn" aria-label="Notifications">
          <Bell size={20} />
        </button>
      </header>

      <section className="hero">
        <p className="eyebrow">Аренда без риелторов</p>
        <h1>Найдите жильё быстро и легко</h1>
        <p className="subtitle">
          Комнаты, квартиры и дома без лишней бюрократии, UK credit history и стресса.
        </p>
      </section>

      <section className="tabs">
        <button className="tab active">Аренда</button>
        <button className="tab">Комната</button>
        <button className="tab">Посуточно</button>
      </section>

      <section className="searchBox">
        <div className="searchInput">
          <input placeholder="Город, район или адрес" />
          <Search size={23} strokeWidth={3} />
        </div>

        <div className="actions">
          <button>
            <SlidersHorizontal size={18} strokeWidth={3} />
            Фильтры
          </button>
          <button>
            <MapPin size={18} strokeWidth={3} />
            На карте
          </button>
        </div>
      </section>

      <section className="sectionHead">
        <h2>Популярные варианты</h2>
        <span>Смотреть все</span>
      </section>

      <section className="cards">
        {properties.map((item) => (
          <article className="card" key={item.city}>
            <img src={item.img} alt={item.city} />
            <div>
              <h3>{item.city}</h3>
              <p>{item.price}</p>
            </div>
          </article>
        ))}
      </section>

      <nav className="bottomNav">
        <button className="navActive">
          <Home size={22} />
          <span>Главная</span>
        </button>
        <button>
          <Heart size={22} />
          <span>Избранное</span>
        </button>
        <button className="addBtn">+</button>
        <button>
          <MessageCircle size={22} />
          <span>Чаты</span>
        </button>
        <button>
          <User size={22} />
          <span>Профиль</span>
        </button>
      </nav>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #ffffff;
        }

        .splash {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          animation: splashExit 0.45s ease forwards;
          animation-delay: 2.2s;
        }

        .splashLogo {
          position: relative;
          width: 210px;
          height: 210px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .squareSvg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .squarePath {
          fill: none;
          stroke: #080808;
          stroke-width: 13;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 760;
          stroke-dashoffset: 760;
          animation: drawLine 0.55s ease-in-out forwards;
        }

        .splashLetters {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          margin-top: 23px;
          font-size: 92px;
          font-weight: 950;
          letter-spacing: -9px;
          color: #080808;
        }

        .drawLetter {
          opacity: 0;
          display: inline-block;
          transform-origin: center bottom;
          animation: letterDraw 0.36s cubic-bezier(0.22, 1.3, 0.36, 1) forwards;
        }

        .iOne {
          animation-delay: 0.62s;
        }

        .zLetter {
          animation-delay: 1s;
        }

        .iTwo {
          animation-delay: 1.38s;
        }

        .roofSvg {
          position: absolute;
          top: 28px;
          left: 24px;
          width: 162px;
          height: 76px;
          z-index: 4;
        }

        .roofDraw {
          fill: none;
          stroke: #080808;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 180;
          stroke-dashoffset: 180;
          animation: drawLine 0.43s ease-in-out forwards;
          animation-delay: 1.76s;
        }

        .app {
          min-height: 100vh;
          max-width: 480px;
          margin: 0 auto;
          padding: 18px 16px 96px;
          opacity: 0;
          animation: appEnter 0.5s ease forwards;
          animation-delay: 2.28s;
        }

        .topBar {
          display: grid;
          grid-template-columns: 58px 1fr 52px;
          gap: 12px;
          align-items: center;
          margin-bottom: 26px;
        }

        .miniLogo {
          position: relative;
          width: 54px;
          height: 54px;
          border: 3px solid #080808;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          box-shadow: 6px 6px 0 #00ff85;
        }

        .miniLogo span {
          font-size: 24px;
          font-weight: 950;
          letter-spacing: -3px;
        }

        .miniLogo svg {
          position: absolute;
          top: 6px;
          left: 9px;
          width: 36px;
          height: 22px;
        }

        .miniLogo path {
          fill: none;
          stroke: #080808;
          stroke-width: 5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .languageSelect {
          width: 100%;
          height: 54px;
          border: 3px solid #080808;
          border-radius: 22px;
          background: #d8ff00;
          font-size: 17px;
          font-weight: 950;
          text-align: center;
          padding: 0 16px;
          outline: none;
          box-shadow: 6px 6px 0 #080808;
        }

        .iconBtn {
          width: 50px;
          height: 50px;
          border-radius: 18px;
          border: 3px solid #080808;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 5px 5px 0 #ff4fd8;
        }

        .hero {
          margin-bottom: 18px;
        }

        .eyebrow {
          display: inline-flex;
          padding: 10px 16px;
          margin: 0 0 16px;
          border: 3px solid #080808;
          border-radius: 999px;
          background: #d8ff00;
          font-size: 16px;
          font-weight: 950;
          box-shadow: 4px 4px 0 #080808;
        }

        h1 {
          margin: 0;
          font-size: 48px;
          line-height: 0.9;
          letter-spacing: -3px;
          color: #071b46;
        }

        .subtitle {
          margin: 20px 0 0;
          color: #5f6877;
          font-size: 21px;
          line-height: 1.35;
          font-weight: 600;
        }

        .tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin: 28px 0 18px;
        }

        .tab {
          border: 3px solid #080808;
          border-radius: 22px;
          padding: 16px 8px;
          background: #ffffff;
          font-size: 18px;
          font-weight: 950;
        }

        .tab.active {
          background: #080808;
          color: #ffffff;
          box-shadow: 7px 7px 0 #00d4ff;
        }

        .searchBox {
          border: 3px solid #080808;
          border-radius: 28px;
          padding: 14px;
          box-shadow: 8px 8px 0 #f1f1f1;
          background: #ffffff;
        }

        .searchInput {
          height: 62px;
          border: 3px solid #080808;
          border-radius: 24px;
          display: flex;
          align-items: center;
          padding: 0 18px;
          gap: 12px;
        }

        .searchInput input {
          flex: 1;
          min-width: 0;
          border: 0;
          outline: 0;
          font-size: 20px;
          background: transparent;
        }

        .actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 14px;
        }

        .actions button {
          border: 3px solid #080808;
          border-radius: 22px;
          padding: 17px 8px;
          background: #f7f7f7;
          font-size: 17px;
          font-weight: 950;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .sectionHead {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 30px 0 14px;
        }

        .sectionHead h2 {
          margin: 0;
          font-size: 27px;
          color: #071b46;
          letter-spacing: -1px;
        }

        .sectionHead span {
          font-size: 17px;
          font-weight: 950;
          color: #1677ff;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .card {
          overflow: hidden;
          border: 3px solid #080808;
          border-radius: 22px;
          background: #ffffff;
          box-shadow: 5px 5px 0 #d8ff00;
        }

        .card img {
          width: 100%;
          height: 118px;
          object-fit: cover;
          display: block;
        }

        .card div {
          padding: 11px;
        }

        .card h3 {
          margin: 0 0 5px;
          font-size: 18px;
          letter-spacing: -0.5px;
        }

        .card p {
          margin: 0;
          font-size: 14px;
          color: #4e5968;
          font-weight: 900;
        }

        .bottomNav {
          position: fixed;
          left: 50%;
          bottom: 12px;
          transform: translateX(-50%);
          width: min(450px, calc(100% - 24px));
          height: 74px;
          border: 3px solid #080808;
          border-radius: 28px;
          background: #ffffff;
          display: grid;
          grid-template-columns: 1fr 1fr 74px 1fr 1fr;
          align-items: center;
          padding: 8px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.16);
        }

        .bottomNav button {
          border: 0;
          background: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          font-size: 10px;
          font-weight: 900;
          color: #5f6877;
        }

        .bottomNav .navActive {
          color: #080808;
        }

        .bottomNav .addBtn {
          width: 58px;
          height: 58px;
          margin: 0 auto;
          border: 3px solid #080808;
          border-radius: 22px;
          background: #00ff85;
          color: #080808;
          font-size: 34px;
          line-height: 1;
          box-shadow: 4px 4px 0 #080808;
        }

        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes letterDraw {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.75);
            filter: blur(8px);
          }
          65% {
            opacity: 1;
            transform: translateY(-4px) scale(1.08);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes splashExit {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          75% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.06);
            pointer-events: none;
          }
        }

        @keyframes appEnter {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
