import Head from "next/head"
import Layout from "../components/Layout"
import utilStyles from "../styles/utils.module.css"

export default function Home() {
  return (
    <Layout
      title="Home | AR Next.js"
      description="Bienvenidos a AR"
      home>
      <Head></Head>
      <section className={utilStyles.headingMd}>
        <p>Hola, soy Agustín Roel 👋</p>
        <p>Soy Desarrollador Fullstack 👨‍💻, fundador de Upmind Esports Performance y Psicólogo especialista en Deporte y trabajo actualmente para NTT Data Spain!
           He realizado una serie de proyectos tanto personales como para diferentes compañías.
          👨‍🎓 Sigo aprendiendo cosas nuevas todos los días 🤣
          Amo los videojuegos 👾, de hecho trabajé en la industria de los Esports durante 3 años.</p>
          <p> 👀 2022 Goals: Mejorar mis habilidades técnicas y crecer profesionalmente.</p>
          <p>⚡ Fun fact: Soy fanático de Los Beatles y del Club Atlético Banfield.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
