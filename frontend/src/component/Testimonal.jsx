const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "This is the best software I've ever used! It has greatly improved my productivity and made my life easier.",
      company: "Tech Solutions Inc.",
      imgSrc: "src/assets/im1.png", // Placeholder for image
    },
    {
      name: "Jane Smith",
      feedback:
        "Excellent customer support and an easy-to-use interface. Highly recommend it to anyone looking for quality software.",
      company: "Innovatech",
      imgSrc: "src/assets/im2.png", // Placeholder for image
    },
    {
      name: "Michael Johnson",
      feedback:
        "Great experience overall. The team was super helpful, and the software works flawlessly.",
      company: "FutureTech",
      imgSrc: "src/assets/im3.png", // Placeholder for image
    },
  ];

  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 lg:px-20">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="text-center md:text-left">
            <img
              src={testimonial.imgSrc}
              alt={testimonial.name}
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-300" // Placeholder style
            />
            <p className="text-gray-600 mb-4 italic">
              "{testimonial.feedback}"
            </p>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
