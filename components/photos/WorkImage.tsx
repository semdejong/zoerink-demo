import Image from "next/image";
import type { Photo } from "@/lib/photos";

type WorkImageProps = {
  photo: Photo;
  sizes: string;
  className?: string;
  preload?: boolean;
  framed?: boolean;
};

/**
 * Echte foto's. 640px-bronnen worden nooit breder dan hun eigen breedte getoond.
 */
export default function WorkImage({ photo, sizes, className = "", preload = false, framed = false }: WorkImageProps) {
  if (framed) {
    return (
      <span className={`photo-frame w-full ${className}`} style={{ maxWidth: photo.width }}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover"
        />
      </span>
    );
  }

  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      sizes={sizes}
      preload={preload}
      className={className}
      style={{ width: "100%", maxWidth: photo.width, height: "auto" }}
    />
  );
}
