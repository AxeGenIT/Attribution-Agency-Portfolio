// Image optimization utility for better performance
import Image from 'next/image';

const OptimizedImage = ({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    loading = 'lazy',
    ...props
}) => {
    // Default sizes for responsive images
    const defaultSizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            priority={priority}
            loading={loading}
            sizes={props.sizes || defaultSizes}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            style={{
                objectFit: 'cover',
                ...props.style
            }}
            {...props}
        />
    );
};

export default OptimizedImage;