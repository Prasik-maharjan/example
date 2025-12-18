import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded mb-2">
      <button
        className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{title}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="px-4 py-2 bg-white">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default function ReturnPolicy() {
  const items = [
    {
      title: "What is your return policy?",
      content: "You can return products within 30 days.",
    },
    {
      title: "Do you ship internationally?",
      content: "Yes, we ship worldwide.",
    },
    {
      title: "How can I track my order?",
      content:
        "After placing your order, you will receive a tracking number via email.",
    },
  ];
  return (
    <div className="">
      <div className="relative w-full h-96">
        <img src="image.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg">Home / Contact</p>
        </div>
      </div>

      {/* / */}
      <div className="">
        <div className="flex justify-between m-16">
          <div>
            <h1 className="text-xl">Store Location</h1>
            <p>Main Street, City, Country</p>
          </div>
          <div>
            <h1 className="text-xl">Call Us Directly</h1>
            <p>+1 (555) 123-4567</p>
          </div>
          <div>
            <h1 className="text-xl">Send Us Message</h1>
            <p>contact@example.com</p>
          </div>
          <div>
            <h1 className="text-xl">Work Hours</h1>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
        <div className="m-16 flex justify-between">
          <div>
            <h1 className="text-2xl">Looking for support?</h1>
            <p>Let us know how we can assist you. </p>
          </div>
          <div>
            <button className="bg-blue-500 text-white px-5 py-2 rounded">
              Inquiry
            </button>
          </div>
        </div>
        <div className="w-full">
          <iframe
            title="Google Map"
            width="100%"
            height="400"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Patan+(Portfolio)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps systems</a>
          </iframe>
        </div>
        <div className="m-16 flex">
          <div className="flex-1">
            <h1 className="text-2xl mb-4">Frequently Asked Questions</h1>
          </div>
          <div className="flex-[2] w-full">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
