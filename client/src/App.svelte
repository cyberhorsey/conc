<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import { wrap } from "svelte-spa-router/wrap";

  const routes = {
    "/": wrap({
      component: Home,
      props: {},
    }),
  };
</script>

<Router {routes} />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
