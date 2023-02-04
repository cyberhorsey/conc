<script>
  import wallet from "../store/wallet";
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">cantos</a>
  </div>
  <div class="flex-none">
    {#if $wallet}
      {$wallet.address}
    {/if}
  </div>
</div>
