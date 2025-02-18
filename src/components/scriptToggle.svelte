<script>
  import { onMount } from 'svelte';

  let isTengwar = $state(false);

  onMount(() => {
    const saved = sessionStorage.getItem('scriptChoice');
    if (saved !== null) {
      isTengwar = JSON.parse(saved);
    }
    updateBodyClass();
  });

  function updateBodyClass() {
    if (isTengwar) {
      document.body.classList.add('tengwar-active');
    } else {
      document.body.classList.remove('tengwar-active');
    }
  }

  function toggleHandler() {
    isTengwar = !isTengwar; // Reassigning triggers reactivity
    sessionStorage.setItem('scriptChoice', JSON.stringify(isTengwar));
    updateBodyClass();
  }
</script>

<label class="switch" style="--sl-select-width: 3em">
  <input type="checkbox" onchange={toggleHandler} checked={isTengwar} />
  <span class="slider round"></span>
</label>

    
<style>
  .switch {
    position: relative;
    display: inline-block;
    width: var(--sl-select-width);
    height: calc(var(--sl-text-base) + 0.25rem);
    border: 0;
    cursor: pointer;
    margin-inline: calc(var(--sl-select-width)*0.2) calc(var(--sl-select-width)*0.3);
  }

  .switch input {display:none;}

  .switch:before {
    content: "A";
    position: absolute;
    left: -1em;
    top: calc(var(--sl-text-base) - 1.30rem);
    font-size: var(--sl-text-base);
    font-weight: 600;
    color: var(--sl-color-text-accent);
  }

  .switch:after {
    content: "";
    font-family: 'tengwar';
    position: absolute;
    right: -1em;
    top: calc(var(--sl-text-base) - 1.15rem);
    font-size: var(--sl-text-base);
    color: var(--sl-color-white);
  }

  .switch:has(> input:checked):before {
    color: var(--sl-color-white);
  }

  .switch:has(> input:checked):after {
    color: var(--sl-color-text-accent);
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--sl-color-accent-low);
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: var(--sl-text-base);
    width: var(--sl-text-base);
    left: calc(var(--sl-select-width)*0.1);
    bottom: calc(var(--sl-text-base)*0.1);
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: var(--sl-color-accent-high);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--sl-color-text-accent);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(calc(var(--sl-select-width)));
    -ms-transform: translateX(calc(var(--sl-select-width)));
    transform: translateX(calc(var(--sl-select-width)*0.5));
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: var(--sl-select-width);
  }

  .slider.round:before {
    border-radius: 50%;}
</style>
  