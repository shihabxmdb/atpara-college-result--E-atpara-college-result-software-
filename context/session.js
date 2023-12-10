"use client";
import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";

//import { Category } from "@/app/models/category";
//import { SessionYearContext } from "./session";

export const SessionYearContext = createContext();

export const SessionYearProvider = ({ children }) => {
  const [name, setName] = useState("");
  //for fetching all categories
  const [sessionYears, setSessionYears] = useState([]);
  //for update and delete
  const [updatingSessionYear, setUpdatingSessionYear] = useState(null);

  const createSessionYear = async () => {
    try {
      const response = await fetch(`${process.env.API}/addSession`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      if (response.ok) {
        toast.success("Session created successfully");
        const newlyCreatedSession = await response.json();
        setName("");
        //setCategories([...sessionYears, newlyCreatedSession]);
      } else {
        const errorData = await response.json();
        toast.error(errorData.err);
      }
    } catch (err) {
      console.log("err=>", err);
      toast.error("An error occured while creating a category");
    }
  };

  const fetchSession = async () => {
    try {
      // '/category' not '/categories'
      const response = await fetch(`${process.env.API}/addSession`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSessionYears(data);
    } catch (err) {
      console.log("err=>", err);
      toast.error("Error fetching search results:", err);
    }
  };

  const updateSession = async () => {
    try {
      const response = await fetch(
        `${process.env.API}/addSession/${updatingSessionYear._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatingSessionYear),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const updatedSessionYear = await response.json();
      // Update the categories state with the updated category
      setSessionYears((prevSessionYears) =>
        prevSessionYears.map((s) =>
          s._id === updatedSessionYear._id ? updatedCategory : s
        )
      );
      // Clear the categoryUpdate state
      setUpdatingSessionYear(null);
      toast.success("Session updated successfully");
    } catch (err) {
      console.log("err=>", err);
      toast.error("An error occurred while updating the category");
    }
  };
  const deleteSession = async () => {
    try {
      const response = await fetch(
        `${process.env.API}/addSession/${updatingSessionYear._id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const deletedSession = await response.json();
      // Category deleted successfully, now update the categories state
      setSessionYears((prevSessionYears) =>
        prevSessionYears.filter((s) => s._id !== deletedSession._id)
      );
      // Clear the categoryUpdate state

      setUpdatingSessionYear(null);
      toast.success("Session deleted successfully");
    } catch (err) {
      console.log("err => ", err);
      toast.error("An error occurred while deleting the category");
    }
  };
  return (
    <SessionYearContext.Provider
      value={{
        name,
        setName,
        sessionYears,
        setSessionYears,
        updatingSessionYear,
        setUpdatingSessionYear,

        createSessionYear,

        fetchSession,

        updateSession,
        deleteSession,
      }}
    >
      {children}
    </SessionYearContext.Provider>
  );
};

export const useSessionYear = () => useContext(SessionYearContext);
