"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const authenticateUser = (formData) => {
  // console.log("email", email);
  const email = formData.get("email");
  if (email === "demo@demo.com") {
    cookies().set("userId", 1);
    redirect("/albums");
  } else {
    redirect("/");
  }
};
