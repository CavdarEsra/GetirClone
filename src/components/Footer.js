import Menu from 'components/ui/Menu'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'

export default function Footer() {

  const menus=[
    {
    title: 'Getir\'i Keşfedin',
    items: [
        {
          title:'Hakkımızda'
        },
        {
          title:'Kariyer'
        },
        {
          title:'Teknoloji Kariyerleri'
        },
        {
          title:'İletişim'
        },
        {
          title:'Sosyal Sorumluluk Projeleri'
        },
        {
          title:'Basın Bültenleri'
        }
      ]
    },
    {
      title: 'Yardıma mı ihtiyacın var?',
      items: [
          {
            title:'Sıkça Sorulan Sorular'
          },
          {
            title:'Kişisel Verilerin Korunması'
          },
          {
            title:'Gizlilik Politikası'
          },
          {
            title:'Kullanım Koşulları'
          },
          {
            title:'Çerez Politikası'
          },
          {
            title:'İşlem Rehberi'
          }
      ]
    },
    {
      title: 'İş Ortağımız Ol',
      items: [
          {
            title:'Bayimiz Olun'
          },
          {
            title:'Deponu Kirala'
          },
          {
            title:'GetirYemek Restoranı Ol'
          },
          {
            title:'GetirÇarşı İşletmesi Ol'
          },
          {
            title:'Zincir Restoranlar'
          }
      ]
    }
]

  return (
    <div className="bg-white mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 pt-10">
          <section>
            <nav className="grid gap-y-4">
              <h6 className="text-lg text-primary-brand-color">Getir'i indirin!</h6>
              <a href="#">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"/>
              </a>
              <a href="#">
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
              </a>
              <a href="#">
                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"/>
              </a>
            </nav>
          </section>
          {menus.map((menu,index)=> <Menu key={index} {...menu} /> )}
        </div>
        <div className='flex justify-between items-center border-t border-gray-200 mt-6 py-6'>
          <div className='text-xs text-gray-700 flex gap-x-8'>
            &copy; 2024 Getir
            <a href='#' className='text text-primary-brand-color hover:underline'>Bilgi Toplumu Hizmetleri</a>
          </div>
          <nav className='flex gap-x-3'>
            <a href='#' className='w-8 h-8 rounded-lg text-gray-500 transition-color hover:bg-primary-brand-color hover:text-primary-brand-color hover:bg-opacity-10 flex items-center justify-center'><FaFacebook size={21}/></a>
            <a href='#' className='w-8 h-8 rounded-lg text-gray-500 transition-color hover:bg-primary-brand-color hover:text-primary-brand-color hover:bg-opacity-10 flex items-center justify-center'><FaTwitter size={21}/></a>
            <a href='#' className='w-8 h-8 rounded-lg text-gray-500 transition-color hover:bg-primary-brand-color hover:text-primary-brand-color hover:bg-opacity-10 flex items-center justify-center'><FaInstagram size={21}/></a>
          </nav>
        </div>
      </div>
    </div>
  )
}
