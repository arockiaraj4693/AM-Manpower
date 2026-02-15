import React from "react";
import { Link } from "react-router-dom";

const JOBS = [
  {
    title: "Welder",
    slug: "welder",
    desc: "Skilled welder for industrial and construction tasks.",
    img: "https://images.unsplash.com/photo-1581092918363-1b7fb9b8f9b0?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Fitter",
    slug: "fitter",
    desc: "Experienced fitter for mechanical assemblies.",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Fabricator",
    slug: "fabricator",
    desc: "Metal fabricator for bespoke structures and parts.",
    img: "https://images.unsplash.com/photo-1523293832122-0a4a9a7a2c1f?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Helper",
    slug: "helper",
    desc: "General helper for site assistance and logistics.",
    img: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "House Keeping",
    slug: "house-keeping",
    desc: "House keeping staff for residential and commercial properties.",
    img: "https://images.unsplash.com/photo-1581579180385-1a9a2b8a2c12?auto=format&fit=crop&w=800&q=60",
  },
];

export default function Jobs() {
  return (
    <div>
      <h2>Available Jobs</h2>
      <div className="grid">
        {JOBS.map((j) => (
          <div key={j.slug} className="card">
            <img src={j.img} alt={j.title} />
            <div className="card-body">
              <h5>{j.title}</h5>
              <p>{j.desc}</p>
              <Link
                to={`/apply?job=${encodeURIComponent(j.title)}`}
                className="btn btn-lg btn-primary d-flex align-items-center gap-2 shadow-sm"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Apply Now</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
