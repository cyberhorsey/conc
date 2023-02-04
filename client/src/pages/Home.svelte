<script lang="ts">
  import ConnectWallet from "../components/buttons/ConnectWallet.svelte";
  import Mint from "../components/buttons/Mint.svelte";
  import Navbar from "../components/Navbar.svelte";
  import wallet from "../store/wallet";
</script>

<Navbar />

<div
  class="hero min-h-screen"
  style="background-image: url('./bg.gif'); background-repeat: repeat;"
>
  <div class="hero-overlay bg-opacity-60" />
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">cantos on cantos</h1>
      <p class="mb-5">ready?</p>
      {#if !$wallet}
        <ConnectWallet />
      {:else}
        <Mint />
      {/if}
    </div>
  </div>
</div>
