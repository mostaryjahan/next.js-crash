import Link from "next/link";
import { Button } from "@/components/ui/button";


const About = () => {
  // throw new Error ("Y=This is error");
  return (
    <div className="mt-10 bg-gray-400 p-16">
      <h1>This is about</h1>
      <h2>Go to Mission page</h2>
      <p>
        <Link href="/about/mission">Click here</Link>
      </p>
      <Button asChild>
        <Link href="/about/mission">Mission</Link>
      </Button>
    </div>
  );
};

export default About;
