import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwind from "@astrojs/tailwind";
import basicSsl from '@vitejs/plugin-basic-ssl';
import vercel from "@astrojs/vercel/serverless";
const env = loadEnv("", process.cwd(), 'STORYBLOK');
console.log(env);


// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      page: 'storyblok/Page',
      feature: 'storyblok/Feature',
      grid: 'storyblok/Grid',
      teaser: 'storyblok/Teaser',
      Header: 'storyblok/Header',
      Navigations: 'storyblok/Homepages',
      Categories: 'storyblok/Categories',
      About: 'storyblok/Homepages',
      Pages: 'storyblok/Homepages',
      Logo: 'storyblok/logo',
      Banner: 'storyblok/Banner',
      Blog: 'storyblok/Blog',
      PopularPosted: 'storyblok/PopularPosted',
      TopAuthors: 'storyblok/TopAuthors',
      Authors: 'storyblok/Authors',
      Typesofcategories: 'storyblok/Typesofcategories'
    },
    apiOptions: {
      region: "EU"
    }
  }), tailwind()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  },
  output: "server",
  adapter: vercel()
});