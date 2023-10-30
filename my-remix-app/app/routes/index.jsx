import { TextLoop } from "react-text-loop-next";
import { motion } from "framer-motion";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from "../models/contentful.server";
import { MetaFunction } from "@remix-run/node";

export async function loader() {
  return json(await client.getPage("Where The Legends Begin.")); //logo van de homepage
}


export default function Index() {
  const { title, rolesCollection, paragraphsCollection } = useLoaderData();

  // haal data uit rolesCollection
  const roles = {};
  rolesCollection.items.forEach((role) => {
    Object.assign(roles, Object.fromEntries([Object.values(role)]));
  });

  // haal data uit paragraphsCollection  (hetzelfde bij roles)
  const paragraphs = {};
  paragraphsCollection.items.forEach((paragraph) => {
    Object.assign(paragraphs, Object.fromEntries([Object.values(paragraph)]));
  });

  return (
    <div className="text-center mt-24 sm:mt-24 dark:text-white">
      <div>
        <h1 className="text-3xl sm:text-6xl">
          <span className="text-primary dark:text-secondary"> {title}</span>
        </h1>
      </div>
      {/* You can use extracted data from links, roles, and paragraphs here */}

      <div></div>
    </div>
  );
}
