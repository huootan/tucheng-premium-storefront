import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // 處理 SEO
import { MapPin, Bus, Car, TreePine, Ruler, DollarSign, Phone, User, CheckCircle2, ChevronDown, ArrowRight } from 'lucide-react';

import img1 from './assets/p1.jpg';
import img2 from './assets/p2.jpg';
import img3 from './assets/p3.jpg';
import img4 from './assets/p4.jpg';
import img5 from './assets/p5.jpg';
import img6 from './assets/p6.jpg';
import img9 from './assets/p9.jpg'; // 新增 p9 照片匯入

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // 監聽滾動以改變導覽列樣式
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 平滑滾動到指定區塊
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 建立 JSON-LD 結構化資料 (Schema.org - RealEstateListing)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "新北土城重劃區稀有金店面出租",
    "description": "土城青雲路341號一樓，權狀80坪大面寬黃金店面出租。緊鄰清水商圈與重劃區，適合百業進駐。",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "青雲路 341 號一樓",
      "addressLocality": "土城區",
      "addressRegion": "新北市",
      "addressCountry": "TW"
    },
    "telephone": "0955-599-119",
    "priceRange": "$120,000 NTD",
    "image": "YOUR_WEBSITE_URL/p6.jpg" // 建議上線後替換為真實絕對路徑的圖片 URL
  };

  return (
    <div className="min-h-screen font-sans text-zinc-800 bg-[#FAFAFA] selection:bg-amber-700 selection:text-white">
      {/* 🚀 大量注入 SEO 標題、描述與中繼標籤 */}
      <Helmet>
        {/* 基礎 SEO */}
        <title>新北土城店面出租｜青雲路大面寬金店面・重劃區黃金地段 80坪</title>
        <meta name="description" content="新北土城稀有金店面出租，位於青雲路341號一樓。擁有9米超大面寬、權狀80坪挑高方正格局。緊鄰清水舊商圈與重劃區，停車便利，對面即是公園。月租12萬，屋主自租仲介勿擾，適合連鎖品牌、醫療診所、精品旗艦店進駐。" />
        <meta name="keywords" content="土城店面出租, 新北店面出租, 土城重劃區店面, 青雲路店面, 黃金店面, 大面寬店面, 捷運海山站店面, 挑高店面出租, 屋主自租店面" />
        <link rel="canonical" href="https://your-website-url.com" /> {/* 請替換為實際上線網址 */}

        {/* Open Graph (Facebook, LINE 分享優化) */}
        <meta property="og:title" content="新北土城稀有金店面出租｜青雲路大面寬80坪" />
        <meta property="og:description" content="超大面寬9米・開門即公園・緊鄰新舊生活圈。月租12萬，誠信出租，歡迎預約看屋。" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={img6} />
        <meta property="og:locale" content="zh_TW" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="新北土城店面出租｜重劃區黃金地段" />
        <meta name="twitter:description" content="土城青雲路341號一樓，權狀80坪大面寬黃金店面。緊鄰清水商圈與重劃區，百業皆宜。" />
        <meta name="twitter:image" content={img6} />

        {/* 注入 JSON-LD 結構化資料 */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* 內建自訂動畫樣式 */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300;400;500;600&family=Noto+Sans+TC:wght@300;400;500&display=swap');
        
        .font-serif-tc { font-family: 'Noto Serif TC', serif; }
        .font-sans-tc { font-family: 'Noto Sans TC', sans-serif; }
        
        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />

      {/* 導覽列 */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className={`text-xl tracking-widest font-serif-tc font-semibold ${isScrolled ? 'text-zinc-900' : 'text-white'}`}>
            PREMIUM<span className="text-amber-600 ml-2">STOREFRONT</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm tracking-widest items-center">
            <button onClick={() => scrollTo('advantages')} className={`${isScrolled ? 'text-zinc-600 hover:text-amber-600' : 'text-white/80 hover:text-white'} transition-colors`}>四大優勢</button>
            <button onClick={() => scrollTo('details')} className={`${isScrolled ? 'text-zinc-600 hover:text-amber-600' : 'text-white/80 hover:text-white'} transition-colors`}>基本資料</button>
            <button onClick={() => scrollTo('gallery')} className={`${isScrolled ? 'text-zinc-600 hover:text-amber-600' : 'text-white/80 hover:text-white'} transition-colors`}>平面空間</button>
            <button onClick={() => scrollTo('real-photos')} className={`${isScrolled ? 'text-zinc-600 hover:text-amber-600' : 'text-white/80 hover:text-white'} transition-colors`}>實景展示</button>
            <button onClick={() => scrollTo('contact')} className={`px-5 py-2 border rounded-full transition-all ${isScrolled ? 'border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white' : 'border-white text-white hover:bg-white hover:text-zinc-900'}`}>預約看屋</button>
          </div>
        </div>
      </nav>

      {/* 首圖 Hero 區塊 */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center transform scale-105 transition-transform duration-10000 hover:scale-100"
          style={{ backgroundImage: `url(${img6})` }}
          aria-label="土城青雲路店面首圖實景"
        >
          <div className="absolute inset-0 bg-zinc-900/50 z-10"></div>
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <span className="fade-in-up text-amber-500 tracking-[0.3em] text-sm md:text-base font-medium mb-4 block">NEW TAIPEI CITY, TUCHENG</span>
          <h1 className="fade-in-up delay-100 text-4xl md:text-6xl lg:text-7xl text-white font-serif-tc font-semibold leading-tight mb-6">
            新北土城重劃區<br />稀有金店面出租
          </h1>
          <p className="fade-in-up delay-200 text-white/80 font-sans-tc text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl">
            超大面寬 9 米・開門即公園・緊鄰新舊生活圈
          </p>
          <button 
            onClick={() => scrollTo('details')}
            className="fade-in-up delay-300 group flex items-center gap-3 bg-amber-600 text-white px-8 py-4 rounded-full text-sm tracking-widest hover:bg-amber-700 transition-all duration-300"
          >
            探索空間細節
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white/60">
          <ChevronDown className="w-8 h-8" />
        </div>
      </header>

      {/* 絕佳優勢區塊 */}
      <section id="advantages" className="py-24 md:py-32 relative bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${img2})` }}>
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif-tc font-semibold mb-4 text-zinc-900">匯聚人潮的絕佳地段</h2>
            <div className="w-12 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-zinc-600 leading-relaxed font-sans-tc font-light max-w-2xl mx-auto">
              坐落於土城清水地區與重劃區的黃金交界，完美融合舊商圈的成熟機能與新重劃區的發展潛力。完善的周邊交通與綠意環境，為您的事業奠定最穩固的基石。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans-tc">
            <div className="bg-white/80 p-8 shadow-lg border border-white/50 backdrop-blur-md rounded-sm hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-amber-50 p-3 rounded-full text-amber-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-zinc-900">新舊生活圈交界處</h3>
              </div>
              <p className="text-zinc-500 font-light pl-[60px]">緊鄰清水地區與重劃區，同時擁有成熟商圈的穩定客源與新社區的高消費潛力。</p>
            </div>

            <div className="bg-white/80 p-8 shadow-lg border border-white/50 backdrop-blur-md rounded-sm hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-amber-50 p-3 rounded-full text-amber-600 shrink-0">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-zinc-900">停車極度便利</h3>
              </div>
              <p className="text-zinc-500 font-light pl-[60px]">旁邊即是停車場。距離青山停車場僅 30 公尺，青山機車停車場僅 20 公尺，顧客臨停無煩惱。</p>
            </div>

            <div className="bg-white/80 p-8 shadow-lg border border-white/50 backdrop-blur-md rounded-sm hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-amber-50 p-3 rounded-full text-amber-600 shrink-0">
                  <TreePine className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-zinc-900">開門即享綠意</h3>
              </div>
              <p className="text-zinc-500 font-light pl-[60px]">正對「青山廣場」公園，視野開闊，優質的周邊環境能提升店面整體質感與吸引力。</p>
            </div>

            <div className="bg-white/80 p-8 shadow-lg border border-white/50 backdrop-blur-md rounded-sm hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-amber-50 p-3 rounded-full text-amber-600 shrink-0">
                  <Bus className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-zinc-900">大眾運輸直達門口</h3>
              </div>
              <p className="text-zinc-500 font-light pl-[60px]">社區大門口即是公車站牌（檳榔科站），可輕鬆轉乘抵達捷運海山站，交通四通八達。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 數據與基本資料區塊 */}
      <section id="details" className="py-24 relative bg-fixed bg-cover bg-center text-white" style={{ backgroundImage: `url(${img3})` }}>
        <div className="absolute inset-0 bg-zinc-900/85"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif-tc font-semibold mb-4 text-white">基本資料概況</h2>
            <div className="w-12 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-800/60 p-8 border border-zinc-700/50 backdrop-blur-sm hover:border-amber-600/50 transition-colors text-center group">
              <MapPin className="w-8 h-8 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-sm text-zinc-300 tracking-widest mb-2 font-light">店面位置</div>
              <div className="font-sans-tc text-lg font-medium text-white">青雲路 341 號一樓</div>
              <div className="text-sm text-zinc-400 mt-2 font-light">鄰近明德路交叉路口</div>
            </div>

            <div className="bg-zinc-800/60 p-8 border border-zinc-700/50 backdrop-blur-sm hover:border-amber-600/50 transition-colors text-center group">
              <Ruler className="w-8 h-8 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-sm text-zinc-300 tracking-widest mb-2 font-light">空間坪數</div>
              <div className="font-sans-tc text-lg font-medium text-white">權狀 80 坪</div>
              <div className="text-sm text-zinc-400 mt-2 font-light">室內 47.7 坪 / 公設 32.97 坪</div>
            </div>

            <div className="bg-zinc-800/60 p-8 border border-zinc-700/50 backdrop-blur-sm hover:border-amber-600/50 transition-colors text-center group">
              <CheckCircle2 className="w-8 h-8 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-sm text-zinc-300 tracking-widest mb-2 font-light">格局優勢</div>
              <div className="font-sans-tc text-lg font-medium text-white">超大面寬約 9 m</div>
              <div className="text-sm text-zinc-400 mt-2 font-light">氣派門面，極具廣告效益</div>
            </div>

            <div className="bg-zinc-800/60 p-8 border border-zinc-700/50 backdrop-blur-sm hover:border-amber-600/50 transition-colors text-center group">
              <DollarSign className="w-8 h-8 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-sm text-zinc-300 tracking-widest mb-2 font-light">月租金</div>
              <div className="font-sans-tc text-2xl font-semibold text-amber-500">120,000<span className="text-base text-zinc-300"> 元</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 空間展示區塊 (Gallery) - 平面圖 */}
      <section id="gallery" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif-tc font-semibold mb-4 text-zinc-900">空間平面圖與尺寸細節</h2>
              <div className="w-12 h-1 bg-amber-600"></div>
            </div>
            <p className="text-zinc-500 font-sans-tc font-light max-w-md mt-6 md:mt-0 text-right">
              三面大面採光，空間方正挑高。無多餘樑柱阻擋，讓您在空間規劃上擁有最大的自由度，適合各類頂級品牌進駐。
            </p>
          </div>
          
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 border border-zinc-100 shadow-sm rounded-sm">
              <img 
                src={img1} 
                alt="土城店面整體平面圖 - 空間方正挑高" 
                className="w-full h-auto object-cover max-h-[600px] hover:scale-105 transition-transform duration-500"
              />
              <img 
                src={img5} 
                alt="青雲路店面尺寸細節圖 - 9米大面寬" 
                className="w-full h-auto object-cover max-h-[600px] hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-center text-zinc-400 text-sm mt-6 font-light tracking-wide">*平面圖為示意圖，實際尺寸以現場為準</p>
          </div>
        </div>
      </section>

      {/* 實景照片區塊 */}
      <section id="real-photos" className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif-tc font-semibold mb-4 text-zinc-900">實景展示</h2>
            <div className="w-12 h-1 bg-amber-600 mx-auto"></div>
            <p className="text-zinc-500 font-sans-tc font-light max-w-2xl mx-auto mt-6">
              寬敞明亮的實際空間，為您的品牌打造最具質感的迎賓氛圍。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: img2, alt: '土城重劃區店面實景照 - 寬敞內部空間' },
              { src: img3, alt: '青雲路金店面實景照 - 採光極佳' },
              { src: img4, alt: '新北店面出租實景照 - 挑高格局' },
              { src: img6, alt: '土城店面大門外觀實景 - 鄰近公園與停車場' },
              // 2. 新增 p9 照片
              { src: img9, alt: '土城店面實景照 - 空間細節' } 
            ].map((photo, index) => (
              <div key={index} className="overflow-hidden rounded-sm shadow-sm group bg-zinc-100">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 聯絡資訊區塊 CTA */}
      <section id="contact" className="py-24 relative bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${img4})` }}>
        <div className="absolute inset-0 bg-zinc-900/70 backdrop-blur-[2px]"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif-tc font-semibold mb-6 text-white">立即聯絡，搶佔金店面。<br/>誠信出租，仲介勿擾。</h2>
          <p className="text-white/90 mb-12 font-sans-tc font-light text-lg">
            優質地段稀有釋出，事業發展的完美起點。<br/>歡迎來電洽詢，屋主將為您導覽。
          </p>

          <div className="bg-white/95 p-10 md:p-14 shadow-2xl border border-white/20 max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 rounded-sm backdrop-blur-md">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mb-4 text-zinc-900">
                <User className="w-8 h-8" />
              </div>
              <div className="text-sm text-zinc-500 tracking-widest mb-1 font-light">聯絡人</div>
              <div className="text-xl font-medium font-sans-tc text-zinc-900">鄭先生</div>
            </div>
            
            <div className="hidden md:block w-px h-24 bg-zinc-200"></div>
            <div className="block md:hidden w-24 h-px bg-zinc-200"></div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-4 text-amber-600">
                <Phone className="w-8 h-8" />
              </div>
              <div className="text-sm text-zinc-500 tracking-widest mb-1 font-light">聯絡電話</div>
              <a href="tel:0955599119" className="text-2xl md:text-3xl font-semibold font-sans text-zinc-900 hover:text-amber-600 transition-colors" aria-label="撥打電話給屋主鄭先生：0955-599-119">
                0955-599-119
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-white/70 text-sm font-light font-sans-tc">
            來電時請告知是在網站上看到此出租資訊，謝謝！
          </div>
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="bg-zinc-950 py-8 border-t border-zinc-900 text-center">
        <p className="text-zinc-600 text-sm font-light tracking-wider font-sans-tc">
          &copy; {new Date().getFullYear()} 新北土城青雲路店面出租. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;