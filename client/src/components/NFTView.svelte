<script lang="ts">
  import nft from "../store/nft";
  import Nft from "./NFT.svelte";
  import type { NFT } from "../domain/nft";

  export let nfts: NFT[];
  export let select: boolean = true;
</script>

<div>
  {#if nfts && nfts.length && !$nft}
    {#if select}
      <h1>Select an NFT</h1>
    {/if}
    <div class="grid sm:grid-cols-4 gap-4 p-4">
      {#each nfts as nft}
        <Nft {nft} {select} />
      {/each}
    </div>
  {:else if select && $nft}
    <div class="text-center">
      <Nft nft={$nft} select={false} />
    </div>
  {/if}
</div>
