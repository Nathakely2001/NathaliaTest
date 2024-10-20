"use client";
import React from "react";
import { ThemeProvider } from "@/lib/ThemeContext";
import Home from "./Home";

const HomeProvider = () => {
  return (
    <ThemeProvider>
     <Home/>
     
    </ThemeProvider>
  );
};

export default HomeProvider;
