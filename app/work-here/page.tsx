import { redirect } from "next/navigation";

export const metadata = {
  title: "Work in Sterling | Connect Sterling",
  description:
    "Sterling's business momentum is now part of The Sterling Story on Connect Sterling.",
};

export default function WorkHerePage() {
  redirect("/the-sterling-story");
}