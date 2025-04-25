import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const clientLogos = [
    "/client-1.svg",
    "/client-2.svg",
    "/client-3.svg",
    "/client-4.svg",
    "/client-5.svg",
    "/client-6.svg",
    "/client-3.svg",
  ];
  const Services = [
    {
      title: "Sales Acceleration",
      description: "Increase your sales performance with targeted strategies",
      icon: "/sales.svg",
    },
    {
      title: "Margin Optimization",
      description: "Improve your profit margins through efficient processes",
      icon: "/margin.svg",
    },
    {
      title: "Customer Retention",
      description: "Reduce churn with strategic customer retention initiatives",
      icon: "/customer.svg",
    },
    {
      title: "Leadership Training",
      description: "Develop strong leadership skills within your organization",
      icon: "/leadership.svg",
    },
  ];
  const Blog = [
    {
      title: "Creating Streamlined Safeguarding Processes with Moose Group",
      image: "/blog-1.svg",
      url: "/blog/1",
    },
    {
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      image: "/blog-2.svg",
      url: "/blog/2",
    },
    {
      title: "Revamping the Membership Model with Triathlon Australia",
      image: "/blog-3.svg",
      url: "/blog/3",
    },
  ];
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-[#233F30] text-[#E6D5B8] py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-[#D2BA8A]">
            Strategic Growth.
            <br />
            Real Results
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-4xl text-[#D2BA8A]">
            We help businesses increase Sales, improve metrics, and retain
            customers through expert led systems and coaching.
          </p>
          <button className="bg-[#D2BA8A] text-[#233F30] px-6 md:px-8 py-3 rounded hover:bg-opacity-90 transition-all">
            Schedule a Call
          </button>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-6 bg-[#FBF7EB] " id="about">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <Image
              src="/who-we-are.svg"
              alt="Business Meeting"
              width={1000}
              height={1000}
              className="rounded-lg w-[305px] h-[195px]"
            />
            <div className="w-full">
              <h2 className="text-2xl md:text-[25px] font-semibold mb-2">
                Who We are?
              </h2>
              <p className="text-gray-600 mb-4 text-[12px]  max-w-[420px]">
                Our network of experienced professionals is dedicated to
                empowering your business. With decades of collective expertise,
                we provide tailored processes, tools, and coaching to drive
                sustainable growth and profitability.
              </p>
              <button className="bg-[#D2BA8A] text-black px-6 py-2 rounded hover:bg-opacity-90 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-8 bg-[#EFE9DA]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center">
            Our Clients
          </h2>
          <p className="text-center mb-4">
            We have been working with some Fortune 500+ clients
          </p>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-6 md:gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={logo}
                  alt="Client Logo"
                  width={1000}
                  height={1000}
                  className="w-12 h-12 md:w-16 md:h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-8 bg-[#FBF7EB] " id="services">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4  text-center">
            Our Services
          </h2>
          <p className="text-center  text-[12px]">
            We are committed to helping businesses thrive through our
            comprehensive suite of expert-led solutions. Our proven approach
            focuses on four key areas:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8  px-12">
            {Services.map((service, index) => (
              <div
                key={index}
                className="text-center bg-[#EFE9DA] rounded-lg p-4 shadow-lg pb-8"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={100}
                    height={100}
                    className="w-[45px] h-[45px]"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 max-w-[100px] mx-auto">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-[12px] pb-4">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-[#EFE9DA]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Helping a local
              </h2>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#C8A27A]">
                business reinvent itself
              </h2>
              <p className="mt-4 text-gray-600">
                We reached here with our hard work and dedication
              </p>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-6 md:gap-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/members.svg"
                  alt="Members Icon"
                  width={100}
                  height={100}
                  className="w-[30px] h-[30px] md:w-[34px] md:h-[34px]"
                />
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                    2,245,341
                  </h3>
                  <p className="text-gray-600 text-[11px] md:text-[12px]">
                    Members
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/club.svg"
                  alt="Clubs Icon"
                  width={100}
                  height={100}
                  className="w-[30px] h-[30px] md:w-[34px] md:h-[34px]"
                />
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                    46,328
                  </h3>
                  <p className="text-gray-600 text-[11px] md:text-[12px]">
                    Clubs
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/booking.svg"
                  alt="Bookings Icon"
                  width={100}
                  height={100}
                  className="w-[26px] h-[30px] md:w-[30px] md:h-[34px]"
                />
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                    828,867
                  </h3>
                  <p className="text-gray-600 text-[11px] md:text-[12px]">
                    Event Bookings
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/payment.svg"
                  alt="Payments Icon"
                  width={100}
                  height={100}
                  className="w-[30px] h-[30px] md:w-[34px] md:h-[34px]"
                />
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                    1,926,436
                  </h3>
                  <p className="text-gray-600 text-[11px] md:text-[12px]">
                    Payments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-8 bg-[#FBF7EB]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 md:mb-12">
            Blogging helps with connecting with your customers
          </h2>
          <p className="text-center mb-8 md:mb-12">
            The NextGend blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {Blog.map((blog, index) => (
              <Link
                key={index}
                href={blog.url}
                className="relative group block overflow-visible rounded-lg  h-[400px]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-6 bg-[#EFE9DA] rounded-lg shadow-lg">
                  <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#717171]">
                    {blog.title}
                  </h3>
                  <span className="text-[#000000] font-semibold hover:underline inline-flex items-center">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-[#EFE9DA]">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 md:mb-8 md:max-w-[500px] mx-auto">
            Let's Transform your  Business!
          </h2>
          <button className="bg-[#D2BA8A] text-[#172b20] px-6 md:px-8 py-3 rounded hover:bg-opacity-90 transition-all">
            <Link href="/contact">Get in Touch →</Link>
          </button>
        </div>
      </section>
    </div>
  );
}
