"use client";
import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";

//import { Category } from "@/app/models/category";
//import { SessionYearContext } from "./session";

export const ClassContext = createContext();

export const ClassProvider = ({ children }) => {
  const [name, setName] = useState("");
  //for fetching all classes
  const [classes, setClasses] = useState([]);
  //for update and delete class
  const [updatingClass, setUpdatingClass] = useState(null);

  const createClass = async () => {
    try {
      const response = await fetch(`${process.env.API}/addClass`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ className2 }),
      });
      if (response.ok) {
        toast.success("Class created successfully");
        const newlyCreatedClass = await response.json();
        setName("");
        //setCategories([...sessionYears, newlyCreatedSession]);
      } else {
        const errorData = await response.json();
        toast.error(errorData.err);
      }
    } catch (err) {
      console.log("err=>", err);
      toast.error("An error occured while creating a Class");
    }
  };

  const fetchClass = async () => {
    try {
      // '/category' not '/categories'
      const response = await fetch(`${process.env.API}/addClass`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setClasses(data);
    } catch (err) {
      console.log("err=>", err);
      toast.error("Error fetching search results:", err);
    }
  };

  const updateClass = async () => {
    try {
      const response = await fetch(
        `${process.env.API}/addClass/${updatingClass._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatingClass),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const updatedClass = await response.json();
      // Update the categories state with the updated category
      setUpdatingClass((prevClasses) =>
        prevClasses.map((s) => (s._id === updatedClass._id ? updatedClass : s))
      );
      // Clear the categoryUpdate state
      setUpdatingClass(null);
      toast.success("Class updated successfully");
    } catch (err) {
      console.log("err=>", err);
      toast.error("An error occurred while updating the Class");
    }
  };
  const deleteClass = async () => {
    try {
      const response = await fetch(
        `${process.env.API}/addClass/${updatingClass._id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const deletedClass = await response.json();
      // Category deleted successfully, now update the categories state
      setDeleteClass((prevClasses) =>
        prevClasses.filter((s) => s._id !== deletedClass._id)
      );
      // Clear the categoryUpdate state

      setUpdatingClass(null);
      toast.success("Class deleted successfully");
    } catch (err) {
      console.log("err => ", err);
      toast.error("An error occurred while deleting the Class");
    }
  };
  return (
    <ClassContext.Provider
      value={{
        name,
        setName,
        classes,
        setClasses,
        updatingClass,
        setUpdatingClass,

        createClass,

        fetchClass,

        updateClass,
        deleteClass,
      }}
    >
      {children}
    </ClassContext.Provider>
  );
};

export const useClass = () => useContext(ClassContext);
