<script lang="ts">
  import { push } from "svelte-spa-router";
  import type { NFT } from "../domain/nft";
  import nftStore from "../store/nft";

  export let nft: NFT;
  export let select: boolean = true;

  function selectCantos() {
    if (!select) return;
    nftStore.set(nft);
    // push("/endlessRunner");
  }
</script>

<div class="nft {select ? '' : 'cursor-pointer'}" on:click={selectCantos}>
  {nft.name} <br />
  <img class="inline-block" src={nft.image} /> <br />
</div>

<style>
  img {
    height: 100px;
    width: 100px;
  }

  .nft {
    margin: 0 auto;
  }
</style>
