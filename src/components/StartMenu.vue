<style>
.ability {
	cursor: pointer;
	border: 2px solid #4f4f4f;
	border-radius: 4px;
}

.sprite {
	cursor: pointer;
	padding: 3px;
}

.sprite:hover {
	cursor: pointer;
	background-color: #565656;
	padding: 3px;
	border-radius: 2px;
}

.spriteIsSelected {
	cursor: pointer;
	background-color: rgb(103, 141, 255);
	border-radius: 2px;
}
</style>

<template>

<v-app dark>
    <v-container fluid grid-list-xl>
        <v-layout row>
            <v-flex xs12>
                <h2>Welcome to Rotten Soup</h2>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex>
                <h3>Select your hero by clicking on the character you want to play</h3>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex style="padding: 10px" xs4 v-for="(sprite, index) in playerSprites" :key="index">
                <!-- Card representing player class -->
                <v-card style="padding: 25px">
                    <!-- Class name and short description  -->
                    <v-layout row>
                        <div>
                            <h3>{{sprite.name}}</h3>
                            <p>{{sprite.description}}</p>
                        </div>
                    </v-layout>
                    <!--  Class abilities and stats-->
                    <!-- <v-layout row>
                        <div>
                            <p>
                                Abilities
                            </p>
                            <v-flex xs4 v-for="(ability, index) in sprite.abilities" key="index">
                                <v-layout row>
                                    <v-tooltip bottom align-center>
                                        <p class="text-xs-center ma-0" style="max-width: 200px">
                                            {{ability.description}}
                                        </p>
                                        <img
                                            class="ability"
                                            v-bind:src="getSpellSplashArt(ability.school.toLowerCase(), ability.art)"
                                            slot="activator"
                                        />
                                    </v-tooltip>
                                </v-layout>
                            </v-flex>
                        </div>
                    </v-layout> -->
                    <!-- Possible sprites player can choose to play  -->
                    <v-layout row>
                        <h5>
													Characters
												</h5>
                    </v-layout>
                    <v-layout row>
                        <v-flex class="mr-2 ml-2" xs1 v-for="id in sprite.sprites" :key="id">
                          <img v-on:click="selectSprite(id)" v-bind:class="{spriteIsSelected : (selectedSprite === id), sprite : (selectedSprite !== id)}" :src="getPlayerSpriteImage(id)" />
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</v-app>

</template>

<script>
// import { Game } from '@/assets/js/game/Game.js'

export default {
	name: 'start-menu',
	// props: ['Game'],
	data() {
		return {
			selectedSprite: null,
			playerSprites: [
				{
					name: 'Monk',
					description: 'A master of martial arts with special healing abilities',
					abilities: [
						{
							name: 'Magic Dart',
							description: 'A magical dart of energy that deals between 1-8 damage to a target',
							school: 'conjuration',
							art: 'magic_dart'
						}
					],
					stats: {
						hp: 50,
						strength: 1,
						dexterity: 1,
						wisdom: 1
					},
					sprites: [4812, 4453, 3859, 4219]
				},
				{
					name: 'Ninja',
					description: 'A sneaky ninja of a secret order with the ability to stealth',
					abilities: [
						{
							name: 'Magic Dart',
							description: 'A magical dart of energy that deals between 1-8 damage to a target',
							school: 'conjuration',
							art: 'magic_dart'
						}
					],
					stats: {
						hp: 50,
						strength: 1,
						dexterity: 1,
						wisdom: 1
					},
					sprites: [4334, 4814]
				},
				{
					name: 'Knight',
					description: 'A proud knight, sworn to uphold chivalric values',
					abilities: [
						{
							name: 'Magic Dart',
							description: 'A magical dart of energy that deals between 1-8 damage to a target',
							school: 'conjuration',
							art: 'magic_dart'
						}
					],
					stats: {
						hp: 50,
						strength: 1,
						dexterity: 1,
						wisdom: 1
					},
					sprites: [4213, 4693]
				},
				{
					name: 'Barbarian',
					description: 'A wild and vicious savage with extreme strength and rage',
					abilities: [
						{
							name: 'Magic Dart',
							description: 'A magical dart of energy that deals between 1-8 damage to a target',
							school: 'conjuration',
							art: 'magic_dart'
						}
					],
					stats: {
						hp: 50,
						strength: 1,
						dexterity: 1,
						wisdom: 1
					},
					sprites: [4337, 4336]
				},
				{
					name: 'Wizard',
					description: 'A scholar of the arcane and all things magical',
					abilities: [
						{
							name: 'Magic Dart',
							description: 'A magical dart of energy that deals between 1-8 damage to a target',
							school: 'conjuration',
							art: 'magic_dart'
						}
					],
					stats: {
						hp: 50,
						strength: 1,
						dexterity: 1,
						wisdom: 1
					},
					sprites: [3858, 4218, 4813]
				},
				{
					name: 'Centaur',
					description: 'Half-man, half-beast with high speed and agility',
					abilities: [
						{
							name: 'Magic Dart',
							description: 'A magical dart of energy that deals between 1-8 damage to a target',
							school: 'conjuration',
							art: 'magic_dart'
						}
					],
					stats: {
						hp: 50,
						strength: 1,
						dexterity: 1,
						wisdom: 1
					},
					sprites: [8521, 8522, 8523]
				}
			]
		}
	},
	created() {},
	methods: {
		getPlayerSpriteImage(id) {
			return `../static/images/player_sprites/${id}.png`
		},
		selectSprite(id) {
			this.$emit('spriteSelected', id)
			// this.selectedSprite = id
			// this.loadGame()
		},
		getSpellSplashArt(school, name) {
			return `../static/images/spells/${school}/${name}.png`
		}
	}
}
</script>
