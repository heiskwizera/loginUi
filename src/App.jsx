import {FieldForm,Header,ActionButton} from "./components";

function App() {
  return (
    <div id="page-container" class="flex flex-col mx-auto w-full min-h-screen bg-gray-100">
      <main id="page-content" class="flex flex-auto flex-col max-w-full">
        <div class="min-h-screen flex items-center justify-center relative overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full">
          <div class="pattern-dots-md text-gray-300 absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 transform translate-x-16 translate-y-16"></div>
          <div class="pattern-dots-md text-gray-300 absolute bottom-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-16 -translate-y-16"></div>
    
          <div class="py-6 lg:py-0 w-full md:w-8/12 lg:w-6/12 xl:w-4/12 relative">
           <Header companyName={"CODENET-BTS"} headerTitle={"Welcome, please sign in to your dashboard"} />
      
            <div class="flex flex-col rounded shadow-sm bg-white overflow-hidden">
              <div class="p-5 lg:p-6 grow w-full">
                <div class="sm:p-5 lg:px-10 lg:py-8">
                  <form onsubmit="return false;" class="space-y-6">
                  <FieldForm fieldName={"Email"} fieldPlaceholder={"Enter your email"} />
                  <FieldForm fieldName={"Password"} fieldPlaceholder={"Enter your password"} />
                    <div>
                   <ActionButton buttonName={"Login"} />
                      <div class="space-y-2 sm:flex sm:items-center sm:justify-between sm:space-x-2 sm:space-y-0 mt-4">
                        <label class="flex items-center">
                          <input type="checkbox" class="border border-gray-200 rounded h-4 w-4 text-indigo-500 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                          <span class="ml-2">
                            Remember me
                          </span>
                        </label>
                        <a href="javascript:void(0)" class="inline-block text-indigo-600 hover:text-indigo-400">Forgot Password?</a>
                      </div>
                    </div>
                  </form>          
                </div>
              </div>        
              <div class="py-4 px-5 lg:px-6 w-full text-sm text-center bg-gray-50">
                Don’t have an account yet?
                <a class="font-medium text-indigo-600 hover:text-indigo-400" href="javascript:void(0)">Join us today</a>
              </div>
            </div>
    
            <div class="text-sm text-gray-500 text-center mt-6">
              <a class="font-medium text-indigo-600 hover:text-indigo-400" href="#" target="_blank">BETAP</a> by <a class="font-medium text-indigo-600 hover:text-indigo-400" href="#" target="_blank">CBS</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
