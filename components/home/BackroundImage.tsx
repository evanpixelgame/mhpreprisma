// pages/index.js
import Image from "next/image"; // Import the Image component
import img from "../public/stockphototest2.jpg"; // Import the image

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Image
        src={img} // Use the imported image
        alt="A descriptive alt text" // Add alt text for accessibility
        width={800} // Set the desired width
        height={600} // Set the desired height
      />
    </div>
  );
}
