<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Main from "./Main.svelte";
  import Install from "./Install.svelte";
  let basepath = "/poketrax-pages/"
  let url = "";
</script>

<Router url={url} basepath={basepath}>
  <div>
    <Route path="install" >
      <Install />
    </Route>
    <Route path="/">
      <Main />
    </Route>
  </div>
</Router>

<style>
</style>
