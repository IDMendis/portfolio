export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 dark:bg-neutral-900 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <p className="mb-6 text-gray-500">
          Feel free to reach out or send me a message 💌
        </p>

        <form className="grid gap-4">
          <input placeholder="Your Email" className="p-3 rounded bg-white dark:bg-black border" />
          <textarea placeholder="Your Message" className="p-3 rounded bg-white dark:bg-black border" />
          <button className="bg-black dark:bg-white text-white dark:text-black py-3 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
