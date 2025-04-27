import Admin from "./Admin";
const page = () => {
  return (
    <div>
      <Admin />
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
