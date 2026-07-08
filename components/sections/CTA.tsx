'use client';

export default function CTA() {
  return (
    <section id="cta" className="py-32 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-5xl md:text-7xl font-black mb-8">
          Let's build <span className="text-primary">together</span>
        </h2>
        <p className="text-xl text-on-surface-variant mb-12">
          Have an exciting project in mind? I'm currently open to new opportunities and freelance work. Let's create something amazing.
        </p>
        <div className="inline-flex p-1 bg-surface-container-highest rounded-full border bento-border">
          <input
            suppressHydrationWarning
            id="cta-email-input"
            type="email"
            placeholder="Enter your email"
            className="bg-transparent border-none focus:ring-0 focus:outline-none px-8 py-4 w-64 md:w-80"
          />
          <button
            suppressHydrationWarning
            id="cta-submit"
            className="bg-primary text-on-primary px-8 py-4 rounded-full font-headline font-bold hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
