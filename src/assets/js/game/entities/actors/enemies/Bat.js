/**
 * Created by Larken on 6/22/2017.
 */
import ROT from 'rot-js'
import { StatelessAI } from '#/entities/actors/enemies/StatelessAI.js'
import { getRandomInt, getItemsFromDropTable } from '#/utils/HelperFunctions.js'
import { Game } from '#/Game.js'

export default class Bat extends StatelessAI {
	constructor(x, y, id) {
		let randomHP = getRandomInt(4, 8)
		let randomStr = getRandomInt(1, 2)
		super(
			x,
			y,
			{
				id: id,
				name: 'bat',
				description: 'A creature of the night!',
				visible: true,
				blocked: true,
				chasing: false,
				combat: {
					/* options.combat, dedicated to all things related to combat */
					description: [' attacked '],
					/* max stats */
					maxhp: randomHP,
					maxmana: 5,
					/* current stats */
					hp: randomHP,
					mana: 5,
					str: randomStr,
					def: 1,
					/* misc */
					hostile: true,
					range: 9,
					invulnerable: false
				}
			},
			{
				/* AI parameters */
				morale: 0.4,
				minPlayerDist: 0,
				maxPlayerDist: 0,
				ranged: false,
				melee: true,
				magic: false,
				wanders: true
			}
		)
	}
}
