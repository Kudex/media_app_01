import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "njyzwlvt",
  dataset: "production",
  apiVersion: "2023-06-21",
  useCdn: true,
  token:
    "sky8mhyeDCodVsswrBZqwcsksZQEDGF1C2RBzk41JdfSPPcfZoo2b6EySAODib96lZLv1YDzA6rAI5bwbSQgyxtEdefHaM5kBtOeG3NCjSQz9iF8D7mju8tyTBfLjC0edAr4p8GQ1XX2RfAMEHNiz2eTEbp2FWgIXezm9EGt0QzyY3u2NlCm",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
