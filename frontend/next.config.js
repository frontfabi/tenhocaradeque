/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost", "via.placeholder.com", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
