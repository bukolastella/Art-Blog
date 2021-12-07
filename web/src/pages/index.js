import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Issues from "../components/Issues"
import { graphql } from "gatsby"

// import Layout from "../components/layout"
// import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const { description, title, year } = data.site.siteMetadata
  return (
    <div>
      <nav
        className="flex justify-between items-center text-sm py-2 pb-8 px-10"
        style={{ height: "90px" }}
      >
        <h1 className="text-lg mb-0">
          {title}
          <span className="text-red-500">.</span>
        </h1>
        <ul className="flex justify-between items-center lg:w-1/3 font-semibold mb-0">
          <li className="mb-0 hidden lg:block">Visit</li>
          <li className="mb-0 hidden lg:block">Collections</li>
          <li className="mb-0 hidden lg:block">What's On</li>
          <li className="mb-0 ml-5">
            <div className="w-16 h-0.5 bg-primary mb-1 opacity-60"></div>
            <div className="w-16 h-1 bg-primary opacity-80"></div>
          </li>
        </ul>
      </nav>
      <main>
        {/* hero content */}
        <div className="px-10">
          <div className=" h-hero relative overflow-y-hidden">
            <StaticImage
              src="../images/flower1.webp"
              placeholder="none"
              alt="A Gatsby astronaut"
              className="absolute bottom-0"
              style={{
                height: "80%",
                marginBottom: "-150px",
              }}
              imgStyle={{
                objectFit: "contain",
              }}
            />
            <div className="flex flex-col items-center w-5/6 min-h-full m-auto">
              <span className="pb-5 font-semibold uppercase text-xs">
                collection {year}
              </span>
              <span className="text-7xl z-10 flex-wrap text-center font-customFont1 text-primary">
                {description}
              </span>
            </div>
            {/*  */}
            <div className="absolute bottom-0 flex-row justify-between items-end w-full pb-5 hidden lg:flex">
              <div>
                <span className="mr-3 opacity-50">EMAIL</span>
                <span
                  className="ml-10 border rounded-3xl border-black text-sm py-2 px-10"
                  placeholder="blurred"
                  style={{
                    width: "100px",
                    height: "80px",
                    borderRadius: "50%",
                  }}
                >
                  SUBSCRIBE
                </span>
              </div>

              <div
                className="justify-self-end  flex flex-col"
                style={{
                  width: "350px",
                }}
              >
                <span className="text-xs font-bold">NATURE</span>
                <span className="text-xs font-bold">PHOTOGRAPHER</span>
                <StaticImage
                  src="../images/photographer.jpg"
                  alt="A Gatsby astronaut"
                  className="rounded-md my-2"
                  style={{
                    width: "150px",
                    height: "100px",
                  }}
                />
                <span className="text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati quis sunt officia quaerat? Animi, consequuntur
                  laborum sapiente fugit fugiat, nisi praesentium esse
                  repellendus vero odit a molestiae asperiores ullam maxime!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="bg-customIssue">
          <Issues />
          <Issues />
        </div>
      </main>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query siteinfo {
    site {
      siteMetadata {
        description
        title
        year
      }
    }
  }
`
// {
/* <Layout>
    <Seo title="Home" />
    <h1 className=" text-red-700">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p><Link to="/using-dsg">Go to "Using DSG"</Link></p>
  </Layout> */
// }
