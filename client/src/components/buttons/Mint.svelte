<script lang="ts">
  import { ethers } from "ethers";
  import { onMount } from "svelte";
  import NFT_ABI from "../../abi/NFT_ABI";
  import { amount } from "../../store/amount";
  import { signer } from "../../store/signer";
  import axios from "axios";

  let minted: boolean = false;
  let txHash: string = "";
  let message: string = "";
  let cantoImages: string[] = [];

  async function mint() {
    const chainId = await $signer.getChainId();
    if (chainId !== 7700) {
      message =
        "On wrong chain, go to ur metamask and change it to canto then refresh the page cause i didnt do the .on accounts changed thing, fml";
      return;
    }
    const contract = new ethers.Contract(
      import.meta.env.VITE_CONTRACT_URL,
      NFT_ABI,
      $signer
    );
    const tx = await contract.mint(3);
    txHash = tx.hash;
    minted = true;
  }
</script>

<div class="grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 p-4">
  {#each cantoImages as cantoImage}
    <img style="height: 80px; width: 80px;" src={cantoImage} />
  {/each}
</div>
{#if message}
  <h2 style="color:red;">{message}</h2>
{/if}

{#if $amount}
  there are this many minted: {$amount} out of 888
{/if}

{#if !minted}
  <div class="btn btn-wide" on:click={async () => await mint()}>LFG</div>
{:else}
  u did it, nice one m8. u got 3 cantos. txHash: {txHash}
{/if}
