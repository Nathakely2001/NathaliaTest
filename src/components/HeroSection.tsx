import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import IconArrow from './icons/IconArrow';

const HeroSection: React.FC<{ isDarkTheme: boolean }> = ({ isDarkTheme }) => {
  const [offset, setOffset] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev + direction;
        if (newOffset >= 20) {
          setDirection(-1);
          return 20;
        }
        if (newOffset <= 0) {
          setDirection(1);
          return 0;
        }
        return newOffset;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <>
      <div className='flex'>
        <div className='relative z-10 mt-20 flex flex-col items-center justify-center py-5' style={{ height: '50vh' }}>
          
          {/* Image à gauche */}
          <div
            className='absolute left-0'
            style={{
              backgroundImage: 'url(/images/cube-in-left-medium.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '40vw', // Réactif avec vw pour la largeur
              height: '30vh', // Réactif avec vh pour la hauteur
              top: `calc(0% + ${offset}px)`,
              left: '2%',
            }}
          />
          
          {/* Image au centre */}
          <div
            className='absolute'
            style={{
              backgroundImage: 'url(/images/cube-in-right-large.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '30vw',
              height: '60vh',
              top: `calc(10% + ${offset}px)`,
              left: '30%',
              transform: 'translateX(-95%)',
            }}
          />
   
          {/* Image à droite */}
          <div
            className='absolute'
            style={{
              backgroundImage: 'url(/images/cube-in-right-medium.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '30vw',
              height: '30vh',
              top: `calc(30% + ${offset}px)`,
              left: '75%',
            }}
          />

          {/* Image au centre */}
          <div
            className='absolute'
            style={{
              backgroundImage: 'url(/images/cube-in-right-large.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '30vw',
              height: '60vh',
              top: `calc(-50% + ${offset}px)`,
              right: '30%',
              transform: 'translateX(95%)',
            }}
          />

          {/* Image à droite */}
          <div
            className='absolute right-0'
            style={{
              backgroundImage: 'url(/images/cube-in-right-small.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '30vw',
              height: '30vh',
              top: `calc(-45% + ${offset}px)`,
              left: '90%',
            }}
          />

          {/* Contenu du Hero Section */}
          {isDarkTheme ? (
            <Image 
              alt='dark_mode'
              src='/images/logos/f4d-black.gif'
              height={450}
              width={450}
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
            <div className='flex flex-row w-full'>
              <div className='flex justify-start'></div>
              <div className='flex flex-col items-center w-full ml-8'>
                <p><strong>Solutions</strong> de développement</p> 
                <p><strong>rapides </strong>et <strong>flexibles</strong> avec</p>
              </div>
            </div>

            <div className='flex space-x-4'>
              <button className='relative flex items-center justify-center px-5 py-3 text-sm tracking-wide text-white transition-colors duration-200 bg-transparent border border-blue-500 rounded-md shrink-0 sm:w-auto hover:border-blue-300'>
                <span className='absolute inset-0 rounded-md border-2 border-blue-500 shadow-lg transition duration-200 ease-in-out hover:shadow-xl'></span>

                <div className='relative z-10 flex items-center'>
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

          <p className='text-center m-5'>
            Nous créons des applications web sur mesure, rapides et évolutives grâce à Strapi pour une gestion de contenu flexible et Next.js pour des performances optimales et un SEO renforcé.
          </p>

          <button 
            className={`flex items-center px-5 py-3 m-2 text-sm tracking-wide transition-colors duration-200 bg-blue-500 border border-blue-500 rounded-full shrink-0 sm:w-auto ${isDarkTheme ? "text-white" : "text-black"}`}
          >
            Demander une démo
            <div className='bg-white rounded-full ml-2'>
              <IconArrow />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
