import React from "react";

import Layout from "../components/layout";

const IndexPage = () => (
  <Layout tabTitle="Aprender Gatsby.js">
    <div className="p-5">
      <p>
        <a href="https://www.gatsbyjs.org/">Gatsby</a> es un framework basado en
        React. Gatsby pretende ayudar a crear sitios web eficientes y rápidos.
      </p>
      <p>
        Gatsby funciona uniendo HTML + CSS + React. Tiene la capacidad de tomar
        datos de cientos de distintas fuentes: CMS como Wordpress o Drupal, a
        hojas de excel creadas en Google Spreadsheets o Markdwown. Hay plugins
        para casi cualquier fuente de datos que uno pueda imaginar.
      </p>
      <p>
        Gatsby obtiene los datos de todas estas fuentes utilizando{" "}
        <a href="https://graphql.org/">Graphql</a>, lo cual permite centralizar
        en un solo lugar el origen y fuente de los datos en el sitio web o
        aplicación.
      </p>
      <p>
        Gatsby fue nombrado por Udemy como el{" "}
        <b>skill #1 para aprender este 2020</b>. Vale la pena.{" "}
        <a href="https://www.gatsbyjs.org/docs/">Empezá a aprender</a>.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
