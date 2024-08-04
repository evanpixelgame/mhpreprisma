// app/page.tsx
import { Button } from "@/components/ui/button";
import Container from "@/components/global/Container";
import PageWrapper from "@/components/global/PageWrapper";
import backgroundImage from "@/public/stockphototest4.jpg";

const HomePage = () => {
  return (
    <>
      <PageWrapper img={backgroundImage} className="bg-green-300">
        <Container>
          <div className="relative z-10 p-8">
            <h2>Home Page</h2>
            <Button className="capitalize bg-blue-500">Button</Button>
          </div>
        </Container>
      </PageWrapper>
    </>
  );
};

export default HomePage;
