<script>
</script>

<div class="intro">
	<div class="introText">
		<h1 class="introHeading">
			<strong>shasherazi</strong>
			<br /> here
		</h1>

		<div class="introLinks">
			<p>here's what i do</p>
			<ul class="introList">
				<a href="/Blogs">
					<li class="introListItem">blogs</li>
				</a>
				<a href="/Comics">
					<li class="introListItem">comics</li>
				</a>
				<a href="/Projects">
					<li class="introListItem">projects</li>
				</a>
			</ul>
		</div>
	</div>
	<img class="introMascot" src="./mascot.png" alt="stickman mascot" />
</div>

<style>
	.intro {
		display: flex;
		flex-direction: column;
		margin: 40px 0 0 30px;
	}

	.introHeading {
		font-size: 30px;
		font-weight: 400;
	}

	.introMascot {
		position: absolute;
		inset: 300px 0 0 80px;
		width: 200px;
		height: auto;
		mix-blend-mode: screen;
	}

	.introLinks {
		position: relative;
		font-size: 18px;
	}

	.introList {
		margin-top: -10px;
		color: var(--accent1);
		list-style: none;
		cursor: pointer;
	}

	.introListItem:before {
		content: '>';
		margin-right: 10px;
	}

	@media (min-width: 768px) {
		.intro {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			height: 100vh;
			margin:0 0 0 60px;
		}

		.introHeading {
			font-size: 48px;
		}

		.introLinks {
			font-size: 24px;
		}

		.introMascot {
			position: static;
			width: 450px;
		}

		.introText {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}
</style>
