import { NavLink } from "react-router-dom";

const BlogsPage2 = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-[80%] max-w-[800px] flex-col gap-5">
        <NavLink to="/blogs/page2/11">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/11/1.webp"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
                How Our Personal Injury Law Firm Has Successfully Handled Car
                Accident Cases
              </h1>
              <p className="text-justify line-clamp-3">
                Would you like to partner with the best choice personal injury
                law firm? With a strong track record in handling car accident
                cases, we've successfully helped clients get the compensation
                they deserve.
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/blogs/page2/12">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/12/1.webp"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
                The Top 10 Questions to Ask Your Personal Injury Lawyer Before Hiring
              </h1>
              <p className="text-justify line-clamp-3">
                Wondering what to ask a personal injury lawyer? Get the top 10 must-ask questions to help you find and choose the best attorney for your case.
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/blogs/page2/13">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/13/1.webp"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
                How to Protect Your Rights After a Workplace Injury
              </h1>
              <p className="text-justify line-clamp-3">
                Here’s a step-by-step expert guide on how to protect your rights, what you need to do to protect yourself, and how a workplace injury lawyer can help you get compensation.
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/blogs/page2/14">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/14/1.webp"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
                Essential Facts About Personal Injury Law: What You Need to Know Before Filing a Claim
              </h1>
              <p className="text-justify line-clamp-3">
                Learn the key elements of personal injury law before filing your claim | Discover how a personal injury lawyer can help you maximize compensation for accidents, negligence, and wrongful death.
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/blogs/page2/15">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/15/1.webp"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
                Maximum Compensation Decoded: How a Personal Injury Lawyer Can Turn Your Claim into Success
              </h1>
              <p className="text-justify line-clamp-3">
                Discover how a personal injury lawyer can strategically maximize your compensation by navigating complex legal processes | evaluating all damages, and advocating fiercely for your rights after an accident.
              </p>
            </div>
          </div>
        </NavLink>
        
      </div>
    </div>
  );
}

export default BlogsPage2;