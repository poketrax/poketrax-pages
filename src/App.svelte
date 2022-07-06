<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Main from "./Main.svelte";
  import Install from "./Install.svelte";
  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="install">
      <Install />
    </Route>
    <Route path="/">
      <Main />
    </Route>
  </div>
</Router>

<style>
</style>
