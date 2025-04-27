import ShowLoader from "./ShowLoader";

const page = () => {
  return (
    <div>
      <ShowLoader />
    </div>
  );
};

export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "es" },
    { locale: "de" },
    { locale: "ru" },
    { locale: "zh" },
    { locale: "fr" },
    { locale: "fa" },
    { locale: "ar" },
    { locale: "tr" },
    // Add all supported locales here
  ];
}

export default page;
