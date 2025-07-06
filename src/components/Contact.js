export default function Contact() {
  return (
    <section className="w-full min-h-screen bg-black flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl bg-black text-white rounded-lg p-8 shadow-xl">
        {/* 🧑‍⚕️ Main Heading */}
        <h2 className="text-4xl font-bold mb-6 text-center">Get in Touch</h2>
        <p className="text-center text-gray-400 mb-10">
          Fill out the form below and Dr. Serena’s clinic will get back to you shortly.
        </p>

        {/* 📝 Contact Form */}
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border border-gray-700 bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full border border-gray-700 bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full border border-gray-700 bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="What brings you here?"
            required
            className="w-full border border-gray-700 bg-gray-800 text-white rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Preferred time to reach you"
            required
            className="w-full border border-gray-700 bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex items-start space-x-3 text-sm">
            <input type="checkbox" required className="mt-1" />
            <label className="text-gray-300">I agree to be contacted</label>
          </div>

          <div className="flex items-start space-x-3 text-sm">
            <input type="checkbox" required className="mt-1" />
            <label className="text-gray-300">I am not a robot</label>
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="border border-white text-white font-medium px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        {/* 📍 Contact Info */}
        <div className="mt-12 text-center text-gray-400 space-y-2 text-sm">
          <p><strong>Phone:</strong> (323) 555-0192</p>
          <p><strong>Email:</strong> serena@blakepsychology.com</p>
          <p><strong>Address:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</p>
        </div>
      </div>
    </section>
  );
}
