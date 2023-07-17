import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import { getPosts } from '../utils/mdx-utils';

export default function Contact({ globalData }) {
  async function handleSubmit(event) {
    const formData = new FormData(form);
    event.preventDefault();
    let object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    let json = JSON.stringify(object);
    result.innerHTML = 'Please wait...';

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status === 200) {
          result.innerHTML = json.message;
          result.classList.remove('text-gray-500');
          result.classList.add('text-green-500');
        } else {
          console.log(response);
          result.innerHTML = json.message;
          result.classList.remove('text-gray-500');
          result.classList.add('text-red-500');
        }
      })
      .catch((error) => {
        console.log(error);
        result.innerHTML = 'Something went wrong!';
      })
      .then(function () {
        form.reset();
        setTimeout(() => {
          result.style.display = 'none';
        }, 5000);
      });
  }

  return (
    <Layout>
      <SEO title={'Contact Us'} description={''} />
      <Header name={globalData.name} />
      <main className="w-full">
        <div className="flex items-center min-h-screen">
          <div className="container mx-auto">
            <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
              <div className="text-center">
                <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-500">
                  Contact Us
                </h1>
                <p className="text-gray-400 dark:text-gray-400">
                  Fill up the form below to send us a message.
                </p>
              </div>
              <div className="m-7">
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  id="form"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="c30ba35a-814f-4071-aeb2-0e6f2305dc66"
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value="New Submission from Web3Forms"
                  />
                  <input
                    type="checkbox"
                    name="botcheck"
                    id=""
                    className="hidden"
                  />

                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Bruce Wayne"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="bruce@wayneenterprises.inc"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Your Message
                    </label>

                    <textarea
                      rows="5"
                      name="message"
                      id="message"
                      placeholder="Your Message"
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                    >
                      Send Message
                    </button>
                  </div>
                  <p
                    className="text-base text-center text-gray-400"
                    id="result"
                  ></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
