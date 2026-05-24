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

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2400);
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
      <div className="logoBox">
        <svg viewBox="0 0 240 240" className="logoSvg">
          <rect className="drawnSquare" x="24" y="24" width="192" height="192" rx="18" />
        </svg>

        <div className="letters">
          <span className="letter letterI1">i</span>
          <span className="letter letterZ">z</span>
          <span className="letter letterI2">i</span>
        </div>

        <svg viewBox="0 0 170 70" className="roofSvg">
          <path className="roofPath" d="M18 48 L84 13 L152 48" />
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
          <option value="EN">EN</option>
          <option value="ES">ES</option>
          <option value="RU">RU</option>
          <option value="UK">UK</option>
          <option value="CS">CS</option>
          <option value="PL">PL</option>
          <option value="IT">IT</option>
          <option value="DE">DE</option>
          <option value="AR">AR</option>
          <option value="HI">HI</option>
        </select>

        <button className="iconBtn">
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
          <Search size={20} />
        </div>

        <div className="actions">
          <button>
            <SlidersHorizontal size={17} />
            Фильтры
          </button>
          <button>
            <MapPin size={17} />
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
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          animation: splashFadeOut 0.35s ease forwards;
          animation-delay: 2.12s;
        }

        .logoBox {
          position: relative;
          width: 190px;
          height: 190px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logoSvg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .drawnSquare {
          fill: none;
          stroke: #080808;
          stroke-width: 10;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 770;
          stroke-dashoffset: 770;
          animation: drawBorder 0.55s ease-in-out forwards;
        }

        .letters {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 18px;
          font-size: 86px;
          font-weight: 900;
          letter-spacing: -8px;
          color: #080808;
        }

        .letter {
          display: inline-block;
          opacity: 0;
          animation: letterPop 0.32s cubic-bezier(0.2, 1.4, 0.4, 1) forwards;
        }

        .letterI1 {
          animation-delay: 0.62s;
        }

        .letterZ {
          animation-delay: 1.02s;
        }

        .letterI2 {
          animation-delay: 1.42s;
        }

        .roofSvg {
          position: absolute;
          top: 30px;
          left: 30px;
          width: 130px;
          height: 70px;
          z-index: 3;
        }

        .roofPath {
          fill: none;
          stroke: #080808;
          stroke-width: 14;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 180;
          stroke-dashoffset: 180;
          animation: drawRoof 0.42s ease-in-out forwards;
          animation-delay: 1.82s;
        }

        .app {
          min-height: 100vh;
          max-width: 480px;
          margin: 0 auto;
          padding: 18px 16px 92px;
          animation: homeAppear 0.5s ease forwards;
          animation-delay: 2.25s;
          opacity: 0;
        }

        .topBar {
          display: grid;
          grid-template-columns: 52px 1fr 44px;
          gap: 10px;
          align-items: center;
          margin-bottom: 24px;
        }

        .miniLogo {
          position: relative;
          width: 48px;
          height: 48px;
          border: 2px solid #080808;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          box-shadow: 4px 4px 0 #00ff85;
        }

        .miniLogo span {
          font-size: 21px;
          font-weight: 900;
          letter-spacing: -2px;
        }

        .miniLogo svg {
          position: absolute;
          top: 3px;
          left: 7px;
          width: 34px;
          height: 20px;
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
          height: 44px;
          border: 2px solid #080808;
          border-radius: 16px;
          background: #d8ff00;
          font-weight: 900;
          text-align: center;
          padding: 0 12px;
          outline: none;
          box-shadow: 3px 3px 0 #080808;
        }

        .iconBtn {
          width: 44px;
          height: 44px;
          border-radius: 16px;
          border: 2px solid #080808;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 3px 3px 0 #ff4fd8;
        }

        .hero {
          margin-bottom: 18px;
        }

        .eyebrow {
          display: inline-flex;
          padding: 8px 12px;
          margin: 0 0 12px;
          border: 2px solid #080808;
          border-radius: 999px;
          background: #d8ff00;
          font-size: 13px;
          font-weight: 800;
        }

        h1 {
          margin: 0;
          font-size: 38px;
          line-height: 0.95;
          letter-spacing: -2px;
          color: #071b46;
        }

        .subtitle {
          margin: 14px 0 0;
          color: #4e5968;
          font-size: 15px;
          line-height: 1.45;
        }

        .tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin: 20px 0 14px;
        }

        .tab {
          border: 2px solid #080808;
          border-radius: 16px;
          padding: 12px 8px;
          background: #ffffff;
          font-weight: 800;
        }

        .tab.active {
          background: #080808;
          color: #ffffff;
          box-shadow: 4px 4px 0 #00d4ff;
        }

        .searchBox {
          border: 2px solid #080808;
          border-radius: 24px;
          padding: 12px;
          box-shadow: 6px 6px 0 #f2f2f2;
          background: #ffffff;
        }

        .searchInput {
          height: 52px;
          border: 2px solid #080808;
          border-radius: 18px;
          display: flex;
          align-items: center;
          padding: 0 14px;
          gap: 10px;
        }

        .searchInput input {
          flex: 1;
          border: 0;
          outline: 0;
          font-size: 15px;
          background: transparent;
        }

        .actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 12px;
        }

        .actions button {
          border: 2px solid #080808;
          border-radius: 16px;
          padding: 12px;
          background: #f7f7f7;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
        }

        .sectionHead {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 24px 0 12px;
        }

        .sectionHead h2 {
          margin: 0;
          font-size: 20px;
          color: #071b46;
        }

        .sectionHead span {
          font-size: 13px;
          font-weight: 800;
          color: #1677ff;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }

        .card {
          overflow: hidden;
          border: 2px solid #080808;
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 4px 4px 0 #d8ff00;
        }

        .card img {
          width: 100%;
          height: 92px;
          object-fit: cover;
          display: block;
        }

        .card div {
          padding: 9px;
        }

        .card h3 {
          margin: 0 0 4px;
          font-size: 14px;
        }

        .card p {
          margin: 0;
          font-size: 11px;
          color: #4e5968;
          font-weight: 700;
        }

        .bottomNav {
          position: fixed;
          left: 50%;
          bottom: 12px;
          transform: translateX(-50%);
          width: min(450px, calc(100% - 24px));
          height: 72px;
          border: 2px solid #080808;
          border-radius: 26px;
          background: #ffffff;
          display: grid;
          grid-template-columns: 1fr 1fr 72px 1fr 1fr;
          align-items: center;
          padding: 8px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .bottomNav button {
          border: 0;
          background: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          font-size: 10px;
          font-weight: 800;
          color: #5f6877;
        }

        .bottomNav .navActive {
          color: #080808;
        }

        .bottomNav .addBtn {
          width: 58px;
          height: 58px;
          margin: 0 auto;
          border: 2px solid #080808;
          border-radius: 22px;
          background: #00ff85;
          color: #080808;
          font-size: 34px;
          line-height: 1;
          box-shadow: 4px 4px 0 #080808;
        }
      `}</style>
    </section>
  );
}
