// Step 1: Link the button on homepage to this page DONE
// Step 2: Create a form to fill in information DONE
// Step 3: Have the username / password input DONE
// Step 4: Create a button for login DONE
// Step 5: Create a link to reset password DONE

//Link to code: https://devdojo.com/tailwindcss/playground?component=form-login-simple-dark

function About() {
  return (
    <div class="container min-h-screen max-w-screen-xl grid grid-cols-6 row-8">
      <nav class="col-span-6 space-x-24 shadow md:flex md:items-center: md:justify-between">
        <div>
          <a href="/">
            <span class="text-2xl font-[Poppins]" cursor-pointer>
              SQLCV
            </span>
          </a>
        </div>
        <ul class="md:flex md:items-center">
          <li>
            <a href="#" class="text-xl hover:text-cyan-500 duration-500">
              Upload
            </a>
          </li>
          <li>
            <a href="#" class="text-xl hover:text-cyan-500 duration-500">
              About
            </a>
          </li>
          <li>
            <a href="#" class="text-xl hover:text-cyan-500 duration-500">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/login" class="text-xl hover:text-cyan-500 duration-500">
              Login
            </a>
          </li>
        </ul>
      </nav>
      <div class="col-span-6 row-span-6">
        <div class="flex items-center justify-center h-screen bg-gray-700 sm:px-6">
          <div class="w-full max-w-sm p-4 bg-gray-900 rounded-md shadow-md sm:p-6">
            <div class="flex items-center justify-center">
              <span class="text-xl font-medium text-white">Login</span>
            </div>
            <form class="mt-4">
              <label for="email" class="block">
                <span class="text-sm text-white">Email</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autocomplete="username"
                  class="block w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-800"
                />
              </label>
              <label for="password" class="block">
                <span class="text-sm text-white">Password</span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  autocomplete="username"
                  class="block w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-800"
                />
              </label>
              <div class="flex items-center justify-between mt-4">
                <div>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="text-indigo-600 border form-checkbox focus:outline-none focus:shadow-outline"
                    />
                    <span class="mx-2 text-sm text-white">Remember Me</span>
                  </label>
                </div>
              </div>
              <div>
                <a
                  class="block text-sm text-indigo-200 hover:underline focus:outline-none focus:underline"
                  href="/"
                >
                  Forgot your password?
                </a>
              </div>
              <div class="mt-6">
                <button
                  type="submit"
                  class="w-full px-4 py-2 text-sm text-center text-white bg-indigo-500 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer class="col-span-6 row-span-2 rounded-lg md:flex md:items-center md:justify-between bg-gradient-to-r from-blue-400 to-blue-600">
        footer
      </footer>
    </div>
  );
}

export default About;
