<script lang="ts">
  import SelectWalletModal from "../modals/SelectWalletModal.svelte";

  let isOpen: boolean = false;
  function openSelectWalletModal() {
    isOpen = true;
  }
</script>

<div class="btn btn-wide" on:click={openSelectWalletModal}>
  connect ur wallet
</div>

<SelectWalletModal bind:isOpen />
