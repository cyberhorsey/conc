<script lang="ts">
  import connectMetamask from "../../wallet/connectMetamask";
  import Modal from "./Modal.svelte";

  export let isOpen: boolean = false;

  async function connect(fn: () => Promise<void>) {
    await fn();
    isOpen = false;
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
