import { graphql, useStaticQuery } from "gatsby"

const useHabitaciones = () => {
  const resultado = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacion {
        nodes {
          id
          titulo
          contenido
          slug
          imagen {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  console.log(resultado)

  return resultado.allDatoCmsHabitacion.nodes.map(habitacion => ({
    id: habitacion.id,
    titulo: habitacion.titulo,
    contenido: habitacion.contenido,
    slug: habitacion.slug,
    imagen: habitacion.imagen,
  }))
}

export default useHabitaciones
