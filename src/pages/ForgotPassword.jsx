import { useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { Link } from "react-router-dom"


function ForgotPassword() {
  const [email, setEmail] = useState("")  

  const handleOnSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="max-w-[500px] p-4 lg:p-8">
          <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
            Reset your password
          </h1>
          
          <form onSubmit={handleOnSubmit}>
              <label className="w-full">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  Email Address <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="form-style w-full"
                />
              </label>

              
                <button
                  type="submit"
                  className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
                >
                  <Link to="/resetpassword">
                    Sumbit
                  </Link>
                </button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/login">
              <p className="flex items-center gap-x-2 text-richblack-5">
                <BiArrowBack /> Back To Login
              </p>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default ForgotPassword