import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { simpleLogo, menu, close } from '../assets';

const Navbar = () => {

  // State Mengelola Tampilan Styling Active
  const [active, setActive] = useState("");
  // State Menu & Close Pada Responsive Design
  const [toggle, setToggle] = useState(false);

  return (
    /* Container Nav Utama */
    <nav className={` ${styles.paddingX} w-full flex item-center py-5 fixes top-0 z-20 bg-primary`} > { /* ${styles.paddingX} Mendeklarasikan Styling Pada styles.js */}

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Bagian kiri navbar: Logo dan nama */}
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          // Mengatur item aktif menjadi kosong dan meng-scroll halaman ke atas
          setActive("");
          window.scrollTo(0, 0);
        }}>
          {/* Logo */}
          <img src={simpleLogo} alt="logo" className='object-contain' width={80} />
          {/* Nama dan deskripsi */}
          <p className='text-white text-[18px] font-bold cursor-pointer'>
            Luthfi <span className='sm:block hidden'>| Frontend Developer</span>
          </p>
        </Link>

        {/* Menu navigasi untuk layar besar */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li key={Link.id} className={`${active === Link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}>
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        {/* Menu navigasi untuk layar kecil (mobile) */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* Img Tombol menu (ikon) Dan Pengaturan Toggle */}
          <img
            src={toggle ? close : menu} // Conditional Toggle Terbuka & Tertutup
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)} // Fungsi untuk mengubah nilai toggle antara true dan false
          />

          {/* Daftar menu navigasi yang muncul pada layar kecil */}
          {/* Jika Toggle False Maka hidden Diterapkan & Toggle True Maka Flex Diterapkan */}
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((Link) => (
                <li key={Link.id} className={`${active === Link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle); // Menutup menu setelah item diklik
                    setActive(Link.title); // Mengatur item yang aktif
                  }}>
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar