// @ts-nocheck
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import cedric from "../public/cedric.png";
import groupomania from "../public/Groupomania.png";
import kanap from "../public/Kanap.png";
import laChouetteAgence from "../public/LaChouetteAgence.png";
import ohMyFood from "../public/OhMyFood.png";
import piiquante from "../public/Piiquante.png";
import reservia from "../public/Reservia.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Portofolio de Cédric Frapier</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-7 font-gatsa md:px-20 lg:px-12 dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Cedric Frapier</h1>
            <ul className="flex items-center list-none">
              <li>Mes projets</li>
              <li>
                <a
                  className="bg-purple-600 text-white px-4 py-2 rounded-md ml-8"
                  href="mailto:cedricfrapier@gmail.com"
                >
                  Contact
                </a>
              </li>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl ml-8" />
              </li>
            </ul>
          </nav>

          <div className="lg:flex lg:justify-between lg:items-end lg:py-8 xl: dark:text-white">
            <div className="text-center p-5 lg:p-0">
              <div className="lg:text-left">
                <p className="text-2xl py-2">Bienvenue, je suis</p>
                <h2 className="text-5xl py-2 font-medium md:text-6xl">
                  Cédric
                </h2>
                <h3 className="text-4xl py-2 text-purple-600 md:text-5xl">
                  développeur web
                </h3>
              </div>
              <div className="my-10 lg:text-left">
                <a
                  className="text-lg text-center bg-purple-600 text-white p-4 border-none rounded-md hover:scale-110 hover:bg-purple-500 "
                  href="Cedric-Frapier.pdf"
                  download={"CedricFrapier"}
                >
                  Télécharger mon cv
                </a>
              </div>

              <p className="text-md pt-3 leading-8 text-gray-800 md:text-xl lg:max-w-lg lg:text-left lg:pb-8 dark:text-white">
                Diplômé d&#39;un Bac + 2 en développement web à la recherche d&#39;un
                poste en tant que développeur web. Je suis
                <span className="text-purple-600"> pugnace</span> pour trouver
                des solutions et{" "}
                <span className="text-purple-600">curieux</span> d&#39;apprendre
                avec une réelle volonté de réussir professionnellement.{" "}
              </p>
              <div className="text-5xl flex justify-center gap-16 lg:flex lg:justify-start py-1 text-gray-600 dark:text-white ">
              <a href="https://www.linkedin.com/in/cedric-frapier">
                <AiFillLinkedin className="hover:text-blue-500 hover:scale-125 transition dark:" />
              </a>
              <a href="https://github.com/cedricfp">
                <AiFillGithub className="dark:hover:text-purple-300 hover:scale-125 transition" />
              </a>
            </div>
            </div>
            
            <div className="relative mx-auto bg-gradient-to-b from-purple-600 rounded-full w-[200px] h-[200px] mt-10 overflow-hidden lg:flex lg:justify-start lg:h-80 lg:w-80 xl:fade-in-left">
              <Image src={cedric} layout="fill" objectFit="cover" alt="image de profil"/>
            </div>
          </div>
          <div className="text-center">
            <h3 className="py-10 text-purple-600 text-3xl text-decoration-line: underline ">
              Mes compétences
            </h3>
            <div className="text-white flex justify-center flex-wrap gap-7 py-7">
              <p className="p-3 bg-gray-600 rounded-2xl">HTML</p>
              <p className="p-3 bg-gray-600 rounded-2xl">CSS</p>
              <p className="p-3 bg-gray-600 rounded-2xl">Sass</p>
              <p className="p-3 bg-gray-600 rounded-2xl">Tailwind CSS</p>
              <p className="p-3 bg-gray-600 rounded-2xl">SEO</p>
              <p className="p-3 bg-gray-600 rounded-2xl">GitHub</p>
              <p className="p-3 bg-gray-600 rounded-2xl">Responsive Design</p>
              <p className="p-3 bg-gray-600 rounded-2xl">Node.Js</p>
              <p className="p-3 bg-gray-600 rounded-2xl">MongoDB</p>
              <p className="p-3 bg-gray-600 rounded-2xl">MYSQL</p>
              <p className="p-3 bg-gray-600 rounded-2xl">
                Les Bases de ReactJs
              </p>
              <p className="p-3 bg-gray-600 rounded-2xl">Les Bases de Vue.Js</p>
            </div>
          </div>

          <div>
            <h3 className="text-center py-10 text-purple-600 text-3xl text-decoration-line: underline ">
              Mes projets
            </h3>
          </div>
          <div className="flex justify-center items-center gap-8 flex-wrap lg:gap-x-20">
          <div>
            <a href="https://github.com/cedricfp/CedricFrapier_7_09042022">
              <div className="max-w-sm text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white text-black">
                <Image
                  src={groupomania}
                  width={250}
                  height={250}
                  className="inline object-contain"
                  alt="groupomania"
                />
                <h3 className="text-purple-600 my-6">Groupomania</h3>
                <p>Réseau social d&#39;entreprise, Vue.Js, Express.Js et MySQL </p>
              </div>
            </a>
          </div>

          <div>
            <a href="https://github.com/cedricfp/CedricFrapier_6_032022-">
              <div className="max-w-sm text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white text-black">
                <Image
                  src={piiquante}
                  width={250}
                  height={250}
                  className="inline object-contain"
                  alt="piiquante"
                />
                <h3 className="text-purple-600 my-6">Piiquante</h3>
                <p className="">API Avis gastronomiques, Node.js, Express et MongoDB </p>
              </div>
            </a>
          </div>

          <div>
            <a href="https://github.com/cedricfp/CedricFrapier_5_08112021">
              <div className="max-w-sm text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white text-black">
                <Image
                  src={kanap}
                  width={250}
                  height={250}
                  className="inline object-contain"
                  alt="kanap"
                />
                <h3 className="text-purple-600 my-6">Kanap</h3>
                <p>
                  Front-End d&#39;un E-commerce, API rest et gestion d&#39;un panier{" "}
                </p>
              </div>
            </a>
          </div>

          <div>
            <a href="https://github.com/cedricfp/CedricFrapier_4_15092021_new">
              <div className="max-w-sm text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white text-black">
                <Image
                  src={laChouetteAgence}
                  width={250}
                  height={250}
                  className="inline object-contain"
                  alt="laChouetteAgence"
                />
                <h3 className="text-purple-600 my-6">La Chouette Agence</h3>
                <p>SEO , Référencement Google et bonnes pratiques</p>
              </div>
            </a>
          </div>

          <div>
            <a href="https://github.com/cedricfp/CedricFrapier_3_10082021">
              <div className="max-w-sm text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white text-black">
                <Image
                  src={ohMyFood}
                  width={250}
                  height={250}
                  className="inline object-contain"
                  alt="ohMyFood"
                />
                <h3 className="text-purple-600 my-6">Oh My Food</h3>
                <p>Front-end d&#39;une application de restaurant, Sass </p>
              </div>
            </a>
          </div>

          <div>
            <a href="https://github.com/cedricfp/CedricFrapier_2_09072021">
              <div className="max-w-sm text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white text-black">
                  <Image
                  src={reservia}
                  width={250}
                  height={250}
                  className="inline object-contain"
                  alt="reservia"
                  />
                <h3 className="text-purple-600 my-6">Reservia</h3>
                <p>
                  Front-end d&#39;une apllication de rérvation de logement, HTML &
                  CSS{" "}
                </p>
              </div>
            </a>
          </div>
          </div>
        </section>
      </main>
    </div>
  );
}
