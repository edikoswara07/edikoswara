import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../components/Container";
import { useState } from "react";

const Navbar = (props) => {
  const [IsActive, SetIsActive] = useState(false);

  return (
    <div>
      <div className="border-b-2 border-gray-300">
        <Container>
          <div className="flex flex-row justify-between items-center py-3 h-16">
            <div>
              <NavLink
                exact
                to="/"
                activeClassName="text-indigo-700"
                className="font-base text-lg text-indigo-700"
              >
                <span className="text-indigo-900 font-base text-lg">Edi</span>
                Koswara
              </NavLink>
            </div>
            {/*Mobile Menu*/}
            <div className="block sm:hidden">
              <div className="">
                <button
                  className="p-2 bg-indigo-300 rounded-md text-indigo-900 hover:bg-indigo-500 hover:text-indigo-300"
                  onClick={() => SetIsActive(!IsActive)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h8m-8 6h16"
                      className={!IsActive ? "block" : "hidden"}
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      className={IsActive ? "block" : "hidden"}
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="space-x-4 hidden sm:block">
              <NavLink
                exact
                to="/"
                activeClassName="text-indigo-900"
                className="font-base text-xs text-indigo-500"
              >
                Home
              </NavLink>
              <NavLink
                to="/About"
                activeClassName="text-indigo-900"
                className="font-base text-xs text-indigo-500"
              >
                About
              </NavLink>
              <NavLink
                to="/Blog"
                activeClassName="text-indigo-900"
                className="font-base text-xs text-indigo-500"
              >
                Blog
              </NavLink>
              <NavLink
                to="/Works"
                className="font-base text-xs text-indigo-500"
              >
                Works
              </NavLink>
              <NavLink
                to="/Service"
                className="font-base text-xs text-indigo-500"
              >
                Service
              </NavLink>
              <NavLink
                to="/Contact"
                className="font-base text-xs text-indigo-500"
              >
                Contact
              </NavLink>
            </div>
          </div>
          {/*  Mobile menu*/}
          <div
            className={`${
              IsActive ? "block" : "hidden"
            } flex flex-col space-y-2 mb-4 block sm:hidden`}
          >
            <NavLink
              exact
              to="/"
              activeClassName="text-indigo-900"
              className="font-base text-sm text-indigo-500 hover:bg-indigo-500 rounded-md py-2  hover:text-indigo-900"
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              activeClassName="text-indigo-900"
              className="font-base text-sm text-indigo-500 hover:bg-indigo-500 rounded-md py-2 hover:text-indigo-100"
            >
              About
            </NavLink>
            <NavLink
              to="/Blog"
              activeClassName="text-indigo-900"
              className="font-base text-sm text-indigo-500 hover:bg-indigo-500 rounded-md py-2 hover:text-indigo-100"
            >
              Blog
            </NavLink>
            <NavLink
              to="/Works"
              className="font-base text-sm text-indigo-500 hover:bg-indigo-500 rounded-md py-2 hover:text-indigo-100"
            >
              Works
            </NavLink>
            <NavLink
              to="/Service"
              className="font-base text-sm text-indigo-500 hover:bg-indigo-500 rounded-md py-2 hover:text-indigo-100"
            >
              Service
            </NavLink>
            <NavLink
              to="/Contact"
              className="font-base text-sm text-indigo-500 hover:bg-indigo-500 rounded-md py-2 hover:text-indigo-100"
            >
              Contact
            </NavLink>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
