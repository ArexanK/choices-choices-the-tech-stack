import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Title from "../components/Title";
import { client } from "../models/contentful.server";
import { motion } from 'framer-motion';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export async function loader() {
	const talks = await client.getPromise();
	const page = await client.getPage("Promise")
	return json({promise,page});
}

export const meta= ({data}) =>{
	const {title} = data.page.seoMetadata
	return {
		title
	}
}

export default function Promise() {
    const {promise} = useLoaderData();
    return (
        <div className="px-4 sm:px-48">
				<Title title="Promise"/>
				<div className="grid gap-6 sm:grid-cols-3">
					{talks.map((item) => {
						const {sys, description, title,image, story} = item;
						return (
							<a
								href={link}
								key={sys.id}
							>
								<div className="mt-4 text-lg dark:text-gray-300">
      {documentToReactComponents(description.json,richTextRenderOptions)}
      </div>
							</a>
						);
					})}
				</div>
			</div>
    )
}