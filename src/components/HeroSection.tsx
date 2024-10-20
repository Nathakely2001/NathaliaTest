import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import IconArrow from './icons/IconArrow';

const HeroSection: React.FC<{ isDarkTheme: boolean }> = ({ isDarkTheme }) => {
  const [offset, setOffset] = useState(0);
  const [direction, setDirection] = useState(1); // 1 pour descendre, -1 pour monter

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev + direction;
        // Change de direction si on atteint une certaine limite
        if (newOffset >= 20) {
          setDirection(-1);
          return 20; // Limite supérieure
        }
        if (newOffset <= 0) {
          setDirection(1);
          return 0; // Limite inférieure
        }
        return newOffset;
      });
    }, 50); // Ajustez la durée pour contrôler la vitesse

    return () => clearInterval(interval); // Nettoie l'intervalle à la désactivation du composant
  }, [direction]);

  return (
    <>
      <div className='flex'>
        <div
          className='relative z-0 mt-5 flex flex-col justify-end' // Retiré h-80
          style={{
            height: '800px', // Modifiez cette valeur selon vos besoins
            backgroundImage: 'url(/images/cube-in-right-large.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div style={{ transform: `translateY(${offset}px)`, transition: 'transform 0.1s' }}>
            <Image 
              alt='dark_mode'
              src='/images/cube-in-left-small.png'
              height={200}
              width={200}
            />
          </div>
          <div style={{ transform: `translateY(${offset}px)`, transition: 'transform 0.1s' }}>
            <Image 
              alt='dark_mode'
              src='/images/cube-in-left-large.png'
              height={250}
              width={250}
            />
          </div>
        </div>

        <div 
          className='relative z-10 flex flex-col items-center justify-center space-y-6 py-5'
          style={{
            backgroundImage: 'url(/images/cube-in-left-small.png)', // Image de fond
            backgroundSize: 'cover', // Ajuste l'image pour couvrir toute la div
            backgroundPosition: 'center', // Centre l'image
            backgroundRepeat: 'no-repeat', // Évite de répéter l'image
          }}
        >
          {/* Afficher l'image en fonction du thème */}
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
              <button className='flex items-center px-5 py-3 text-sm tracking-wide text-white transition-colors duration-200 bg-none border border-blue-500 rounded-md shrink-0 sm:w-auto'>
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

          <button 
            className={`flex items-center px-5 py-3 text-sm tracking-wide transition-colors duration-200 bg-blue-500 border border-blue-500 rounded-full shrink-0 sm:w-auto ${isDarkTheme ? "text-white" : "text-black"}`}
          >
            Demander une démo
            <div className='bg-white rounded-full ml-2'>
              <IconArrow />
            </div>
          </button>
        </div>

        <div
          className='relative z-0 mt-5 flex flex-col justify-end' // Retiré h-80
          style={{
            height: '800px', // Modifiez cette valeur selon vos besoins
            backgroundImage: 'url(/images/cube-in-right-large.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div style={{ transform: `translateY(${offset}px)`, transition: 'transform 0.1s' }}>
            <Image 
              alt='dark_mode'
              src='/images/cube-in-left-small.png'
              height={200}
              width={200}
            />
          </div>
          <div style={{ transform: `translateY(${offset}px)`, transition: 'transform 0.1s' }}>
            <Image 
              alt='dark_mode'
              src='/images/cube-in-left-large.png'
              height={250}
              width={250}
            />
          </div>
        </div>

      </div>
    </>
  );
};

export default HeroSection;
