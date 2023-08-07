<template>
	<div class="layout">
		<SideNav />
		<div class="content">
			<HeaderTab></HeaderTab>
			<main>
				<slot />
			</main>
			<FooterTab></FooterTab>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		HeaderTab,
		FooterTab,
	},
	layout: 'default',
};
</script>

<style></style>
