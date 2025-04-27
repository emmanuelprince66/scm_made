import Home from "./Home";

const page = () => {
  return (
    <>
      <Home />
    </>
  );
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }]; // All your locales
}

export default page;
