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
          return 20;
        }
        if (newOffset <= 0) {
          setDirection(1);
          return 0;
        }
        return newOffset;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <>
      <div 
        className='flex w-full h-full'
        style={{
          width: '100vw',
          height: '100vh',
          position: 'relative',
        }}
      >
        <div className='relative z-10 flex flex-col items-center justify-center space-y-6 py-5 w-full h-full'>
          <div
            className="absolute left-10"
            style={{
              backgroundImage: 'url(/images/cube-in-left-large.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '40vw',
              height: '40vh',
              top: `calc(10% + ${offset}px)`,
              left: '10%',
              animation: 'rotate 5s linear infinite',
            }}
          />
          <style jsx>{`
            @keyframes rotate {
              0% {
                transform: rotate(10deg);
              }
              100% {
                transform: rotate(-50deg);
              }
            }

            @keyframes moveDiagonally {
              0% {
                transform: translate(0, 0);
              }
              50% {
                transform: translate(50px, -50px);
              }
              100% {
                transform: translate(0, 0);
              }
            }

            @keyframes moveDiagonally1 {
              0% {
                transform: translate(0, 0);
              }
              50% {
                transform: translate(10px, 50px);
              }
              100% {
                transform: translate(0, 0);
              }
            }

            @keyframes moveDiagonally2 {
              0% {
                transform: translate(0, 0);
              }
              50% {
                transform: translate(10px, 60px);
              }
              100% {
                transform: translate(0, 0);
              }
            }

            @media (max-width: 768px) {
              .hide-on-mobile {
                display: none;
              }
            }

            @keyframes rotate-border {
              0% {
                border-color: blue;
              }
              50% {
                border-color: p;
              }
              100% {
                border-color: blue;
              }
            }

            .rotate-border {
              animation: rotate-border 2s linear infinite;
            }




            *, ::after, ::before {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59,130,246,.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
  --tw-contain-size: ;
  --tw-contain-layout: ;
  --tw-contain-paint: ;
  --tw-contain-style: ;
}
@layer {
  .border-animate::before {
    content: "";
    position: absolute;
    width: 110%;
    height: 50%;
    background-color: #3b82f6;
    animation: animate-border 4s linear infinite;
  }
}
          `}</style>

          <div
            className="absolute left-0"
            style={{
              backgroundImage: 'url(/images/cube-in-left-medium.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '20vw',
              height: '40vh',
              top: `calc(30% + ${offset}px)`,
              left: '10%',
              animation: 'rotate 5s linear infinite',
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
              top: `calc(30% + ${offset}px)`,
              left: '64%',
              animation: 'moveDiagonally1 3s ease-in-out infinite',
            }}
          />

          <div
            className='absolute hide-on-mobile'
            style={{
              backgroundImage: 'url(/images/cube-in-right-large.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '60vw',
              height: '60vh',
              top: `calc(10% + ${offset}px)`,
              left: '58%',
              animation: 'moveDiagonally3 2s ease-in-out infinite, shrink 5s ease-in-out infinite',
            }}
          />

          <div
            className='absolute hide-on-mobile'
            style={{
              backgroundImage: 'url(/images/cube-in-left-large.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '25vw',
              height: '25vh',
              top: `calc(10% + ${offset}px)`,
              animation: 'moveDiagonally2 2s ease-in-out infinite',
              left: '67%',
            }}
          />

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
              <button className='relative flex justify-center items-center gap-4 mt-8 px-16  md:px-20 py-3 md:py-6 border border-[#4960FF] rounded-md border-animate z-[110] dark'>
                ::before
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
            className={`flex items-center pl-2 text-sm tracking-wide transition-colors duration-200  bg-blue-800 border border-blue-800 rounded-full shrink-0 sm:w-auto ${isDarkTheme ? "text-white" : "text-black"}`}
          >
            Demander une démo
            <div className='bg-white rounded-full ml-2 transform -rotate-45'>
              <IconArrow />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
