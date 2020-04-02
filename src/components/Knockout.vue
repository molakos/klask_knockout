<template>
	<div>
		<div v-bind:key="match[index]" v-for="(match, index) in tournament.matches">
			<Matchup v-bind:todo="match" v-on:score-on-match="$emit('scrore', match)"/>
		</div>
	</div>
</template>

<script>
import Matchup from './Matchup';

export default {
	name: 'Knockout',
	components: {
		Matchup
	},
	props: ['tournament']
}
</script>

<style scoped>

</style>