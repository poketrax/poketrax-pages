<script lang="ts">
  import icon from "../assets/icon.png";
  import Github from "../components/Github.svelte";
  import Reddit from "../components/Reddit.svelte";
  import Youtube from "../components/Youtube.svelte";
  import Twitter from "../components/Twitter.svelte";
  import { Link } from "../lib/Link";

  export let links: Link[];
</script>

<div class="h-16 w-screen bg-blue-800 flex items-center">
  <div class="flex-grow" />
  <div class="h-16 w-16">
    <img src={icon} alt="icon" />
  </div>
  <div class="w-4" />
  <a class="text-white text-4xl title-font cursor-pointer" href=".">Pokétrax</a>
  <div class="w-96" />
  {#each links as link}
    <a class="text-white hover:text-red-600 cursor-pointer" href={link.link}
      >{link.name}
    </a>
    <div class="w-4" />
  {/each}
  <a href="https://github.com/poketrax/PokeTrax">
    <Github/>
  </a>
  <div class="w-4" />
  <a href="https://www.reddit.com/r/poketraxapp/">
    <Reddit/>
  </a>
  <div class="w-4" />
  <a href="https://www.youtube.com/channel/UCDGebTpvhiRCy3Aw6_CDylg">
    <Youtube/>
  </a>
  <div class="w-4" />
  <a href="https://twitter.com/poketrax_app">
    <Twitter/>
  </a>
  <div class="flex-grow" />
</div>
