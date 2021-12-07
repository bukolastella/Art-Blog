import React from "react"
import IssuesImages from "./IssuesImages"
import { useStaticQuery, graphql, Link } from "gatsby"

const Issues = () => {
  const data = useStaticQuery(graphql`
    query markdownFiles {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
        nodes {
          frontmatter {
            slug
            title
            date(formatString: "D/M/YY")
            img {
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  width: 230
                  height: 300
                )
              }
            }
          }
          id
        }
      }
    }
  `)
  const files = data.allMarkdownRemark.nodes
  return (
    <section className="flex flex-col xl:flex-row my-10 pb-28 py-8 bg-customIssue px-10">
      <div className="flex flex-col items-start xl:w-1/3 mr-5">
        <h1 className=" text-7xl md:text-8xl font-thin">ISSUE 1</h1>
        <p className="md:text-left md:w-1/2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          adipisci unde corporis quo harum cumque tempore quibusdam illum,
          dolore perspiciatis dolores voluptatum officia aperiam, suscipit est
          possimus molestiae ex nam!
        </p>
      </div>
      <div className="xl:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 place-self-center">
        {files.map((ev, i) => (
          <Link to={`${ev.frontmatter.slug}`} key={ev.id}>
            <IssuesImages
              date={ev.frontmatter.date}
              img={ev.frontmatter.img}
              title={ev.frontmatter.title}
              index={i}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Issues
