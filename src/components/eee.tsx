import Image from 'next/image';
import React, { useEffect, useState } from 'react';
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
          return 20; // Upper limit
        }
        if (newOffset <= 0) {
          setDirection(1);
          return 0; // Lower limit
        }
        return newOffset;
      });
    }, 50); 

    return () => clearInterval(interval); 
  }, [direction]);

  return (
    <>
      <div 
        className='flex w-full h-full' // Full width and height
        style={{
          width: '100vw',  // 100% of viewport width
          height: '120vh', // Adjusted height if necessary
          position: 'relative', // Positioning for absolute elements
        }}
      >
        
        <div className='relative py-5 z-10 flex flex-col items-center justify-center mt-0 w-full h-full'>
        <div
  className="absolute left-10"
  style={{
    backgroundImage: 'url(/images/cube-in-left-large.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '40vw',
    height: '40vh',
    top: `calc(0% + ${offset}px)`, // Déplacement vers le haut
    left: '10%',
    animation: 'rotateLeft 5s linear infinite alternate, pause 5s linear infinite alternate 5s', // Élément gauche tourne, puis pause
    backgroundColor: 'transparent', // Couleur de fond transparente
    opacity: 1, // Opacité normale
  }}
/>
<div
  className="absolute left-10"
  style={{
    backgroundImage: 'url(/images/cube-in-right-medium.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '30vw',
    height: '30vh',
    top: `calc(10% + ${offset}px)`, // Déplacement vers le bas
    left: '68%',
    animation: 'rotateRight 5s linear infinite alternate 5s, pause 5s linear infinite alternate 10s', // Éléments à droite tournent après que l'élément gauche ait fait sa pause
    backgroundColor: 'transparent', // Couleur de fond transparente
    opacity: 1, // Opacité normale
  }}
/>
<div
  className='absolute hide-on-mobile'
  style={{
    backgroundImage: 'url(/images/cube-in-right-medium.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '15vw',
    height: '15vh',
    top: `calc(10% + ${offset}px)`, // Déplacement vers le bas
    left: '64%',
    animation: 'rotateRight 5s linear infinite alternate 5s, pause 5s linear infinite alternate 10s', // Éléments à droite tournent après que l'élément gauche ait fait sa pause
    backgroundColor: 'transparent', // Couleur de fond transparente
    opacity: 1, // Opacité normale
  }}
/>
<style jsx>{`
  @keyframes rotateLeft {
    0% {
      transform: rotate(0deg) scale(1); // Début normal
    }
    50% {
      transform: rotate(90deg) scale(1.1); // Rotation à 90° et échelle
    }
    100% {
      transform: rotate(180deg) scale(1); // Fin à 180° et retour à l'échelle normale
    }
  }

  @keyframes pause {
    0% {
      transform: rotate(180deg) scale(1); // Rester à la position finale
      opacity: 1; // Opacité pleine
    }
    100% {
      opacity: 0.8; // Légère transparence
    }
  }

  @keyframes rotateRight {
    0% {
      transform: rotate(0deg) scale(1); // Début normal
    }
    50% {
      transform: rotate(90deg) scale(1.1); // Rotation à 90° et échelle
    }
    100% {
      transform: rotate(180deg) scale(1); // Fin à 180° et retour à l'échelle normale
    }
  }

  .margin-top-negative {
    margin-top: -100px; /* Ajustez la valeur selon vos besoins */
  }

  @media (max-width: 768px) {
    .hide-on-mobile {
      display: none;
    }
  }
`}</style>


          <div
            className='absolute hide-on-mobile'
            style={{
              backgroundImage: 'url(/images/cube-in-right-large.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '130vw',
              height: '130vh',
              top: `calc(-30% + ${offset}px)`, // Moved up further
              left: '36%',
              animation: 'moveDiagonally3 2s ease-in-out infinite, shrink 5s ease-in-out infinite',
            }}
          />

       <div
            className="absolute left-0"
            style={{
              backgroundImage: 'url(/images/cube-in-left-medium.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '130vw',
              height: '130vh',
              top: `calc(-30% + ${offset}px)`, // Moved up further
              left: '-5%',
            }}
          />
          
          <div
            className='absolute hide-on-mobile'
            style={{
              backgroundImage: 'url(/images/cube-in-right-large.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '130vw',
              height: '130vh',
              top: `calc(-30% + ${offset}px)`, // Moved up further
              left: '36%',
              animation: 'moveDiagonally3 2s ease-in-out infinite, shrink 5s ease-in-out infinite',
            }}
          />
          
  
<div style={{ marginTop: '-30px' }}> {/* Ajustez la valeur selon vos besoins */}
  {/* Dynamic theme-based image */}
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
</div>


          <div className='flex flex-col space-y-2 items-center mb-5 mt-5 text-4xl md:text-6xl'> {/* Adjusted font size for mobile */}
            <div className='flex flex-row w-full'>
              <div className='flex justify-start'></div>
              <div className='flex flex-col items-center w-full min-w-[300px] md:min-w-[800px] ml-[18px]'>
                <p className='text-center'><strong>Solutions</strong> de développement</p> 
                <p className='text-center'><strong>rapides </strong>et <strong>flexibles</strong> avec</p>
              </div>
            </div>

            <div className='flex space-x-4'>
              <button className='flex items-center px-5 py-5 text-sm tracking-wide text-white bg-none border border-blue-500 rounded-md shrink-0 sm:w-auto rotate-border'>
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

          <p className='text-center mx-8 mt=5 mb-10 md:mx-[230px] text-lg md:text-base'>
            Nous créons des applications web sur mesure, rapides et évolutives grâce à Strapi pour une gestion de contenu flexible et Next.js pour des performances optimales et un SEO renforcé.
          </p>

          <button 
            className={`flex items-center pl-2 py-2 px-3 text-sm tracking-wide transition-colors duration-200 bg-blue-800 border border-blue-800 rounded-full shrink-0 sm:w-auto ${isDarkTheme ? "text-white" : "text-black"}`}
          >
            Demander une démo
            <div className='bg-white rounded-full ml-2 transform -rotate-45'> {/* Inclinaison dans le sens contraire */}
              <IconArrow /> {/* Adjust icon size */}
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
