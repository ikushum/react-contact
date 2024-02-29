function ContactForm() {
  return (
    <div className="flex w-full justify-items-center mx-auto">
      <div className="grid grid-cols-12 lg:gap-10 text-white">
        <div className="col-span-12 md:col-span-8">
          <h2 className="font-fancy-title text-5xl mb-5">Contact Form</h2>

          <p className="text-gray-400">
            Book a call or write us to discover our different options. Whether
            it's membership for recurring missions or more "classic" quotes for
            big projects, we have the right package for you.
          </p>

          <form className="my-10">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-3">Full Name</label>

              <input
                className="bg-transparent border w-full focus:outline-none focus:shadow-outline px-5 py-3 font-light"
                type="text"
                placeholder="Input your full name in here"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-3">Email</label>

              <input
                className="bg-transparent border w-full focus:outline-none focus:shadow-outline px-5 py-3 font-light"
                type="email"
                placeholder="Input your Email in here"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-3">Subjects</label>

              <select
                className="bg-transparent border w-full focus:outline-none focus:shadow-outline px-5 py-3 font-light"
                placeholder="Subjects"
                value="Questions"
                onChange={() => {}}
              >
                <option value="Questions">Questions</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-3">Messages</label>

              <textarea
                className="bg-transparent border w-full focus:outline-none focus:shadow-outline px-5 py-3 font-light"
                placeholder="Input your Messages in here"
                rows={5}
              />
            </div>

            <button className="bg-transparent w-full text-white hover:text-primary py-3 px-5 border border-white hover:border-primary tracking-widest">
              SUBMIT
            </button>
          </form>
        </div>

        <div className="hidden lg:block col-span-4">
          <img src="public/contact-page-image.svg" />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
