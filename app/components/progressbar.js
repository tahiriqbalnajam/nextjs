'use client';
import { useRouter } from "next/router";

const MyComponent = () => {
  const router = useRouter();

  const handleNavigation = () => {
    // Programmatically navigate to a different page
    router.push("/other-page");
  };

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={handleNavigation}>Go to Other Page</button>
    </div>
  );
};

export default MyComponent;
