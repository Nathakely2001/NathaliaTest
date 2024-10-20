import Image from 'next/image';
import React from 'react';
import IconArrow from './icons/IconArrow';

// Le composant accepte isDarkTheme comme prop
const HeroSection: React.FC<{ isDarkTheme: boolean }> = ({ isDarkTheme }) => {
  return (
    <div
      className='flex flex-col items-center justify-center space-y-6 py-20 bg-cover bg-center'
      style={{ backgroundImage: "url('/image/cube-in-left-large.png')" }}
    >
      {/* Afficher l'image en fonction du thème */}
      {isDarkTheme ? (
        <Image 
          alt='dark_mode'
          src='/images/logos/f4d-black.gif'
          height={600}
          width={600}
        />
      ) : (
        <Image 
          alt='dark_mode'
          src='/images/logos/f4d-white.gif'
          height={600}
          width={600}
        />
      )}

      <div className='flex flex-col space-y-4 items-center text-3xl'>
      <div className='flex flex-col items-center'>
  <p><strong>Solutions</strong> de développement</p> 
  <p><strong>rapides </strong>et <strong> flexibles</strong> avec</p>
</div>

        <div className='flex space-x-4'>
          <button className='flex items-center px-5 py-3 text-sm tracking-wide text-white transition-colors duration-200 bg-none border border-blue-500 rounded-md shrink-0 sm:w-auto  ' >
            <div className='flex items-center'>


            {isDarkTheme ? (
  <>
    <Image 
      alt='Strapi logo'
      src='/images/Strapi-logo-white.png'
      height={100}
      width={100}
    />
    &nbsp;<span style={{ color: 'white' }}>&</span>&nbsp;
    <Image 
      alt='Next.js logo'
      src='/images/Next-JS-logo-white.png'
      height={100}
      width={100}
    />
  </>
) : (
  <>
    <Image 
      alt='Strapi logo'
      src='/images/Strapi-logo-black.png'
      height={100}
      width={100}
    />
    &nbsp;<span style={{ color: 'black' }}>&</span>&nbsp;
    <Image 
      alt='Next.js logo'
      src='/images/Next-JS-logo-black.png'
      height={100}
      width={100}
    />
  </>
)}





            </div>
          </button>
        </div>
      </div>
      
      <p className='text-center'>
        Nous créons des applications web sur mesure, rapides et évolutives grâce à Strapi pour une gestion de contenu flexible et Next.js pour des performances optimales et un SEO renforcé.
      </p>
      
      {/* Bouton avec couleur de texte conditionnée par le thème */}
      <button 
        className={`flex items-center px-5 py-3 text-sm tracking-wide transition-colors duration-200 bg-none border border-blue-500 rounded-full shrink-0 sm:w-auto ${
          isDarkTheme ? "text-white" : "text-black"
        }`}
      >
        Demander une démo
        <div className='bg-white rounded-full ml-2'>
          <IconArrow />
        </div>
      </button>
    </div>
  );
};

export default HeroSection;
