import { appConfig } from "../../../config/appConfig";
const HeroSection = () => {
  return (
    <section className="text-center py-32 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
        {appConfig.tagline}
        <span className="text-blue-600"> Work, Money & Ideas</span>
      </h1>

      <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-10">
        {appConfig.description}
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="/login"
          className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Get Started
        </a>

        <a
          href="#modules"
          className="px-8 py-4 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition"
        >
          Explore Features
        </a>
      </div>
    </section>
  );
};
export default HeroSection;
