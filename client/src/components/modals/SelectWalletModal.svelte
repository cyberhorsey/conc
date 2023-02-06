<script lang="ts">
  import fetchCantos from "../../utils/fetchCantos";
  import connectMetamask from "../../wallet/connectMetamask";
  import Modal from "./Modal.svelte";
  import { signer } from "../../store/signer";
  import nfts from "../../store/nfts";

  export let isOpen: boolean = false;

  async function connect(fn: () => Promise<void>) {
    await fn();
    isOpen = false;
    const cantos = await fetchCantos($signer, await $signer.getAddress());
    nfts.set(cantos);
  }
</script>

<Modal title="Select Wallet" bind:isOpen>
  <div class="flex flex-col justify-between">
    <button
      class="btn btn-wide"
      on:click={async () => await connect(connectMetamask)}>Metamask</button
    >
    <br />
  </div>
</Modal>
