<script lang="ts">
  import { ethers } from "ethers";
  import { create_bidirectional_transition } from "svelte/internal";
  import NFT_ABI from "../../abi/NFT_ABI";
  import { amount } from "../../store/amount";
  import { signer } from "../../store/signer";

  let minted: boolean = false;
  let txHash: string = "";
  let message: string = "";

  async function mint() {
    const chainId = await $signer.getChainId();
    if (chainId !== 7700) {
      message =
        "On wrong chain, go to ur metamask and change it to canto then refresh the page cause i didnt do the .on accounts changed thing, jesus christ";
      return;
    }
    const contract = new ethers.Contract(
      import.meta.env.VITE_CONTRACT_URL,
      NFT_ABI,
      $signer
    );
    const tx = await contract.mint(2);
    txHash = tx.hash;
    minted = true;
  }
</script>

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
