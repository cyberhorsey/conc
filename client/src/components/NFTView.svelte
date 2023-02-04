<script lang="ts">
  import nfts from "../store/nfts";
  import Nft from "./NFT.svelte";
</script>

<div>
  <h1>Select an NFT</h1>
  {#if $nfts && $nfts.length}
    <div class="grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 p-4">
      {#each $nfts as nft}
        <Nft {nft} />
      {/each}
    </div>
  {:else}
    Loading NFTs...
  {/if}
</div>
