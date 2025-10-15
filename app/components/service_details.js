'use client'
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export default function ServiceeDetails({ service, parentSlug }) {
  // If no service provided, return null
  if (!service) return null;

  // Get features from service data
  const features = service.features || [];

  // Split features into chunks of 5
  const chunkFeatures = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const featureChunks = chunkFeatures(features, 5);

  // Use sectionImages from service data, fallback to default images
  const images = service.sectionImages && service.sectionImages.length > 0
    ? service.sectionImages
    : ["/s1.png", "/s2.png"];

  // Get subtitle - use the subtitle from service prop if available
  const getSubtitle = () => {
    // First check if service has a subtitle property
    if (service.subtitle) {
      return service.subtitle;
    }

    // For services with children, try to get subtitle from first child's details
    if (service.children && service.children.length > 0) {
      const firstChild = service.children[0];
      if (firstChild.details && typeof firstChild.details === 'object' && firstChild.details.title) {
        return firstChild.details.title;
      }
    }
    // Fallback to a default subtitle or service title
    return `What You Will Get with Our ${service.title} Services`;
  };

  return (
    <>
      <div className="container mx-auto py-20">
        {featureChunks.map((chunk, index) => {
          const isEven = index % 2 === 0;
          const imageIndex = index % images.length; // Use modulo to cycle through available images

          return (
            <div key={index} className={`grid lg:grid-cols-2 grid-cols-1 gap-6 items-center ${index > 0 ? 'py-20' : ''}`}>
              {/* Content Section */}
              <div className={`container ${!isEven ? 'lg:order-2' : ''}`}>
                {/* Show subtitle only for the first section */}
                {index === 0 && (
                  <h3 className="text-3xl font-semibold text-white mb-4">
                    {getSubtitle()}
                  </h3>
                )}
                <ul className="space-y-3 text-slate-200">
                  {chunk.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 mr-3 mt-0.5 text-white flex-shrink-0" />
                      <span className="text-xl text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Section */}
              <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                <Image
                  src={images[imageIndex]}
                  alt={`${service.title} - Section ${index + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          );
        })}

        {/* If service has children, display them */}
        {service.children && service.children.length > 0 && (
          <div className="py-20 border-t border-white/10 mt-20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Our {service.title} Services Include:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.children.map((child) => (
                <Link key={child.id} href={`/services/${parentSlug}/${child.slug}`} className="h-full">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-white hover:border-cyan-400/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 flex flex-col h-full">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 mb-4">
                        <img
                          src={child.image || "/placeholder.svg"}
                          alt={child.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h4 className="text-lg font-semibold mb-2 text-center">{child.title}</h4>
                    </div>
                    <p className="text-white/70 text-sm text-center mt-2">
                      {typeof child.details === 'string' ? child.details : child.details?.title || ''}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}