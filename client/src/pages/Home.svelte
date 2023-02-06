<script lang="ts">
  import { push } from "svelte-spa-router";
  import ConnectWallet from "../components/buttons/ConnectWallet.svelte";
  import NftView from "../components/NFTView.svelte";
  import { signer } from "../store/signer";
  import nfts from "../store/nfts";
</script>

<div class="max-w-xl">
  <h1 class="mb-5 text-5xl font-bold">cantos on cantos</h1>
  <p class="mb-5">ready?</p>
  {#if !$signer}
    <ConnectWallet />
    <br />
    or
    <br />
    <button class="btn" on:click={() => push("/viewForAddress")}
      >view cantos by address</button
    >
  {:else}
    <NftView nfts={$nfts} />
  {/if}
</div>
