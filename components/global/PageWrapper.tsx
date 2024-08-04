// components/global/PageWrapper.tsx
import React from "react";
import Image, { StaticImageData } from "next/image";

type PageWrapperProps = {
  children: React.ReactNode;
  className?: string; // Allow custom classes for styling
  img?: StaticImageData; // Image prop
};

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  className,
  img,
}) => {
  return (
    <div className={`relative min-h-screen ${className}`}>
      {img && (
        <div className="absolute inset-0 z-0">
          <Image
            src={img}
            alt="Background Image"
            // layout="fill"
            className="object-cover inset-0 w-full h-full"
          />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default PageWrapper;
