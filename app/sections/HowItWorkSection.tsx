import Image from "next/image";

const HowItWorkSection = () => {
  const steps = [
    {
      id: 1,
      title: "Step 1: Create an Account",
      description:
        "Sign up to start managing your bookings and explore amazing rooms.",
      image: "/how_it_work/sign_up.png", // Replace with actual image path
    },
    {
      id: 2,
      title: "Step 2: Add Room Information",
      description:
        "Provide room details, including photos and amenities, for easy booking.",
      image: "/how_it_work/create.png", // Replace with actual image path
    },
    {
      id: 3,
      title: "Step 3: Check Bookings",
      description: "Review and manage your bookings in one place, hassle-free.",
      image: "/how_it_work/booking.png", // Replace with actual image path
    },
  ];

  return (
    <div className="container mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-2">How it work</h2>
      <p className="text-gray-500 mb-12">Simplify your booking process</p>
      <div className="relative flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-12">
        <svg
          className="absolute w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 20"
        >
          <path
            d="M0,10 Q50,0 100,10 T200,10"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="0.5"
          ></path>
        </svg>

        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center z-10">
            <Image
              alt="Illustration of a coconut drink representing saving more"
              className="mb-4 w-30"
              src={step.image}
              width={150}
              height={150}
            />
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-500">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorkSection;
