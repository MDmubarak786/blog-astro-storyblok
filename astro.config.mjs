import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwind from "@astrojs/tailwind";
import basicSsl from '@vitejs/plugin-basic-ssl';
const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    accessToken: 'PWGGeqMrf9zmYZYrSU4MWgtt',
    components: {
      page: 'storyblok/Page',
      feature: 'storyblok/Feature',
      grid: 'storyblok/Grid',
      teaser: 'storyblok/Teaser',
      Header: 'storyblok/Header',
      Navigations: 'storyblok/Homepages',
      Categories: 'storyblok/Homepages',
      About: 'storyblok/Homepages',
      Pages: 'storyblok/Homepages',
      Logo:'storyblok/logo',
      Banner:'storyblok/Banner',
      Blog:'storyblok/Blog',
      PopularPosted:'storyblok/PopularPosted',
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
  }
});