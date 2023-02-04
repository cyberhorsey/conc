<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import { wrap } from "svelte-spa-router/wrap";

  import { Buffer } from "buffer";
  import Process from "process";
  globalThis.process = Process;
  globalThis.Buffer = Buffer;

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
