import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image, style }) => {
  const { url, alternativeText, width, height } = image.data.attributes

  // const loader = () => {
  //   return getStrapiMedia(image)
  // }

  return (
    <NextImage
      // loader={loader}
      layout="responsive"
      width={width}
      height={height}
      objectFit="contain"
      src={'https://via.placeholder.com/300.png/09f/fff'}
      // src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  )
}

export default Image
