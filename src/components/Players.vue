<template>
  <div >
		<ul>
			<li v-bind:key="player.name" v-for="player in players">
				{{player.name}}
			</li>
		</ul>
  </div>
</template>

<script>

export default {
  name: 'Players',
  props: ['players']
}
</script>

<style scoped>

</style>
