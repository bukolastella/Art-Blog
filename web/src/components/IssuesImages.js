import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
const IssuesImages = ({ index, date, title, img }) => {
  const image = getImage(img)
  let marginNo
  if (index === 0) marginNo = "translate-y-24"
  if (index === 1) marginNo = "translate-y-0"
  if (index === 2) marginNo = "translate-y-14"
  return (
    <div
      className={`my-4 md:my-0 place-items-start transform translate-y-0 xl:${marginNo} flex flex-col`}
    >
      <span className="text-xs">{date}</span>
      <GatsbyImage image={image} alt="art images" />
      <h3 className="uppercase font-customFont1 font-extralight w-7/12">
        {title}
      </h3>
      <button className="font-semibold text-left text-xs tracking-tighter">
        LEARN MORE
      </button>
    </div>
  )
}

export default IssuesImages
