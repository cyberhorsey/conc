<script lang="ts">
  import type { NFT } from "../domain/nft";

  export let nft: NFT;
</script>

<div class="nft cursor-pointer">
  {nft.name} <br />
  <img src={nft.image} /> <br />
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
