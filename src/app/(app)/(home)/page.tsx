import configPromises from "@payload-config";
import { getPayload } from "payload";

export default async function Home() {
  const payload = await getPayload({
    config: configPromises,
  });

  const data = await payload.find({
    collection: "categories",
  });

  return <div>{JSON.stringify(data, null, 2)}</div>;
}
