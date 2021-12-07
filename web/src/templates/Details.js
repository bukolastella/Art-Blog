import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const Details = ({ data }) => {
  const { html } = data.markdownRemark
  const { date, title, img, author } = data.markdownRemark.frontmatter
  const image = getImage(img)
  return (
    <div className="px-10 lg:px-28">
      <h1 className="uppercase">{title}</h1>
      <span className="mr-3 lowercase">{author}</span>
      <span className="mr-3">{date}</span>
      <span>15 min read</span>
      <div className="my-4">
        <GatsbyImage image={image} alt="image" />
      </div>
      <p dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default Details

export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        title
        img {
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              height: 200
              width: 500
            )
          }
        }
        author
      }
    }
  }
`
