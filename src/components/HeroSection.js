import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from "react-flags-select";

export default function HeroSection() {

  const [selected, setSelected] = useState('TR');

  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IN: '+15',
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:h-full before:z-10">
        <Slider {...settings}>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg" />
          </div>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"/>
          </div>
        </Slider>
        <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
          <div>
            <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"/>
            <h3 className="mt-8 text-4xl font-semibold text-white">Dakikalar içinde kapında</h3>
          </div>
          <div className="w-[400px] rounded-lg bg-gray-50 p-6">
            <h4 className="text-primary-brand-color text-center font-semibold mb-4">Girişi yap veya kayıt ol</h4>
            <div className="grid gap-y-3">
              <div className="flex gap-x-2">
                <ReactFlagsSelect
                  countries={Object.keys(phones)}
                  customLabels={phones}
                  placeholder="Select Language"
                  selected={selected}
                  className="flag-select"
                />
                <label className="flex-1 group relative cursor-pointer">
                  <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none text-sm pt-2 peer"/>
                  <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus: text-primary-brand-color peer-focus:text-xs peer-valid:text-xs peer-valid:h-7 peer-valid: text-primary-brand-color peer-valid:text-xs">Telefon numarası</span>  {/* peer kısmına dikkat */}
                </label>
              </div>
              <button className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 w-full text-center rounded-md text-sm font-semibold">Telefon numarası ile devam et</button>
            </div>
          </div>
        </div>    
    </div>
  )
}
